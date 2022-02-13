const enderecos=[
   {cep: '30110-002',
   bairro: 'Centro',
   logradouro:'Avenida do Contorno',
   cidade: 'Belo Horizonte'
  },
  {cep: '30830-093',
    bairro: 'Dom Bosco',
    logradouro:'Avenida Abílio Machado',
    cidade: 'Belo Horizonte'
  },
  {cep: '32235-150',
  bairro: 'Industrial',
  logradouro:'Rua Doutor Cícero de Castro',
  cidade: 'Contagem'
   },
  {cep: '30830-233',
  bairro: 'Glória',
  logradouro:'Avenida Abílio Machado',
  cidade: 'Belo Horizonte'
  },
  {cep: '30330-000',
  bairro: 'Carmo',
  logradouro:'Avenida Nossa Senhora do Carmo',
  cidade: 'Belo Horizonte'
   }
]
module.exports = {
	/**
	 * Função de aplicação da semente
	 * @param {import("sequelize").QueryInterface} queryInterface
	 * @param {import("sequelize").DataTypes} Sequelize
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("base_endereco", enderecos);
	},

	/**
	 * Função que desfaz a aplicação da semente
	 * @param {import("sequelize").QueryInterface} queryInterface
	 * @param {import("sequelize").Sequelize} Sequelize
	 */
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("base_endereco", {
			cep: enderecos.map(b => b.cep)
		});
	}
};
