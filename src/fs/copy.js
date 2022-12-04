import fs from "fs";

const copy = async () => {
    try 
    {
        const files = await fs.promises.readdir("src/fs/files", { withFileTypes: true });
        await fs.promises.mkdir("src/fs/files_copy");
        for (let file of files) {
            await fs.promises.copyFile("src/fs/files/" + file.name, "src/fs/files_copy/" + file.name);
        }
    }
    catch (e) {
        throw new Error("FS operation failed");
    }
};

copy();