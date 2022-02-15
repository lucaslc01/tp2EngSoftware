"use strict";

module.exports = {
	/**
	 * Função de aplicação da migração
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").DataTypes} Sequelize
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("pacientes", {
      codigo_paciente:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      codigo:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "pessoas", key: "codigo" }
      },
      peso:{
        type: Sequelize.FLOAT,
        allowNull: false
      },
      altura: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      tipoSaquineo:{
        type: Sequelize.ENUM("A+","A-","B+","B-","AB+","AB-","O+","O-"),
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
		await queryInterface.dropTable("pacientes");
	}
};
