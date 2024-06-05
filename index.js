const express = require("express");
const cors = require("cors");
require("dotenv").config();
const initRoute = require("./src/route")

// create app
const app = express();

// config
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Api endpoint
initRoute(app)

const PORT = process.env.PORT || 8888;

const listener = app.listen(PORT, () => {
  console.log("server is running on port:" + listener.address().port);
});
