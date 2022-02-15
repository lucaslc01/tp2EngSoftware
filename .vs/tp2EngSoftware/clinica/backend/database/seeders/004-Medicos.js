const medicos= [
  { cod_med: 1,
    codigo_fun: 5,
    especially:'Clinico Geral',
    crm: 15555
  },

  {
    cod_med: 2,
    codigo_fun: 6,
    especially:'Clinico Geral',
    crm: 16666
  },

  {
    cod_med: 3,
    codigo_fun: 7,
    especially:'Endocrinologista',
    crm: 17777
  },

  {
    cod_med: 4,
    codigo_fun: 8,
    especially:'Endocrinologista',
    crm: 18888
  },

  {
    cod_med: 5,
    codigo_fun: 9,
    especially:'Oftalmologista',
    crm: 19999
  },

  {
    cod_med: 6,
    codigo_fun: 10,
    especially:'Oftalmologista',
    crm: 11010
  },

  {
    cod_med: 7,
    codigo_fun: 11,
    especially:'Pediatra',
    crm: 11111
  },

  {
    cod_med: 8,
    codigo_fun: 4,
    especially:'Pediatra',
    crm: 11212
  }

]
module.exports = {
	/**
	 * Função de aplicação da semente
	 * @param {import("sequelize").QueryInterface} queryInterface
	 * @param {import("sequelize").DataTypes} Sequelize
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("medicos", medicos);
	},

	/**
	 * Função que desfaz a aplicação da semente
	 * @param {import("sequelize").QueryInterface} queryInterface
	 * @param {import("sequelize").Sequelize} Sequelize
	 */
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("medicos", {
			[Sequelize.Op.or]:medicos
		});
	}
};
