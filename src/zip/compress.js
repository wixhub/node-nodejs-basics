import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { promisify } from "util";
import { pipeline } from "stream";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const compress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const __filename = resolve(__dirname, 'files', 'fileToCompress.txt');
    const __archive = resolve(__dirname, 'files', 'archive.gz');
    const source = createReadStream(__filename);
    const destination = createWriteStream(__archive);
    const pipe = promisify(pipeline);
    const gzip = createGzip();
    await pipe(source, gzip, destination);
};

await compress();