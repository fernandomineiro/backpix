const Client = require('../models/clients');

// Criar Cliente
exports.createClient = async (req, res) => {
  try {
    const { name, cpf } = req.body;
    const client = await Client.create({ name, cpf });
    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todos os PIX de um Cliente
exports.getClientPix = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) return res.status(404).json({ message: 'Cliente não encontrado.' });
    res.status(200).json(client.pixList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}