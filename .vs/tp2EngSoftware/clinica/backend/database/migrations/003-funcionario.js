"use strict";

module.exports = {
	/**
	 * Função de aplicação da migração
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").DataTypes} Sequelize
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("funcionario", {
			codigo:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      dataContract:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW")

      },
      salary: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      senhaHash: {
        type: Sequelize.STRING,
        minlength: 5
      }

		});
	},

	/**
	 * Função que desfaz a migração
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").Sequelize} Sequelize
	 */
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("funcionario");
	}
};
