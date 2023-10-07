const http = require("http");
const fs = require("fs");

const server = http.createServer();

let indexFileBuffer;
let statusCode = 200;

fs.readFileSync(__dirname + "/index.html", (err, buffer) => {
  if (err) {
    console.log(err);
    statusCode = 500;
  }
  indexFileBuffer = buffer;
});

const helloWorld = (req, res) => {
  if (200 === statusCode) {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.end("<h1>Hello World</h1>");
    res.end("{message: 'Hello World'}");
  } else {
    res.end(statusCode);
  }
};

const serveIndexPage = function (req, res) {
  //   const buffer = fs.readFileSync("./index.html");

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(indexFileBuffer);
};

server.on("request", serveIndexPage);
server.listen(8080, "localhost", () => {
  console.log("Server is listening at http://localhost:8080");
});

// the prblem with this code is it is blocking code.
