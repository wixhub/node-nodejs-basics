import os from 'os';
import wt from 'worker_threads';
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const performCalculations = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const __filename = resolve(__dirname, 'worker.js');

    function createWorker(number) {
      return new Promise(result => {
        const worker = new wt.Worker(__filename, { workerData: number });
        worker.on('message', number => result({ status: 'resolved', data: number }));
        worker.on('error', () => result({ status: 'error', data: null }));
      });
    }
    
    return console.log(await Promise.all(os.cpus().map(({}, i) => createWorker(10 + i))));
};

await performCalculations();