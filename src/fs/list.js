import fs from "fs";

const list = async () => {
    try 
    {
        const files = await fs.promises.readdir("src/fs/files", { withFileTypes: true });
        for (let file of files) {
            console.log(file.name);
        }
    }
    catch (e) {
        console.error("FS operation failed");
    }
};

await list();