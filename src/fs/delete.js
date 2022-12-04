import fs from "fs";

const remove = async () => {
    try 
    {
        await fs.promises.access("src/fs/files/fileToRemove.txt");
        await fs.promises.rm("src/fs/files/fileToRemove.txt");
    }
    catch (e) {
        throw new Error("FS operation failed");
    }
    
};

await remove();