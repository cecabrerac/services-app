const { getConnection, sql } = require("../database/connection");
const cards = require("../database/cards.json");

const getAllAppUsers = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().execute(`spGetAllUsers`);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addNewUser = async (req, res) => {
  const { name, surname, gender, address, city } = req.body;
  if (name == null || surname == null || gender == null) {
    return res.status(400).json({
      msg: "Bad Request. Please fill in at least name, surname and gender fields.",
    });
  }
  if (address == null) address = "";
  if (city == null) city = "";
  try {
    const pool = await getConnection();
    pool
      .request()
      .input("name", sql.VarChar, name)
      .input("surname", sql.VarChar, surname)
      .input("gender", sql.VarChar, gender)
      .input("address", sql.VarChar, address)
      .input("city", sql.VarChar, city)
      .execute(`spAddUser`);
    res.json({ name, surname, gender, address, city });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id)
    .execute(`spSelectUserById`);
  res.send(result.recordset[0]);
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id)
    .execute(`spDeleteUserById`);
  res.send(result);
};

const updateUserById = async (req, res) => {
  const { name, surname, gender, address, city } = req.body;
  const { id } = req.params;
  if (name == null || surname == null || gender == null) {
    return res.status(400).json({
      msg: "Bad Request. Please fill in at least name, surname and gender fields.",
    });
  }
  if (address == null) address = "";
  if (city == null) city = "";
  try {
    const pool = await getConnection();
    pool
      .request()
      .input("name", sql.VarChar, name)
      .input("surname", sql.VarChar, surname)
      .input("gender", sql.VarChar, gender)
      .input("address", sql.VarChar, address)
      .input("city", sql.VarChar, city)
      .input("id", sql.Int, id)
      .execute(`spUpdateUserById`);
    res.json({ name, surname, gender, address, city });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//  const getCountOfUsers = async (req, res) => {
//   try {
//     const pool = await getConnection();
//     const result = await pool.request().execute(`spCountOfUsers`);
//     res.json(result.recordset[0][""]);
//   } catch (error) {
//     res.status(500);
//     res.send(error.message);
//   }
// };

const getCards = (req, res) => {
  try {
    const pool = cards;
    const result = pool;
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = {
  addNewUser,
  deleteUserById,
  getAllAppUsers,
  // getCountOfUsers,
  getUserById,
  updateUserById,
  getCards,
};
