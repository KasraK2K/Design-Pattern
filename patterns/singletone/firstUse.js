import logger from "./03-singletone.js";

export default function LogFirstImplementation() {
  logger.printLogCount();
  logger.log("First File");
  logger.printLogCount();
}

