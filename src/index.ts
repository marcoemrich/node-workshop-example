import { format } from "date-fns";
const formattedDate: string = format(new Date(), "'Today is a ' eeee");
console.log(formattedDate);
