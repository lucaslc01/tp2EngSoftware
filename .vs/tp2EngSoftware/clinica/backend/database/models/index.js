const Sequelize = require("sequelize");

const configs = require("../config/config");
const initBaseEndereco = require("./baseEndereco");
const initPaciente= require("./paciente");
const initAgendamento = require("./agendamento");
const initFuncionario = require("./funcionario");
const initPessoa = require("./pessoa");
const initMedico = require("./medico");


const env = process.env.NODE_ENV || "development";
const config = configs[env];

let sequelize;
if (config.use_env_variable)
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
else
	sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {
  sequelize,
  Sequelize,
  Agendamento: initAgendamento(sequelize),
  BaseEndereco: initBaseEndereco(sequelize),
  Funcionario: initFuncionario(sequelize),
  Medico: initMedico(sequelize),
  Paciente: initPaciente(sequelize),
  Pessoa: initPessoa(sequelize)
};

db.Agendamento.associate(db);
db.BaseEndereco.associate(db);
db.Funcionario.associate(db);
db.Medico.associate(db);
db.Paciente.associate(db);
db.Pessoa.associate(db);

// Testa a conexão com o banco de dados
db.sequelize.authenticate()
	.then(_ => console.log("Database connected."))
	.catch(console.error);

module.exports = db;

