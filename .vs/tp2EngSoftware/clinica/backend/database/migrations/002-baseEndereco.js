"use strict";

module.exports = {
	/**
	 * Função de aplicação da migração
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").DataTypes} Sequelize
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("base_endereco", {
			cep: {
        type: Sequelize.STRING(31),
        allowNull: false,
        primaryKey: true
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
        defaultValue: 'MG'

      }
		});
	},

	/**
	 * Função que desfaz a migração
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").Sequelize} Sequelize
	 */
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("base_endereco");
	}
};
