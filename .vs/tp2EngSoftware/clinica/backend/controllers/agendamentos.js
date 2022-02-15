const db = require('./database/models')
const {Op} = require("sequelize")

async function obtemConsultas(req, res){
  try {
		const consultas = await db.Agendamento.findAll();
		res.status(200).json(consultas);
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
}

async function obtemConsultasMedico(req, res){
  try {
    const medico=req.body;
		const consultas = await db.Agendamento.findAll({
      where: {cod_med:{
        [Op.eq]:medico.cod_med
      }}
    });
		res.status(200).json(consultas);
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
}
module.exports={obtemConsultas,obtemConsultasMedico};
