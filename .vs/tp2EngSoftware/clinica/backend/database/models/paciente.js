const { Model, DataTypes } = require("sequelize");

class Paciente extends Model {
  /**
	 * Cria as associações entre as tabelas do banco de dados
	 * @param {import("./index")} models Modelos das tabelas do banco de dados
	 */
   static associate(models) {
    Paciente.belongsTo(models.Pessoa,{as: "pessoa",foreignKey: "codigo"});
  }
}
function initPaciente(sequelize) {
  Paciente.init({
    codigo:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
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
		tableName: "paciente"
	});
  return Paciente;

}
module.exports =initPaciente;
