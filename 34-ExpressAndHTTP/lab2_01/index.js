const http = require("http");
const fs = require("fs");

const server = http.createServer();
let statusCode = 200;

const readFiles = (fileName) => {
  const data = fs.readFileSync(__dirname + `/public/${fileName}`);
  return data;
};

let indexFileBuffer = readFiles("index.html");
let page1FileBuffer = readFiles("page1.html");
let page2FileBuffer = readFiles("page2.html");

const serveIndex = function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(indexFileBuffer);
};

const servePage1 = function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(page1FileBuffer);
};

const servePage2 = function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(page2FileBuffer);
};

const serveJson = function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end("{message: 'Json object'}");
};

const serveAllRequests = function (req, res) {
  if (req.method === "POST") {
    serveJson(req, res);
    return;
  }

  switch (req.url) {
    case "/index":
      serveIndex(req, res);
      break;
    case "/page1":
      servePage1(req, res);
      break;
    case "/page2":
      servePage2(req, res);
      break;
    default:
      serveIndex(req, res);
      break;
  }
};

server.on("request", serveAllRequests);

server.listen(7272, "localhost", () => {
  console.log("Server is listening at http://localhost:7272");
});
