import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const decompress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const __filename = resolve(__dirname, 'files', 'fileToCompress.txt');
    const __archive = resolve(__dirname, 'files', 'archive.gz');
    const source = createReadStream(__archive);
    const destination = createWriteStream(__filename);
    source.pipe(createGunzip()).pipe(destination);
};

await decompress();