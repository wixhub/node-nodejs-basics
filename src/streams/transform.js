import { stdin, stdout } from "process";

const transform = async () => {
    stdin.on("readable", () => {
        stdout.write(stdin.read().reverse());
    });
};

await transform();