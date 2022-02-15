const { Model, DataTypes } = require("sequelize");

class BaseEndereco extends Model {

}
/**
 * Cria o modelo da tabela itens
 * @param {import("sequelize/types").Sequelize} sequelize
 */
function initBaseEndereco (sequelize) {
	BaseEndereco.init({
		cep: {
			type: DataTypes.STRING(31),
			allowNull: false,
			primaryKey: true
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
		modelName: "BaseEndereco",
		tableName: "base_enderecos"
	});

	return BaseEndereco;
}

module.exports = initBaseEndereco;
