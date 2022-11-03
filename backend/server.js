const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnect = require("./config/db");
const authRouter = require("./routes/authRoute");

dotenv.config({
  path: "backend/.env",
});

app.use("/api/messenger", authRouter);

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
