const user = require("./user");
const entry = require("./entry");

const initRoute = (app) => {
  app.use("/", entry);
  app.use("/api/v1/user", user);
};

module.exports = initRoute;
