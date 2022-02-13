const { Model, DataTypes } = require("sequelize");

class Medico extends Model {
  /**
	 * Cria as associações entre as tabelas do banco de dados
	 * @param {import("./index")} models Modelos das tabelas do banco de dados
	 */
   static associate(models) {
    Medico.belongsTo(models.Pessoa,{as: "pessoa",foreignKey: "codigo"});
  }
}

function initMedico(sequelize){
  Medico.init({
    codigo:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    especially:{
      type: DataTypes.ENUM("Clinico Geral","Endocrinologista","Oftamologista","Pediatra"),
      allowNull: false
    },

    crm:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    }


  }), {
		sequelize,
		paranoid: false,
		timestamps: false,
		underscored: true,
		modelName: "Medico",
		tableName: "medico"
	};
  return Medico;
}

module.exports = initMedico;
