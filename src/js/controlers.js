const db = require("./dbconfig");

const getAllRoles = (req, res) => {
  const query = "SELECT * FROM role";
  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
};

const getRole = (req, res) => {
  const query = `SELECT * FROM role WHERE id=${req.params.id}`;
  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.sendStatus(404);
    res.status(200).json(result[0]);
  });
};

const addNewRole = (req, res) => {
  const { name, member_id } = req.body;
  if (!name) return res.status(400).json({ message: "Name is required" });
  const queryToFind = `SELECT * FROM role WHERE name="${name}"`;
  db.query(queryToFind, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length !== 0)
      return res.status(406).json("There is already role with this name");
    const query = "INSERT INTO role SET ?";
    const role = {
      name,
      member_id: member_id || 1,
    };
    db.query(query, role, (err) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: "New role created" });
    });
  });
};

const updateRole = (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ message: "name required " });
    return;
  }
  db.query(`SELECT * FROM role WHERE id=${req.params.id}`, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json("No role with this id");
    let query = "";
    if (name) {
      query = `UPDATE role SET name = '${req.body.name}' WHERE id = '${req.params.id}'`;
      db.query(query, (err) => {
        if (err) return res.status(500).json(err);
      });
    }
    res.status(200).json({ message: "Role updated" });
  });
};

const deleteRole = (req, res) => {
  const query = `DELETE FROM role WHERE id=${req.params.id}`;
  db.query(`SELECT * FROM role WHERE id=${req.params.id}`, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json("No role with this id");
    db.query(query, (err, result) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json({ message: "Role deleted" });
    });
  });
};

module.exports = { getAllRoles, getRole, addNewRole, updateRole, deleteRole };
