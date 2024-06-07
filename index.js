import express, { json, urlencoded } from "express";
import cors from "cors";
import initRoute from "./src/route";
import "./connection";

require("dotenv").config();

// create app
const app = express();

// config
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT"],
  })
);
app.use(json());
app.use(urlencoded({ extended: true }));

// Api endpoint
initRoute(app);

const PORT = process.env.PORT || 8888;

const listener = app.listen(PORT, () => {
  console.log("server is running on port:" + listener.address().port);
});
