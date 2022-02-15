"use strict";

module.exports = {
	/**
	 * Função de aplicação da migração
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").DataTypes} Sequelize
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("funcionarios", {
			codigo_fun:{
        type: Sequelize.INTEGER,
        allowNull: false,

        primaryKey: true
      },
      codigo:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "pessoas", key: "codigo" }
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
      senha_hash: {
        type: Sequelize.STRING,
        validate:{
          len : [5,20]
        },
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
		await queryInterface.dropTable("funcionarios");
	}
};
