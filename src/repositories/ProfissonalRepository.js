const Profissional = require('../models/Profissional');

class ProfissionalRepository {
    async findAll() {
        const profissional = await Profissional.find();

        return profissional;
    }

    async findById(id) {
        const profissional = await Profissional.findById(id);

        return profissional;
    }

    async create(dados) {
        try {
            const novoProfissional = new Profissional(dados);
            const profissionalSalvo = await novoProfissional.save();
            res.status(201).json(profissionalSalvo);
        } catch (error) {
            console.log("Erro ao criar profissional:", error)
            res.status(500).json({ message: "Erro ao criar profissional", error: error.message });
        }
    }

    async update() {

    }

    async delete() {

    }
}

module.exports = new ProfissionalRepository();