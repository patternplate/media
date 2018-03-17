import Path from "path";
import Url from "url";
import yargsParser from "yargs-parser";
import {merge, omit} from "lodash";
import * as sander from "@marionebl/sander";
import requireFromString from "require-from-string";
import findUp from "find-up";
import execa from "execa";
import dargs from "dargs";
import tempy from "tempy";
import express from "express";
import http from "http";

async function main(cli) {
  const config = await getConfig({cwd: cli.flags.in});
  const build = tempy.directory();

  const serving = serve({cwd: build});
  await bin(cli.flags.ppBin || "patternplate", ["build"], {base: "/", out: build}, {cwd: cli.flags.in});

  const server = await serving;

  const url = Url.format({
    protocol: "http",
    hostname: "localhost",
    port: server.port,
    pathname: (config.url || {}).pathname || "/",
    query: (config.url || {}).query || {},
    hash: (config.url || {}).hash || ''
  });

  const svg = omit(config.svg, ["url", "out"]);
  const flags = merge({url, out: cli.flags.out}, svg);

  await bin(cli.flags.psBin || "patternplate-screenshot", flags, {stdio: "inherit"});

  if (!cli.flags.serve) {
    server.server.close();
  } else {
    console.log(url);
  }
}

async function bin(cmd, input, args, options) {
  if (!Array.isArray(input)) {
    options = args;
    args = input;
    input = []
  }

  const executable = cmd.startsWith("/") || cmd.startsWith(".")
    ? cmd
    : Path.join(await findUp("node_modules", {cwd: options.cwd || process.cwd()}), ".bin", cmd);

  args._ = input;
  return execa(executable, dargs(args), options);
}

async function getConfig({cwd}) {
  const file = Path.join(cwd, "screenshot.config.js");
  if (await sander.exists(file)) {
    return requireFromString(String(await sander.readFile(file), file));
  } else {
    return {};
  }
}

async function serve({cwd}) {
  const app = express();
  app.use(express.static(cwd));

  const start = 1337;
  const end = 31337;
  let started = true;

  const server = await ([...Array(end - start).keys()].reduce(async (accing, _, i) => {
    const previous = await accing;
    if (previous !== null) {
      return previous;
    }
    return listen(app, {port: start + i});
  }, Promise.resolve(null)));

  if (server === null) {
    throw new Error(`Could not start server between ${start} and ${end}`);
  }

  return server;
}

function listen(app, {port}) {
  return new Promise((resolve, reject) => {
    const server = http.createServer(app);
    server.on("error", () => resolve(null));
    server.listen(port, () => {
      resolve({server, port})
    });
  });
}

function withCli(fn) {
  const argv = yargsParser(process.argv.slice(2));
  const cli = {
    flags: omit(argv, "_"),
    input: argv._
  };
  return () => fn(cli)
    .catch(err => {
      if (err.controlled) {
        console.error(err.message);
      }
      console.error(err);
      process.exit(1);
    });
}

withCli(main)();
