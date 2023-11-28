const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const initRoutes = require("./routes/index");

const app = express();
const port = process.env.PORT || 8888;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();
initRoutes(app);

app.use("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
