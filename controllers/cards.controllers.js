const { getConnection, sql } = require("../database/connection");

const getAllCards = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().execute(`spGetAllCards`);
    console.log(result);
    res.json(result.recordset);
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
    const pool = await getConnection();
    pool
      .request()
      .input("id", sql.Int)
      .input("title", sql.VarChar, title)
      .input("subtitle", sql.VarChar, subtitle)
      .input("img", sql.VarChar, img)
      .execute(`spAddCard`);
    res.json({ id, title, subtitle, img });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = {
  getAllCards,
  addNewCard,
};
