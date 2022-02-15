const { Model, DataTypes } = require("sequelize");

class Pessoa extends Model {
   /**
	 * Cria as associações entre as tabelas do banco de dados
	 * @param {import("./index")} models Modelos das tabelas do banco de dados
	 */

  static associate(models) {
    Pessoa.hasOne(models.Funcionario,{as: "funcionario",foreignKey: "codigo"});
    Pessoa.hasOne(models.Paciente,{as: "paciente",foreignKey: "codigo"});
  }

}
/**
 * Cria o modelo da tabela itens
 * @param {import("sequelize/types").Sequelize} sequelize
 */
function initPessoa(sequelize) {
  Pessoa.init({
    codigo:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome:{
      type: DataTypes.STRING(31),
      allowNull: false
    },
    email:{
      type: DataTypes.STRING(31),
      allowNull: false
    },
    telefone:{
      type: DataTypes.STRING(31),
      allowNull: false
    },
    cep: {
			type: DataTypes.STRING(31),
			allowNull: false,
		},
		bairro: {
			type: DataTypes.STRING(255),

			allowNull: false
		},
		logradouro: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		cidade: {
      type: DataTypes.STRING(31),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(31),
      defaultValue: 'MG'
    }
  }, {
		sequelize,
		paranoid: false,
		timestamps: false,
		underscored: true,
		modelName: "Pessoa",
		tableName: "pessoas"
	});
  return Pessoa;
}
module.exports = initPessoa;
