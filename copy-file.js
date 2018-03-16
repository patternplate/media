#!/usr/bin/env node
const sander = require("@marionebl/sander");
const parser = require("yargs-parser");
const path = require("path");
const {omit} = require("lodash");

async function main(cli) {
    if (typeof cli.flags.outDir !== "string") {
        throw error(`--out-dir is required`);
    }

    const filePath = cli.input[0];

    if (typeof filePath !== "string") {
        throw error(`[filepath] is required`);
    }

    await sander
        .copyFile(process.cwd(), filePath)
        .to(cli.flags.outDir, path.basename(filePath));
}

withCli(main)();

function error(message) {
    const err = new Error(message);
    err.controlled = true;
    return err;
  }

function withCli(fn) {
  const argv = parser(process.argv.slice(2));
  const cli = {
    flags: omit(argv, "_"),
    input: argv._
  };
  return () =>
    fn(cli).catch(err => {
      if (err.controlled) {
        console.error(err.message);
      }
      console.error(err);
      process.exit(1);
    });
}

