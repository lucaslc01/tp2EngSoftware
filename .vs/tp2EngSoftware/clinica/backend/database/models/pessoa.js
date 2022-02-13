const { Model, DataTypes } = require("sequelize");

class Pessoa extends Model {

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
      autoIncrement: true,
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
      allowNull: false
    }
  }, {
		sequelize,
		paranoid: false,
		timestamps: false,
		underscored: true,
		modelName: "Pessoa",
		tableName: "pessoa"
	});
  return Pessoa;
}
module.exports = initPessoa;
