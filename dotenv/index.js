const fs = require("fs");
const { join } = require("path");
String.prototype.empty = function () {
  return this;
};

module.exports = {
  config: ({ path = "./.env", executeCode = false }) => Object.assign(process.env, fs.readFileSync(join(path), "utf8").split("\n").filter((line) => !line.startsWith("#") && (line.split("=").length > 1)).map((line) => line.trim().split("#")[0].split("=")).reduce((data, accumulator) => ({
    ...data,
    ...{
      [accumulator[0]]: JSON.parse(accumulator[1].trim()[(executeCode) ? "replaceAll" : "empty"](/<([^>]+)>/g, (_, expression) => eval(expression)))
    }
  }), {}))
};