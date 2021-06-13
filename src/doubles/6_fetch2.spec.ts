import fetch from "isomorphic-fetch";

const BASE_URL = "https://swapi.dev/api";

const fetchPeople = async (extFetch = fetch) =>
  (await (await extFetch(BASE_URL + "/people/")).json()).results;

const peopleWithEyeColor = async (color: string, allPeople: Array<any>) => {
  return allPeople.filter((p) => p.eye_color === color).map((p) => p.name);
};

describe("peopleWithEyeColor", () => {
  it("returns names of people with matching eye color", async () => {
    const people = [{ eye_color: "blue", name: "Luke" }];
    const result = await peopleWithEyeColor("blue", people);

    expect(result).toEqual(["Luke"]);
  });
  it("does not return names of people with wrong eye color", async () => {
    const people = [{ eye_color: "grey", name: "Luke" }];
    const result = await peopleWithEyeColor("blue", people);

    expect(result).toEqual([]);
  });
});

describe("fetchPeople", () => {
  it("returns a people array from star wars", async () => {
    const fetchSpy = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ results: [{ name: "Luke" }, { name: "Darth" }] }),
      })
    );
    // @ts-ignore
    const result = await fetchPeople(fetchSpy);
    expect(result).toHaveLength(2);
    expect(result).toContainEqual({ name: "Luke" });
    expect(fetchSpy).toBeCalledWith(expect.stringMatching(/people\/$/));
  });
});

// console.log(await people.text());
