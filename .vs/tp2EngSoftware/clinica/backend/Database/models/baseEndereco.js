const { Model, DataTypes } = require("sequelize");

class BaseEndereco extends Model {

}
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
      allowNull: false
    }
	}, {
		sequelize,
		paranoid: false,
		timestamps: false,
		underscored: true,
		modelName: "BaseEndereco",
		tableName: "baseEnderecos"
	});

	return BaseEndereco;
}

module.exports = initBaseEndereco;
