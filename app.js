require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Hello World" });
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
