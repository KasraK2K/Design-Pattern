import logger from "./03-singletone.js";

export default function LogSecondImplementation() {
  logger.printLogCount();
  logger.log("Second File");
  logger.printLogCount();
}
