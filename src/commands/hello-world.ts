import { command } from "cleye";
import {} from "type-flag"; // make build happy

export const createHelloWorldCommand = () =>
    command(
        {
            name: "hello-world",
            parameters: [],
            help: {
                description: `Hello world`,
                usage: `hello-world`,
            },
            flags: {
                example: {
                    default: "example",
                    type: String,
                    alias: "e",
                    description: `Some example flag description`,
                },
            },
        },
        argv => {
            argv.showHelp();
        }
    );
