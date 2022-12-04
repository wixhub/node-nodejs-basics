import * as crypto from "crypto";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const __filename = resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const data = await readFile(__filename);
    return console.log(crypto.createHash("sha256").update(data).digest("hex"));
};

await calculateHash();