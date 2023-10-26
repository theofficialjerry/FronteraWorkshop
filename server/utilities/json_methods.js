import fs, { readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const getTargetPath = (fileStartingString) => {
    const currentFilePath = import.meta.url;
    const currentDir = path.dirname(fileURLToPath(currentFilePath));
    const subFolder = '../json/pokemon/'
    const fileName = `${fileStartingString}_data.json`

    const filePath = path.join(currentDir, subFolder, fileName);

    return filePath
}

const writeJSONtoFile = (data, fileStartingString) => {

    const jsonData = JSON.stringify(data, null, 2);
    const filePath = getTargetPath(fileStartingString);

    fs.writeFileSync(filePath, jsonData);
}

const readJsonFile = (fileName) => {
    try {
        let data = fs.readFileSync(fileName, 'utf-8');
        return JSON.parse(data);
    }
    catch (err) {
        throw new Error(`cant read json data from file: ${fileName}`)
    }
}

const readJSONfromDir = (dirName = "json/pokemon") => {
    try {
        const filesInDir = readdirSync(dirName);

        const jsonFiles = filesInDir.filter((file) => path.extname(file) === '.json');

        let allData = [];

        jsonFiles.forEach(file => {
            const jsonData = readJsonFile(`${dirName}/${file}`);

            console.log(`Reading file: ${file}, Length: ${jsonData.length}`)

            jsonData.forEach(cardObj => {
                allData.push(cardObj);
            })
        });

        return allData;
    }
    catch (err) {
        throw new Error(`can't read files from directory: ${dirName}`)

    }
}

export { writeJSONtoFile, readJSONfromDir };