import { format } from "date-fns";
const formattedDate: string = format(new Date(), "'Today is a ' eeee");
console.log(formattedDate);

test("add two numbers", () => {
  expect(1 + 2).toEqual(3);
});
