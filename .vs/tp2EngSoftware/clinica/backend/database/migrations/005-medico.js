"use strict";

module.exports = {
	/**
	 * Função de aplicação da migração
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").DataTypes} Sequelize
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("medicos", {
      cod_med:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      codigo_fun:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "funcionarios", key: "codigo_fun" },
      },
      especially:{
        type: Sequelize.ENUM("Clinico Geral","Endocrinologista","Oftalmologista","Pediatra"),
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
		await queryInterface.dropTable("medicos");
	}
};
