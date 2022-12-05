import { spawn } from "child_process";
import { stdin, stdout } from "process";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const spawnChildProcess = async (args) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const __filename = resolve(__dirname, 'files', 'script.js');
    const child = spawn("node", [__filename].concat(args));
    stdin.pipe(child.stdin);
    child.stdout.pipe(stdout);
};

spawnChildProcess(process.argv);