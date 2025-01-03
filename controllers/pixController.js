const  Client  = require('../models/clients');
const  Pix  = require('../models//pix');
exports.createPix = async (req, res) => {
  try {
    const { clientId, value, description } = req.body;

    const client = await Client.findByPk(clientId);
    if (!client) return res.status(404).json({ message: 'Cliente não encontrado.' });

    // Criando a transação de PIX e associando ao clientId
    const pix = await Pix.create({ value, description, clientId });

    res.status(201).json(pix);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getClientPix = async (req, res) => {
  try {
    const { clientId } = req.params;

    const client = await Client.findByPk(clientId);
    if (!client) return res.status(404).json({ message: 'Cliente não encontrado.' });

    const pixList = await Pix.findAll({ where: { clientId } });

    res.json({ pix: pixList });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.payPix = async (req, res) => {
  try {
    const { clientId, pixId } = req.params;

    const client = await Client.findByPk(clientId);
    if (!client) return res.status(404).json({ message: 'Cliente não encontrado.' });

    const pix = await Pix.findOne({ where: { id: pixId, clientId } });
    if (!pix) return res.status(404).json({ message: 'PIX não encontrado.' });
    pix.status = 'PAGO'; 
    await pix.save();

    res.status(200).json(pix);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};