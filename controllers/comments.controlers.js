// CODE TO MANAGE DATA FROM JSON:
const fs = require("fs");

const getAllComments = (req, res) => {
  try {
    let rawdata = fs.readFileSync("database/comments.json");
    let data = JSON.parse(rawdata);
    res.json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addNewComment = async (req, res) => {
  const { text } = req.body;
  let rawdata = fs.readFileSync("database/comments.json");
  let data = JSON.parse(rawdata);
  const commentsLength = data.comments.length;
  data.comments[commentsLength - 1].id;
  const id = data.comments[commentsLength - 1].id + 1;
  if (id == null || id == undefined) id = 0;
  if (text == null) {
    return res.status(400).json({
      msg: "Bad Request. Please fill in the text area field.",
    });
  }

  try {
    data.comments.push({ id, text });

    let dataJson = JSON.stringify(data, null, 2);
    fs.writeFileSync("database/comments.json", dataJson);

    res.json({ id, text });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getComment = (req, res) => {
  const { id } = req.params;
  let element = "";
  try {
    let rawdata = fs.readFileSync("database/comments.json");
    let data = JSON.parse(rawdata);
    for (let i = 0; i < data.comments.length; i++) {
      if (id == data.comments[i].id) element = data.comments[i];
    }
    res.json(element);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllComments,
  addNewComment,
  getComment,
};
