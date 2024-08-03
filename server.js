const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const cors = require("cors");
require("dotenv").config();

app.use(cors());

// Database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("Connected to Database");
});

// EXPRESS APP JSON
app.use(express.json());

// DATABASE RESULT
const dealersRouter = require("./routes/dealers");
app.use("/dealers", dealersRouter);

const emailsRoute = require("./routes/emails");
app.use("/emails", emailsRoute);

// SERVER
app.listen(port, () => console.log("Server Started"));
