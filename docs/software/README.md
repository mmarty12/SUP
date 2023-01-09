# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:

## SQL-скрипт для створення на початкового наповнення бази даних

```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema SUP
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `SUP` ;

-- -----------------------------------------------------
-- Schema SUP
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `SUP` DEFAULT CHARACTER SET utf8 ;
USE `SUP` ;

-- -----------------------------------------------------
-- Table `SUP`.`artifact`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`artifact` ;

CREATE TABLE IF NOT EXISTS `SUP`.`artifact` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`task` ;

CREATE TABLE IF NOT EXISTS `SUP`.`task` (
  `id` INT NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `deadline` DATETIME NULL DEFAULT NULL,
  `artifact_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_task_artifact1_idx` (`artifact_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_artifact1`
    FOREIGN KEY (`artifact_id`)
    REFERENCES `SUP`.`artifact` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`project` ;

CREATE TABLE IF NOT EXISTS `SUP`.`project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `team` VARCHAR(45) NULL,
  `task_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_project_task1_idx` (`task_id` ASC) VISIBLE,
  CONSTRAINT `fk_project_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `SUP`.`task` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`member`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`member` ;

CREATE TABLE IF NOT EXISTS `SUP`.`member` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `task_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_member_task1_idx` (`task_id` ASC) VISIBLE,
  CONSTRAINT `fk_member_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `SUP`.`task` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`team`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`team` ;

CREATE TABLE IF NOT EXISTS `SUP`.`team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `icon` BLOB NULL,
  `memberList` VARCHAR(45) NULL,
  `project_id` INT NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_team_project_idx` (`project_id` ASC) VISIBLE,
  INDEX `fk_team_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_team_project`
    FOREIGN KEY (`project_id`)
    REFERENCES `SUP`.`project` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_team_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `SUP`.`member` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`user` ;

CREATE TABLE IF NOT EXISTS `SUP`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `isAdmin` VARCHAR(45) NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  INDEX `fk_user_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `SUP`.`member` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`role` ;

CREATE TABLE IF NOT EXISTS `SUP`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_role_member1_idx` (`member_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_role_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `SUP`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```

## RESTfull сервіс для управління даними

## Основний файл серверу

```js
const db = require("./dbconfig");
const express = require("express");
const app = express();
const PORT = 3500;

app.use(express.json());
app.use("/api", require("./routers"));

db.connect(() =>
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
);
```

## Файл підключення до серверу

```js
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234567890",
  database: "sup",
});

module.exports = db;
```

## Файл з роутеором

```js
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
```

## Файл контролерів

```js
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
```
