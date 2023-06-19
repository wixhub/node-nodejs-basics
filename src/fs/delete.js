import fs from "fs";

const remove = async () => {
    try 
    {
        await fs.promises.rm("src/fs/files/fileToRemove.txt");
    }
    catch (e) {
        console.error("FS operation failed");
    }
};

await remove();