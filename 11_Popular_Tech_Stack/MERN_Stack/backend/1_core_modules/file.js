// || FS
const fs = require("fs");
const path = require("path");
const fsPromises = fs.promises;

// Reading File
const filePath = path.join(__dirname, "read.txt");
fs.readFile(filePath, (err, data) => {
  if (err) throw err;
  console.log(data); // buffer data
  console.log(data.toString("utf8")); // string data (default ecoding - utf8)
});

// Writing to File
const filePath = path.join(__dirname, "write.txt");
const data = "Hi, I am now 23 years old.";
fs.writeFile(filePath, data, (err) => {
  if (err) throw err;
  console.log("Write operation complete");
});

// Appending to File
const filePath = path.join(__dirname, "append.txt");
const data = "Hi, I am now 23 years old.";
fs.appendFile(filePath, data, (err) => {
  if (err) throw err;
  console.log("Append operation complete");
});

// Renaming a File
const oldFilePath = path.join(__dirname, "old.txt");
const newFilePath = path.join(__dirname, "new.txt");
fs.rename(oldFilePath, newFilePath, (err) => {
  if (err) throw err;
  console.log("Rename operation complete");
});

// Deleting a file
const filePath = path.join(__dirname, "delete.txt");
fs.unlink(filePath, (err) => {
  if (err) throw err;
  console.log("Delete operation complete");
});

// File Operatins with Promises
const fileOperations = async () => {
  const filePath = path.join(__dirname, "promises.txt");
  const newFilePath = path.join(__dirname, "newPromises.txt");
  try {
    const data = await fsPromises.readFile(filePath, "utf8");
    console.log("inside try-catch block: ", {data});
    await fsPromises.unlink(filePath);
    await fsPromises.writeFile(filePath, "New Data");
    await fsPromises.appendFile(filePath, "Append Data");
    await fsPromises.rename(filePath, newFilePath);
    const newData = await fsPromises.readFile(newFilePath, "utf8");
    console.log("inside try-catch block: ", {newData});
  } catch (err) {
    console.error(err);
  }
};
fileOperations();

// Checking if a file exists
console.log(fs.existsSync("./new"));

// Create a directory
fs.mkdir("new", (err) => {
  if (err) throw err;
  console.log("Directory created");
});

// Deletre a directory
fs.rmdir("new", (err) => {
  if (err) throw err;
  console.log("Directory created");
});

// Reading and Writing files through streams
const readfilePath = path.join(__dirname, "lorem.txt");
const writeFilePath = path.join(__dirname, "newlorem.txt");
const rs = fs.createReadStream(readfilePath, "utf8");
const ws = fs.createWriteStream(writeFilePath);

// Reading data and Writing Data
rs.on("data", (dataChunk) => {
  ws.write(dataChunk);
});
// another direct way
rs.pipe(ws);