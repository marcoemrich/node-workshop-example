import fetch from "isomorphic-fetch";

const BASE_URL = "https://swapi.dev/api";

const peopleWithEyeColor = async (color: string) => {
  const people = await (await fetch(BASE_URL + "/people/")).json();
  // console.log(people);
  return people.results.filter((p: any) => p.eye_color === color).map((p: any) => p.name);
};

describe("peopleWithEyeColor", () => {
  it("returns names of people with matching eye color", async () => {
    const result = await peopleWithEyeColor("blue");
    expect(result).toEqual(["Luke Skywalker", "Owen Lars", "Beru Whitesun lars"]);
  });
});

// console.log(await people.text());
