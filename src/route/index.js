const entry = require("./entry");
const auth = require("./auth");
const article = require("./article");

const initRoute = (app) => {
  app.use("/", entry);
  app.use("/api/v1", auth);
  app.use("/api/v1", article);
};

module.exports = initRoute;
