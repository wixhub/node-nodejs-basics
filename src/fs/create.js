import fs from "fs";

const create = async () => {
    try 
    {
        await fs.promises.open("src/fs/files/fresh.txt");
        throw new Error("FS operation failed");
    }
    catch (e) {
        if(e != "Error: FS operation failed") {
            await fs.promises.writeFile("src/fs/files/fresh.txt", "I am fresh and young", "utf-8");
        } else {
            throw e;
        }
    }
};

await create();