const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Client = require('../models/clients');

const JWT_SECRET = 'seusegredo';

exports.login = async (req, res) => {
  const { cpf } = req.body;
  const client = await Client.findOne({ where: { cpf } });

  if (!client) {
    return res.status(404).json({ message: 'Cliente não encontrado.' });
  }

  const token = jwt.sign({ id: client.id }, JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({ token });
};