import { createHelloWorldCommand } from "@/commands/hello-world";
import { cli } from "cleye";
import { version } from "../package.json";

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
