import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

const BASE_URL = "https://swapi.dev/api";

const peopleWithEyeColor = async (color: string) => {
  const people = await (await fetch(BASE_URL + "/people/")).json();
  // console.log(people);
  return people.results.filter((p: any) => p.eye_color === color).map((p: any) => p.name);
};

describe("peopleWithEyeColor", () => {
  beforeEach(() => {
    fetchMock.doMock();
    // @ts-ignore
    fetch.resetMocks();
  });
  it("returns names of people with matching eye color", async () => {
    // @ts-ignore
    fetch.mockResponseOnce(
      JSON.stringify({
        results: [{ name: "Luke", eye_color: "blue" }, { name: "Darth" }],
      })
    );
    const result = await peopleWithEyeColor("blue");
    expect(result).toEqual(["Luke"]);
  });
});
