import fs from "fs";

const rename = async () => {
    try 
    {
        await fs.promises.access("src/fs/files/wrongFilename.txt");
        try 
        {
            await fs.promises.access("src/fs/files/properFilename.md");
        }
        catch (e) {
            await fs.promises.rename("src/fs/files/wrongFilename.txt", "src/fs/files/properFilename.md");
        }
    }
    catch (e) {
        throw new Error("FS operation failed");
    }
};

await rename();