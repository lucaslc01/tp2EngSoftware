const { Model, DataTypes } = require("sequelize");

class Agendamento extends Model {
  /**
	 * Cria as associações entre as tabelas do banco de dados
	 * @param {import("./index")} models Modelos das tabelas do banco de dados
	 */
  static associate(models) {
    Agendamento.belongsTo(models.Medico,{as: "medico",foreignKey: "cod_med"});
    Agendamento.belongsTo(models.Paciente,{as: "paciente",foreignKey: "cod_paciente"});
  }
}
/**
 * Cria o modelo da tabela itens
 * @param {import("sequelize/types").Sequelize} sequelize
 */
function initAgendamento (sequelize) {
  Agendamento.init({
      idAgendamento:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true

      },
      data: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      telefone: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      horario:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          min: 7,
          max: 18}

      },
      cod_med:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cod_paciente:{
        type: DataTypes.INTEGER,
        allowNull: false,
      }
  },{
		sequelize,
		paranoid: false,
		timestamps: false,
		underscored: true,
		modelName: "Agendamento",
		tableName: "agendamentos"
	}  );
  return Agendamento
}

module.exports = initAgendamento;
