// CODE TO MANAGE DATA FROM JSON:
const fs = require("fs");

const getAllCards = (req, res) => {
  try {
    let rawdata = fs.readFileSync("database/cards.json");
    let data = JSON.parse(rawdata);
    res.json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addNewCard = async (req, res) => {
  const { id, title, subtitle, img } = req.body;
  if (id == null || title == null || subtitle == null) {
    return res.status(400).json({
      msg: "Bad Request. Please fill in at least id, title and subtitle fields.",
    });
  }
  if (img == null) img = "";
  try {
    let rawdata = fs.readFileSync("database/cards.json");
    let data = JSON.parse(rawdata);
    data.cards.push({ id, title, subtitle, img });

    let dataJson = JSON.stringify(data, null, 2);
    fs.writeFileSync("database/cards.json", dataJson);

    res.json({ id, title, subtitle, img });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getCard = (req, res) => {
  const { id } = req.params;
  let element = "";
  try {
    let rawdata = fs.readFileSync("database/cards.json");
    let data = JSON.parse(rawdata);
    for (let i = 0; i < data.cards.length; i++) {
      if (id == data.cards[i].id) element = data.cards[i];
    }
    res.json(element);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCards,
  addNewCard,
  getCard,
};

// CODE CONNECTED TO DATABASE:
// const { getConnection, sql } = require("../database/connection");

// const getAllCards = async (req, res) => {
//   try {
//     const pool = await getConnection();
//     // const result = await pool.request().execute(`spGetAllCards`);
//     const result = await pool.request().query("SELECT * FROM Cards");
//     res.json(result.recordset);
//   } catch (error) {
//     res.status(500);
//     res.send(error.message);
//   }
// };

// const addNewCard = async (req, res) => {
//   const { id, title, subtitle, img } = req.body;
//   if (id == null || title == null || subtitle == null) {
//     return res.status(400).json({
//       msg: "Bad Request. Please fill in at least id, title and subtitle fields.",
//     });
//   }
//   if (img == null) img = "";
//   try {
//     const pool = await getConnection();
//     pool
//       .request()
//       .input("id", sql.Int, id)
//       .input("title", sql.VarChar, title)
//       .input("subtitle", sql.VarChar, subtitle)
//       .input("img", sql.VarChar, img)
//       // .execute(`spAddCard`);
//       .query(
//         "INSERT INTO Cards (id, title, subtitle, img) VALUES (id, title, subtitle, img); ",
//       );
//     res.json({ id, title, subtitle, img });
//   } catch (error) {
//     res.status(500);
//     res.send(error.message);
//   }
// };

// async function getCard() {
//   try {
//     const { id } = req.params;
//     const pool = await getConnection();
//     const result = await pool
//       .request()
//       .input("id", sql.Int, id)
//       .query("SELECT * from Cards where id = @id");
//     return result.recordsets;
//   } catch (error) {
//     console.log(error);
//   }
// }

// module.exports = {
//   getAllCards,
//   addNewCard,
//   getCard,
// };
