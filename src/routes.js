const { Router } = require("express");
const routes = Router();
const PacienteController = require("./controllers/PacienteController");

// --------- PACIENTES ----------
routes.get("/pacientes", PacienteController.index);
routes.get("/pacientes/cpf/:cpf", PacienteController.showByCpf);
routes.get("/pacientes/:id", PacienteController.show);
routes.post("/pacientes", PacienteController.store);
routes.put("/pacientes/cpf/:cpf", PacienteController.updateByCpf);
routes.put("/pacientes/:id", PacienteController.update);
routes.delete("/pacientes/cpf/:cpf", PacienteController.destroyByCPF);
routes.delete("/pacientes/:id", PacienteController.destroy);

module.exports = routes;