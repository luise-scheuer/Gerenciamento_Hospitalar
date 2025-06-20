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
            return res.status(404).json({ message: "Paciente com esse ID não encontrado!" });
        }

        res.json(paciente);
    }

    async showByCpf(req, res) {
        const { cpf } = req.params;
        const paciente = await PacienteRepository.findByCpf(cpf);

        if (!paciente) {
            return res.status(404).json({ message: "Paciente com esse CPF não encontrado!" });
        }

        res.json(paciente);
    }

    async store(req, res) {
        const { nome, cpf, dataNascimento, endereco, telefone } = req.body;

        if(!nome){
            return response.status(400).json({ error: "Nome é obrigatório!" });
        }

        if(!cpf){
            return response.status(400).json({ error: "CPF é obrigatório!" });
        }

        if(!dataNascimento){
            return response.status(400).json({ error: "Data de Nascimento é obrigatório!" });
        }

        if(cpf) {
            const pacienteCpf = await PacienteRepository.findByCPF(cpf);

            if(pacienteCpf) {
                return response.status(400).json({ error: "Esse CPF já está cadastrado!" });
            }
        }

        const paciente = await PacienteRepository.create({
            nome, cpf, dataNascimento, endereco: endereco || null , telefone: telefone || null
        })

        res.status(201).json(paciente);
    }

    async update(req, res) {
        const { id } = req.params;
        const { nome, cpf, dataNascimento, endereco, telefone } = req.body;

        const paciente = await PacienteRepository.findById(id);
        if(!paciente) {
            return res.status(404).json({ error: "Paciente não encontrado!!!"})
        }

        if(cpf) {
            const pacienteCpf = await PacienteRepository.findByCPF(cpf);

            if(pacienteCpf) {
                return response.status(400).json({ error: "Esse CPF já está cadastrado!" });
            }
        }

        const pacienteAtualizado = await PacienteRepository.update(id, {
            nome: nome ?? paciente.nome,
            cpf: cpf ?? paciente.cpf,
            dataNascimento: dataNascimento ?? paciente.dataNascimento,
            endereco: endereco ?? paciente.endereco,
            telefone: telefone ?? paciente.telefone
        });

        res.status(200).json(pacienteAtualizado);
    }

    async destroy(req, res) {

    }
}

module.exports = new PacienteController();