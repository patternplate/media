import path from "path";
import execa from "execa";
import mm from "micromatch";
import yargsParser from "yargs-parser";
import globby from "globby";

const flags = yargsParser(process.argv.slice(2));
const input = flags._;

const config = require(path.join(process.cwd(), "shoot.config.js"));
const bin = path.join(__dirname, "./screenshot.js");
const pattern = input.length > 0 ? input : ["*"];

const o = {cwd: "./fixtures", expandDirectories: false, onlyDirectories: true};
const entries = await globby(pattern, o);

if (entries.length === 0) {
  console.warn("no matches found. available shootings:", (await globby(["*"], o)).join(", "))
}

entries.forEach(entry => {
  console.log(`- ${entry}`);
})

Promise.all(entries.map(async entry => {
  try {
    return execa("node", [
      bin,
      "--in", path.join(config.inputDirectory, entry),
      "--out", path.join(config.outputDirectory, `screenshot-${entry}.svg`),
      flags.serve ? "--serve" : null,
      ...(flags.ppBin ? ["--pp-bin", flags.ppBin] : []),
      ...(flags.psBin ? ["--ps-bin", flags.psBin] : []),
      ...(flags.open ? ["--open", typeof flags.open == "string" ? flags.open : null]: [])
    ].filter(Boolean), {stdio: "inherit"})
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}));
