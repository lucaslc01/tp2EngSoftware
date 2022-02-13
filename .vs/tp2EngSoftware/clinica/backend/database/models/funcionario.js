const { Model, DataTypes } = require("sequelize");

class Funcionario extends Model {
  /**
	 * Cria as associações entre as tabelas do banco de dados
	 * @param {import("./index")} models Modelos das tabelas do banco de dados
	 */
   static associate(models) {
    Funcionario.belongsTo(models.Pessoa,{as: "pessoa",foreignKey: "codigo"});
  }

}
function initFuncionario(sequelize){
  Funcionario.init({
    codigo:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
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
    senhaHash: {
      type: DataTypes.STRING,
      minlength: 5
    }

  },{
    sequelize,
		paranoid: false,
		timestamps: false,
		underscored: true,
		modelName: "Funcionario",
		tableName: "funcionario"
  });
  return Funcionario;
}
module.exports = initFuncionario;
