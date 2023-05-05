const fs = require("fs");
const http = require("http");
const path = require("path");
const fsPromises = fs.promises;

const PORT = process.env.PORT || 3500;

const getContentType = (extension) => {
  // switch (extension) {
  //   case '.html':
  //     return 'text/css'
  //   case '.css'"
  // }
}

const server = http.createServer((req, res) => {
  const {url} = req;
  if (url === "/" || url === "index.html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    const filePath = path.join(__dirname, "views", "index.html");
    fs.readFile(path, "utf8", (error, data) => {
      res.end(data);
    });
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
