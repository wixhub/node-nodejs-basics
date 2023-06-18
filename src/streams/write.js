import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { stdin } from "process";

const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const __filename = resolve(__dirname, 'files', 'fileToWrite.txt');
    const stream = createWriteStream(__filename, { encoding: "utf-8" });
    stdin.pipe(stream);
};

await write();