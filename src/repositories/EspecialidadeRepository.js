const Especialidade = require('../models/Especialidade');

class EspecialidadeRepository {
    
    async findAll() {
        const especialidade = await Especialidade.find();
        return especialidade;
    }

    async findById(id) {
        const especialidade = await Especialidade.findById(id);
        return especialidade;
    }

    async create(dados) {
        try {
            const novaEspecialidade = new Profissional(dados);
            const especialidadeSalvo = await novaEspecialidade.save();
            res.status(201).json(especialidadeSalvo);
        } catch (error) {
            console.log("Erro ao criar especialidade:", error)
            res.status(500).json({ message: "Erro ao criar especialidade", error: error.message });
        }
    }

    async update() {

    }

    async delete() {

    }
}

module.exports = new EspecialidadeRepository();