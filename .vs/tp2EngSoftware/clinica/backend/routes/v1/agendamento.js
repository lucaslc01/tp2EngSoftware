const { Router } = require("express");

const AgendamentoController = require("../../controllers/agendamentos");

const router = Router();

router.get("/restrito", AgendamentoController.obtemConsultas);
router.get("/restrito", AgendamentoController.obtemConsultasMedico);

module.exports = router;
