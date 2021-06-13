type Person = {
  firstName: string;
  name: string;
};
type RemotePerson = {
  read: Function;
  fullName: Function;
};

let createPerson = (id: number): RemotePerson => {
  const read = function (id: number): Person {
    //fetch from API
    return { name: "Foo", firstName: "Bar" };
  };

  return {
    read: read,

    fullName: function () {
      const personData = this.read(id);
      return personData.firstName + " " + personData.name;
    },
  };
};

describe("Stub Example", () => {
  it("should return full name of Person from API", () => {
    const p = createPerson(1);
    //@ts-ignore
    const spy = jest.spyOn(p, "read");

    //@ts-ignore
    spy.mockReturnValue({ name: "Wonder", firstName: "Alice" });

    p.fullName();

    // expect(spy).toHaveBeenCalledTimes(2)
    expect(p.fullName()).toEqual("Alice Wonder");
  });
});
