import fs from "fs";

const read = async () => {
    try 
    {
        console.log(await fs.promises.readFile("src/fs/files/fileToRead.txt", { encoding: "utf-8" }));
    }
    catch (e) {
        console.error("FS operation failed");
    }
};

await read();