import fs from 'fs';


fs.writeFileSync('myFile.txt', 'Hello World!');

const myFile = fs.readFileSync('myFile.txt', 'utf8');
console.log(myFile);