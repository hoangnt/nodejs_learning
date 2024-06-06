"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("RamenFlavors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      salt: {
        type: Sequelize.INTEGER,
      },
      fat: {
        type: Sequelize.INTEGER,
      },
      tenderness: {
        type: Sequelize.INTEGER,
      },
      broth: {
        type: Sequelize.STRING,
      },
      topping: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("RamenFlavors");
  },
};
