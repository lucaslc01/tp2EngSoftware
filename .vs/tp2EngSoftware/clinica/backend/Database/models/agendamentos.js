const { Model, DataTypes } = require("sequelize");

class Agendamento extends Model {
  /**
	 * Cria as associações entre as tabelas do banco de dados
	 * @param {import("./index")} models Modelos das tabelas do banco de dados
	 */
  static associate(models) {
    Agendamento.belongsTo(models.Medico,{as: "medico",foreignKey: "codMed"});
  }
}
function initAgendamento (sequelize) {
  Agendamento.init({
      idAgendamento:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true

      },
      data: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      nome: {
        type: DataTypes.String(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.String(255),
        allowNull: false,
      },
      telefone: {
        type: DataTypes.String(255),
        allowNull: false,
      },
      codMed:{
        type: DataTypes.INTEGER,
        allowNull: false
      }
  },{
		sequelize,
		paranoid: false,
		timestamps: false,
		underscored: true,
		modelName: "Agendamento",
		tableName: "agendamentos"
	}
  )
}
