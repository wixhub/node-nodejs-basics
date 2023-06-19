import { env } from "process";

const parseEnv = () => {
  let printLine = '';
  Object.entries(env).forEach((entry) => 
    printLine += entry[0].startsWith("RSS_") ? `${entry[0]}=${entry[1]}; ` : ''
  );

  printLine.length > 5 ?
  console.log(printLine.substring(0, printLine.length - 2)) :
  console.log("Try npm run cli:env");
};

parseEnv();