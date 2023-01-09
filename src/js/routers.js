const express = require("express");
const router = express.Router();
const {
  getAllRoles,
  addNewRole,
  getRole,
  updateRole,
  deleteRole,
} = require("./controlers");
router
  .get("/roles", getAllRoles)
  .get("/role/:id", getRole)
  .post("/role", addNewRole)
  .put("/role/:id", updateRole)
  .delete("/role/:id", deleteRole);

module.exports = router;
