import fs from "fs";

const create = async () => {
    try 
    {
        await fs.promises.writeFile("src/fs/files/fresh.txt", "I am fresh and young",  { flag: 'wx' }, "utf-8");
    }
    catch (e) {
        console.error("FS operation failed");
    }
};

await create();