import { env } from "process";

const parseEnv = () => {
    Object.entries(env).forEach((entry) => {
        if (entry[0].startsWith("RSS_")) {
          console.log(`${entry[0]}=${entry[1]}`);
        }
      });
};

parseEnv();