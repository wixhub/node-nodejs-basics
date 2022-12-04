import { env } from "process";

const parseEnv = () => {
  var printLine = '';
  Object.entries(env).forEach((entry) => 
    printLine += entry[0].startsWith("RSS_") ? `${entry[0]}=${entry[1]}; ` : ''
  );
  console.log(printLine.substring(0, printLine.length - 2));
};

parseEnv();