const PacienteRepository = require("../repositories/PacienteRepository");

class PacienteController {
    async index(req, res) {
        const pacientes = await PacienteRepository.findAll();

        if (!pacientes) {
            return res.status(404).json({ error: "Pacientes não encontrados!" });
        }

        res.json(pacientes);
    }

    async show(req, res) {
        const { id } = req.params;
        const paciente = await PacienteRepository.findById(id);

        if (!paciente) {
            return res.status(404).json({ message: "Paciente não encontrado!" });
        }

        res.json(paciente);
    }

    store(req, res) {

    }

    update(req, res) {

    }

    destroy(req, res) {

    }
}

module.exports = new PacienteController();