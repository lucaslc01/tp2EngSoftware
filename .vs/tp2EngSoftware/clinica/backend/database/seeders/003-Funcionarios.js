const funcionarios = [

  {
    codigo_fun:1,
    codigo: 2,
    salary: 1500.00,
    senha_hash: '12345'
  },

  {
    codigo_fun:2,
    codigo: 3,
    salary: 1500.00,
    senha_hash: '12345'
  },

  {codigo_fun:3,
    codigo: 4,
    salary: 1500.00,
    senha_hash: '12345'
  },

  {codigo_fun:4,
    codigo: 5,
    salary: 1500.00,
    senha_hash: '12345'
  },

  {codigo_fun:5,
    codigo: 6,
    salary: 1500.00,
    senha_hash: '12345'
  },

  {codigo_fun:6,
    codigo: 7,
    salary: 1500.00,
    senha_hash: '12345'
  },

  {codigo_fun:7,
    codigo: 8,
    salary: 1500.00,
    senha_hash: '12345'
  },

  {codigo_fun:8,
    codigo: 9,
    salary: 1300.00,
    senha_hash: '12345'},

  {codigo_fun:9,
    codigo: 10,
    salary: 1500.00,
    senha_hash: '12345'},

  {codigo_fun:10,
    codigo: 11,
    salary: 1500.00,
    senha_hash: '12345'},

  {codigo_fun:11,
    codigo: 12,
    salary: 1500.00,
    senha_hash: '12345'}

]
module.exports = {
	/**
	 * Função de aplicação da semente
	 * @param {import("sequelize").QueryInterface} queryInterface
	 * @param {import("sequelize").DataTypes} Sequelize
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("funcionarios", funcionarios);
	},

	/**
	 * Função que desfaz a aplicação da semente
	 * @param {import("sequelize").QueryInterface} queryInterface
	 * @param {import("sequelize").Sequelize} Sequelize
	 */
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("funcionarios", {
			[Sequelize.Op.or]:funcionarios
		});
	}
};
