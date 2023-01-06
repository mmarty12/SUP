//Основний файл серверу

const db = require("./dbconfig");
const express = require("express");
const app = express();
const PORT = 3500;

app.use(express.json());
app.use("/api", require("./routers"));

db.connect(() =>
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
);
