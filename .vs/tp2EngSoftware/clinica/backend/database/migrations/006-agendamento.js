"use strict";

module.exports = {
	/**
	 * Função de aplicação da migração
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").DataTypes} Sequelize
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("agendamentos", {
			id_Agendamento:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true

      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      horario:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
          min: 7,
          max: 18}

      },
      cod_med:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "medicos", key: "cod_med" }
      },
      cod_paciente:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "pacientes", key: "codigo_paciente" }
      }
		});
	},

	/**
	 * Função que desfaz a migração
	 * @param {import("sequelize/types").QueryInterface} queryInterface
	 * @param {import("sequelize/types").Sequelize} Sequelize
	 */
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("agendamentos");
	}
};
