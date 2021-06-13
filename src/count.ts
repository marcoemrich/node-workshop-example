import { readFile } from "fs/promises";

const numRows = async () => {
  const pathToFile = "./foo.txt";
  const fileContent = await readFile(pathToFile, { encoding: "utf8" });
  return fileContent.split("\n").length;
};
(async () => {
  try {
    console.log(await numRows());
  } catch (e) {
    console.error("e");
  }
})();
