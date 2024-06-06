"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RamenFlavor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RamenFlavor.init(
    {
      userId: DataTypes.INTEGER,
      salt: DataTypes.INTEGER,
      fat: DataTypes.INTEGER,
      tenderness: DataTypes.INTEGER,
      broth: DataTypes.STRING,
      topping: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RamenFlavor",
    }
  );
  return RamenFlavor;
};
