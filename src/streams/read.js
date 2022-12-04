import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { stdout } from "process";

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const __filename = resolve(__dirname, 'files', 'fileToRead.txt');
    const stream = createReadStream(__filename);
    stream.pipe(stdout);
    stream.on("readable", () => stream.read());
};

await read();