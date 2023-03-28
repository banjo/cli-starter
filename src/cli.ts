import { cli } from "cleye";
import { version } from "../package.json";

export const argv = cli(
    {
        name: "pkg-name",
        version,
        help: {
            description: "Example CLI",
        },
    },
    argv => argv.showHelp()
);

export type Args = typeof argv;
