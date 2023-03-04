#!/usr/bin/env node

import { cli, command } from "cleye";
import { version } from "../package.json";

console.log(); // Add a newline

const name = "<name>";

const subCommand = command(
    {
        name: "subcommand",
        parameters: [name],
        help: {
            description: "Example subcommand",
            usage: "subcommand <name>",
        },
    },
    async argv => {
        console.log(`Hello ${argv.name}`);
    }
);

cli(
    {
        name: "pkg-name",
        version,
        commands: [subCommand],
        help: {
            description: "Example CLI",
        },
    },
    async argv => argv.showHelp()
);
