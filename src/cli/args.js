import { argv } from "process";

const parseArgs = () => {
    const a = argv.slice(2);
    let printLine = '';
    for (let i = 0; i < a.length; i += 2) {
        printLine += `${a[i].slice(2)} is ${a[i + 1]}, `;
    }
    
    printLine.length > 5 ?
    console.log(printLine.substring(0, printLine.length - 2)) :
    console.log("Try npm run cli:args");
};

parseArgs();