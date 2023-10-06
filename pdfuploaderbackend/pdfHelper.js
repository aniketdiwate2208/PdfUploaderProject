import pdf from "pdf-parse";
import fs from "fs";
const calculateNumberOfPages = async (filename) => {
  const dataBuffer = fs.readFileSync(filename);
  const data = await pdf(dataBuffer);
  return data.numpages;
};

export { calculateNumberOfPages };
