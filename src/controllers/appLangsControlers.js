const es = require("../data/es.json");
const en = require("../data/en.json");

export const getLangSpanish = (req, res) => {
  try {
    const esDictionary = es;
    res.json(esDictionary);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getLangEnglish = (req, res) => {
  try {
    const enDictionary = en;
    res.json(enDictionary);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
