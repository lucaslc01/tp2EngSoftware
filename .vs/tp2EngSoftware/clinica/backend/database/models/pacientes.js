const { Model, DataTypes } = require("sequelize");

class Paciente extends Model {
  /**
	 * Cria as associações entre as tabelas do banco de dados
	 * @param {import("./index")} models Modelos das tabelas do banco de dados
	 */
   static associate(models) {
    Paciente.belongsTo(models.Pessoa,{as: "pessoa",foreignKey: "codigo"});
    Paciente.hasMany(models.PessoaAgendamento,{as: "agendamento",foreignKey: "codigo_paciente"});
  }
}
function initPaciente(sequelize) {
  Paciente.init({
    codigo_paciente:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    codigo:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    peso:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    altura: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    tipoSaquineo:{
      type: DataTypes.ENUM("A+","A-","B+","B-","AB+","AB-","O+","O-"),
      allowNull: false
    }
  }, {
		sequelize,
		paranoid: false,
		timestamps: false,
		underscored: true,
		modelName: "Paciente",
		tableName: "pacientes"
	});
  return Paciente;

}
module.exports =initPaciente;
