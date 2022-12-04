import fs from "fs";

const read = async () => {
    try 
    {
        console.log(await fs.promises.readFile("src/fs/files/fileToRead.txt", { encoding: "utf-8" }));
    }
    catch (e) {
        throw new Error("FS operation failed");
    }
};

await read();