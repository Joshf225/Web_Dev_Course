const fs = require("fs");
const folderName = process.argv[2] || "Project";

// console.log(fs)
// fs.mkdir("Dos", { recursive: true }, (err) => {
//   console.log("In the callbackk!");
//   if (err) throw err;
// });

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "utf-8");
  fs.writeFileSync(`${folderName}/app.js`, "utf-8");
  fs.writeFileSync(`${folderName}/app.css`, "utf-8");
} catch (e) {
  console.log("Didnt work: ", e);
}
