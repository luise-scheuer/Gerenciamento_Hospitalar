const ProfissionalRepository = require("../repositories/ProfissonalRepository");

class ProfissionalController {
    async index(req, res) {
        const profissional = await PacienteRepository.findAll();

        if (!profissional) {
            return res.status(404).json({ error: "Pacientes não encontrados!" });
        }
    }

    async show(req, res) {
        const { id } = req.params;
        const profissional = await ProfissionalRepository.findById(id);

        if (!profissional) {
            return res.status(404).json({ message: "Profissional com esse ID não encontrado" });
        }

        res.json(profissional);
    }

    async showByCrm(req, res) {
        const { crm } = req.params;
        const profissional = await ProfissionalRepository.findByCrm(crm);

        if (!profissional) {
            return res.status(404).json({ message: "Profissional com esse CRM não encontrado" });
        }

        res.json(profissional);
    }

    async store(req, res) {
        const { nome, crm, especialidade } = req.body;

        if (!nome) {
            return response.status(400).json({ error: "Nome é obrigatório" });
        }
        if (!crm) {
            return response.status(400).json({ error: "CRM é obrigatório" });
        }

        if (!especialidade) {
            return response.status(400).json({ error: "Especialidade é obrigatório" })
        }

        if (crm) {
            const profissionalCrm = await ProfissionalRepository.findByCrm(crm);

            if (profissionalCrm) {
                return response.status(400).json({ error: "Esse CRM já está cadastrado" });
            }
        }

        const profissional = await ProfissionalRepository.create({
            nome, crm, especialidade
        })
        res.status(201).json(profissional);
    }

    async update(req, res) {

    }

    async destroy(req, res) {

    }
}

module.exports = new ProfissionalController();