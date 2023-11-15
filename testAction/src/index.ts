import fs, {writeFileSync} from "node:fs";

let rootDir = process.cwd();
console.log({rootDir});
let text_file_location = rootDir + "/README.md";
let text_file_location2 = rootDir + "/src/content/pages/one.mdx";
let data = fs.readFileSync(text_file_location, {
  encoding: "utf-8",
});
let data2 = fs.readFileSync(text_file_location2, {
  encoding: "utf-8",
});
console.log({data});
console.log({data2});
