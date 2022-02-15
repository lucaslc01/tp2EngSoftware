const { Model, DataTypes } = require("sequelize");

class Medico extends Model {
  /**
	 * Cria as associações entre as tabelas do banco de dados
	 * @param {import("./index")} models Modelos das tabelas do banco de dados
	 */
   static associate(models) {
    Medico.belongsTo(models.Funcionario,{as: "funcionario",foreignKey: "codigo_fun"});
    Medico.hasMany(models.Agendamento,{as: "agendamentos",foreignKey: "cod_med"});
  }
}

function initMedico(sequelize){
  Medico.init({

    cod_med:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo_fun:{
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    especially:{
      type: DataTypes.ENUM("Clinico Geral","Endocrinologista","Oftalmologista","Pediatra"),
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
		tableName: "medicos"
	};
  return Medico;
}

module.exports = initMedico;
