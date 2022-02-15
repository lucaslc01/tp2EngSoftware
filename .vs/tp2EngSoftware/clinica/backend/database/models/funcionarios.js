const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

class Funcionario extends Model {
  /**
	 * Cria as associações entre as tabelas do banco de dados
	 * @param {import("./index")} models Modelos das tabelas do banco de dados
	 */
   static associate(models) {
    Funcionario.belongsTo(models.Pessoa,{as: "pessoa",foreignKey: "codigo"});
    Funcionario.hasOne(models.Medico,{as: "medico",foreignKey: "codigo_fun"});
  }

}
function initFuncionario(sequelize){
  Funcionario.init({
    codigo_fun:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    codigo:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dataContract:{
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("NOW")
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    senha_hash: {
      type: DataTypes.STRING,
      validate:{
        len : [5,20]
      },
      allowNull: false
    }

  },
  {
    sequelize,
		paranoid: false,
		timestamps: false,
		underscored: true,
		modelName: "Funcionario",
		tableName: "funcionarios"

  });

  return Funcionario;
}


module.exports = initFuncionario;
