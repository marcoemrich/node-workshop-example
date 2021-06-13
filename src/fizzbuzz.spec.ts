import { fizzbuzz } from "./fizzbuzz";

test("add two numbers", () => {
  expect(1 + 2).toEqual(3);
});

describe("fizzbuzz", () => {
  it.todo("returns a number as string for no special cases (1 => '1')");
  it.todo("returns a fizz for a number that is divisible by 3");
  it.todo("returns a buzz for a number that is divisible by 5");
  it.todo("returns bizz for a number that is divisible by 7");
  it.todo("returns fizzbuzz for a number that is divisible by 3 and 5");
  it.todo("returns fizzbizz for a number that is divisible by 3 and 7");
  it.todo("returns buzzbizz for a number that is divisible by 5 and 7");
  it.todo("returns fizzbuzzbizz for a number that is divisible by 3, 5 and 7");
});

/*

# Exercise

1. Write Specs
2. improve/refactor code for better readability
3. play code golf. Par: ~170, To Beat: 102

*/
