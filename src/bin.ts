#!/usr/bin/env node

import { Args, argv } from "./cli";

const main = (args: Args) => {
    console.log(args);
};

main(argv);
