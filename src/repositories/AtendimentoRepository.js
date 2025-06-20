const Atendimento = require('../models/Atendimento');

class AtendimentoRepository {
    async findAll() {
        const atendimento = await Atendimento.find();

        return atendimento;
    }

    async findById(id) {
        const atendimento = await Atendimento.findById(id);

        return atendimento;
    }

    async create(dados) {
        try {
            const novoAtendimento = new Profissional(dados);
            const atendimentoSalvo = await novoAtendimento.save();
            res.status(201).json(atendimentoSalvo);
        } catch (error) {
            console.log("Erro ao criar atendimento:", error)
            res.status(500).json({ message: "Erro ao criar atendimento", error: error.message });
        }
    }

    async update() {

    }

    async delete() {

    }
}

module.exports = new AtendimentoRepository();