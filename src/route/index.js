const user = require("./user");
const entry = require("./entry");
const article = require("./article");

const initRoute = (app) => {
  app.use("/", entry);
  app.use("/api/v1", article);
  app.use("/api/v1", user);
};

module.exports = initRoute;
