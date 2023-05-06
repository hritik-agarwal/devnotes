const fs = require("fs");
const http = require("http");
const path = require("path");
const fsPromises = fs.promises;

const PORT = process.env.PORT || 3500;

const getContentType = (extension) => {
  switch (extension) {
    case ".css":
      return "text/css";
    case ".js":
      return "text/javascript";
    case ".json":
      return "application/json";
    case ".jpg":
      return "image/jpeg";
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".txt":
      return "text/plain";
    default:
      return "text/html";
  }
};

const getFilePath = (contentType, url) => {
  if (contentType === "text/html") {
    if (url === "/") return path.join(__dirname, "views", "index.html");
    else if (url.slice(-1) === "/")
      return path.join(__dirname, "views", url, "index.html");
    else return path.join(__dirname, "views", url);
  } else {
    return path.join(__dirname, url);
  }
};

const serveFile = async (filePath, contentType, res) => {
  try {
    const encoding = !contentType.includes("image") ? "utf8" : "";
    let data = await fsPromises.readFile(filePath, encoding);
    if (contentType === "application/json") {
      data = JSON.parse(JSON.stringify(data));
    }
    const statusCode = filePath.includes("404") ? 404 : 200;
    res.writeHead(statusCode, {"Content-Type": contentType});
    res.end(data);
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.end();
  }
};

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // extension, contentType, FilePath
  const extension = path.extname(req.url);
  const contentType = getContentType(extension);
  let filePath = getFilePath(contentType, req.url);
  if (!extension && req.url.slice(-1) !== "/") filePath += ".html";

  // serve the file if it exists or redirect to different file
  if (fs.existsSync(filePath)) {
    serveFile(filePath, contentType, res);
  } else {
    const base = path.parse(filePath).base;
    if (base === "old-page.html") {
      res.writeHead(301, {Location: "/new-page.html"});
      res.end();
    } else if (base === "www-page.html") {
      res.writeHead(301, {Location: "/"});
      res.end();
    } else {
      const page_404 = path.join(__dirname, "views", "404.html");
      serveFile(page_404, "text/html", res);
    }
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
