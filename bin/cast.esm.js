import Path from "path";
import execa from "execa";
import mm from "micromatch";
import yargsParser from "yargs-parser";
import globby from "globby";
import { create } from "domain";
import * as sander from "@marionebl/sander";
import requireFromString from "require-from-string";
import findUp from "find-up";
import { exec } from "child_process";
import dargs from "dargs";

const flags = yargsParser(process.argv.slice(2));
const input = flags._;

const config = require(Path.join(process.cwd(), "cast.config.js"));
const pattern = input.length > 0 ? input : ["*"];

const o = {cwd: "./casts", expandDirectories: false, onlyDirectories: true};
const entries = await globby(pattern, o);

if (entries.length === 0) {
  console.warn("no matches found. available casts:", (await globby(["*"], o)).join(", "))
}

entries.forEach(entry => {
  console.log(`- ${entry}`);
})

Promise.all(entries.map(async entry => {
  const cast = await createCast({
    cwd: Path.resolve(config.inputDirectory, entry),
  });

  await sander.writeFile(config.outputDirectory, `cast-${entry}.svg`, cast);
}));

async function createCast({cwd}) {
  const config = await getConfig({cwd});
  const result = await execa("../../node_modules/.bin/svg-term", [
    "--command", config.cast,
    ...dargs(config.term)
  ], {
    cwd,
    stderr: "inherit"
  });
  return typeof config.transform === "function" ? config.transform(result.stdout) : result.stdout;
}

async function getConfig({cwd}) {
  const file = Path.resolve(cwd, "screencast.config.js");
  if (await sander.exists(file)) {
    return requireFromString(String(await sander.readFile(file), file));
  } else {
    return {};
  }
}

