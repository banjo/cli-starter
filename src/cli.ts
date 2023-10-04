import { cli } from "cleye";
import { version } from "../package.json";
import { createHelloWorldCommand } from "./commands/hello-world";

export const argv = cli(
    {
        name: "pkg-name",
        version,
        help: {
            description: "Example CLI",
        },
        commands: [createHelloWorldCommand()],
    },
    args => args.showHelp()
);

export type Args = typeof argv;
