const Paciente = require('../models/Paciente');

class PacienteRepository {
    async findAll() {
        const pacientes = await Paciente.find();

        return pacientes;
    }

    async findById(id) {
        const paciente = await Paciente.findById(id);

        return paciente;
    }

    async create(dados) {
        try {
            const novoPaciente = new Paciente(dados);
            const pacienteSalvo = await novoPaciente.save();
            res.status(201).json(pacienteSalvo);
        } catch (error) {
            console.log("Erro ao criar paciente:", error)
            res.status(500).json({ message: "Erro ao criar paciente", error: error.message });
        }
    }

    async update() {

    }

    async delete() {

    }
}

module.exports = new PacienteRepository();