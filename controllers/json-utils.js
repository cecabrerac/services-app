const fs = require("fs");

const readJson = () => {
  let rawdata = fs.readFileSync("authentication/routes/data.json");
  let data = JSON.parse(rawdata);
  return data;
};

const writeJson = (data) => {
  let dataJson = JSON.stringify(data, null, 2);
  fs.writeFileSync("authentication/routes/data.json", dataJson);
};

module.exports = {
  readJson,
  writeJson,
};
