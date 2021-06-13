import fetch from "isomorphic-fetch";

const BASE_URL = "https://swapi.dev/api";

const showPeople = async () => {
  const people = await (await fetch(BASE_URL + "/people/")).json();
  console.log(people.results.map((p: { name: string }) => p.name));
};

showPeople();
