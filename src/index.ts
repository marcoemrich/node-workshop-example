import * as http from "http";

console.log("listening to localhost:1337 ...");

http
  .createServer((_req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });

    res.write("Hello, World!\n");
    console.log("Answering Client!");
    res.end();
  })
  .listen(1337);
