"use strict";

module.exports = {
	/**
	 * Função de aplicação da migração
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").DataTypes} Sequelize
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("pessoa", {
      codigo:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome:{
        type: Sequelize.STRING(31),
        allowNull: false
      },
      email:{
        type: Sequelize.STRING(31),
        allowNull: false
      },
      telefone:{
        type: Sequelize.STRING(31),
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING(31),
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      logradouro: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(31),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(31),
        allowNull: false
      }
		});
	},

	/**
	 * Função que desfaz a migração
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").Sequelize} Sequelize
	 */
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("pessoa");
	}
};
