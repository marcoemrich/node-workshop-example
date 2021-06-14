import * as http from "http";
import knex from "knex";

console.log("listening to localhost:1337 ...");
console.log("env", process.env);

interface city {
  id: number;
  name: string;
}

const pg = knex({
  client: "pg",
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ["knex", "public"],
});

const select = knex<City>("cities").select({
  city: "a.city",
});

console.log("knex", select);

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
