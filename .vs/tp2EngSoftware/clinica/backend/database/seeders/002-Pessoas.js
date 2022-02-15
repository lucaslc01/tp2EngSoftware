const pessoas = [
  {
    codigo: 1,
     nome: 'Helias Sousa',
     email: 'heliasS@gmail.com',
     telefone: '31-33330000',
     cep: '30110-002',
     bairro: 'Centro',
     logradouro:'Avenida do Contorno',
     cidade: 'Belo Horizonte'

  },
  {
    codigo: 2,
    nome: 'Carlos Faria',
    email: 'carlosF@gmail.com',
    telefone: '31-33330001',
    cep: '30110-002',
    bairro: 'Centro',
    logradouro:'Avenida do Contorno',
    cidade: 'Belo Horizonte'},

  {
    codigo: 3,
    nome: 'Ana Maria Cardoso',
    email: 'anaMC@gmail.com',
    telefone: '31-33330002',
    cep: '30830-093',
    bairro: 'Dom Bosco',
    logradouro:'Avenida Abílio Machado',
    cidade: 'Belo Horizonte'},

  {codigo: 4,
    nome: 'Aloisio Paixao',
    email: 'aloisioP@gmail.com',
    telefone: '31-33330003',
    cep: '30830-093',
    bairro: 'Dom Bosco',
    logradouro:'Avenida Abílio Machado',
    cidade: 'Belo Horizonte'},

  {codigo: 5,
    nome: 'Fabiana Pereira',
    email: 'fabianaP@gmail.com',
    telefone: '31-33330004',
    cep: '30830-233',
    bairro: 'Glória',
    logradouro:'Avenida Abílio Machado',
    cidade: 'Belo Horizonte'},

  {codigo: 6,
    nome: 'Ana Galvão Sousa',
    email: 'anaGS@gmail.com',
    telefone: '31-33330005',
    cep: '30830-233',
    bairro: 'Glória',
    logradouro:'Avenida Abílio Machado',
    cidade: 'Belo Horizonte'},

  {codigo: 7,
    nome: 'Marllon Henrique',
    email: 'marllonH@gmail.com',
    telefone: '31-33330006',
    cep: '32235-150',
    bairro: 'Industrial',
    logradouro:'Rua Doutor Cícero de Castro',
    cidade: 'Contagem'},

  {codigo: 8,
    nome: 'Karina Silva',
    email: 'karinaS@gmail.com',
    telefone: '31-33330007',
    cep: '32235-150',
    bairro: 'Industrial',
    logradouro:'Rua Doutor Cícero de Castro',
    cidade: 'Contagem'},

  {codigo: 9,
    nome: 'Willian Silva',
    email: 'willianS@gmail.com',
    telefone: '31-33330008',
    cep: '32235-150',
    bairro: 'Industrial',
    logradouro:'Rua Doutor Cícero de Castro',
    cidade: 'Contagem'},

  {codigo: 10,
    nome: 'Lucas Loscheider',
    email: 'lucasL@gmail.com',
    telefone: '31-33330009',
    cep: '30330-000',
    bairro: 'Carmo',
    logradouro:'Avenida Nossa Senhora do Carmo',
    cidade: 'Belo Horizonte'},

  {codigo: 11,
    nome: 'Fatima Calisto',
    email: 'fatimaC@gmail.com',
    telefone: '31-33330010',
    cep: '30330-000',
    bairro: 'Carmo',
    logradouro:'Avenida Nossa Senhora do Carmo',
    cidade: 'Belo Horizonte'},

  {codigo: 12,
    nome: 'Roberta Moreira',
    email: 'helias@gmail.com',
    telefone: '31-33330011',
    cep: '30330-000',
    bairro: 'Carmo',
    logradouro:'Avenida Nossa Senhora do Carmo',
    cidade: 'Belo Horizonte'}

]
module.exports = {
	/**
	 * Função de aplicação da semente
	 * @param {import("sequelize").QueryInterface} queryInterface
	 * @param {import("sequelize").DataTypes} Sequelize
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("pessoas", pessoas);
	},

	/**
	 * Função que desfaz a aplicação da semente
	 * @param {import("sequelize").QueryInterface} queryInterface
	 * @param {import("sequelize").Sequelize} Sequelize
	 */
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("pessoas", {
			[Sequelize.Op.or]: pessoas
		});
	}
};
