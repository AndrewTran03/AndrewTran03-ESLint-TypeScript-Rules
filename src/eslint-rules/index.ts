// export * from "./eslint.rules";
// export * from "./types";

import fs from "node:fs";
import path from "node:path";

const CURRENT_WORKING_DIRECTORY = path.join(__dirname, ".");
const SEARCHED_FILE_EXTENSION = ".ts";

const directoryContents = fs.readdirSync(CURRENT_WORKING_DIRECTORY);
console.log(directoryContents);
const relativeFilePaths: string[] = [];

for (const file of directoryContents) {
    const filePath = path.join(CURRENT_WORKING_DIRECTORY, file);
    const fileStat = fs.statSync(filePath);
    if (fileStat.isFile() && path.extname(file) === SEARCHED_FILE_EXTENSION) {
        const relativeFilePath = `./${file}`.slice(0, -SEARCHED_FILE_EXTENSION.length);
        relativeFilePaths.push(relativeFilePath);
    }
}

relativeFilePaths.forEach((relativeFilePath) => {
    export * from relativeFilePath;
});
