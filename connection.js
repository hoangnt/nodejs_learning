const { Sequelize } = require("sequelize");

// default mysql username/password: root/null
const sequelize = new Sequelize("weloveramen", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();
