const os = require("os");
const http = require("http");

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(
    `CI/CD Docker OK\nServeur: ${os.hostname()}\n`
  );
}).listen(PORT);

console.log("Application démarrée");
