import * as http from "http";
import knex from "knex";

console.log("listening to localhost:1337 ...");
// console.log("env", process.env);

interface City {
  id: number;
  name: string;
}

const PG_CONNECTION_STRING = "postgresql://postgres:foofoofoo1337@localhost:5432/postgres";

// const PG_CONNECTION_STRING = process.env.PG_CONNECTION_STRING

console.log("PG_CONNECTION_STRING", PG_CONNECTION_STRING);

const pg = knex({
  client: "pg",
  connection: PG_CONNECTION_STRING,
});

// const cities = knex<City>("cities").select("name");

// console.log("knex", cities);

pg.select("*")
  .from("cities")
  .then((rows) => console.log(rows))
  .catch((e) => console.log(e));

http
  .createServer((req, res) => {
    console.log(JSON.stringify(req.url));

    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    pg.select("name")
      .from("cities")
      .where("id", req.url?.slice(1))
      .then((c) => {
        res.write(c[0].name);
      })
      .catch((e) => console.log(e))
      .finally(() => res.end());
  })
  .listen(1337);
