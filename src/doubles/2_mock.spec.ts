const show = (text: string) => console.log(text + "\n");

const greet = (name: string, extPrint = show) => extPrint("Hello " + name);

describe("Mock Example: greet", () => {
  it("should print a greeting with Name", () => {
    const showMock = jest.fn();
    greet("Alice", showMock);
    expect(showMock).toBeCalledWith("Hello Alice");
  });
});

// greet("Steve", console.log.bind(console));
