const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema(
    {
        cpf: String,
        nome: String,
        dataNascimento: Date,
        endereco: String,
        telefone: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Paciente', pacienteSchema);