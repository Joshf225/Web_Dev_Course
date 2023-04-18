import { franc, francAll } from "franc";
import pkg from "langs";
const input = process.argv[2];
const langCode = franc(input);

const language = pkg.where("3", langCode);

console.log(language.name);
