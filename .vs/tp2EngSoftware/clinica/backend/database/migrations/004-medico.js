"use strict";

module.exports = {
	/**
	 * Função de aplicação da migração
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").DataTypes} Sequelize
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("medico", {
      codigo:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      especially:{
        type: Sequelize.ENUM("Clinico Geral","Endocrinologista","Oftamologista","Pediatra"),
        allowNull: false
      },

      crm:{
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      }
		});
	},

	/**
	 * Função que desfaz a migração
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").Sequelize} Sequelize
	 */
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("medico");
	}
};
