const express = require('express');
const sequelize = require('./config/db');
const clientRoutes = require('./routes/clientRoutes');
const pixRoutes = require('./routes/pixRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/clients', clientRoutes);
app.use('/pix', pixRoutes);
app.use('/auth', authRoutes);

sequelize.sync({ force: false })  // `force: true` irá dropar as tabelas antes de recriar
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar tabelas:', err);
  });

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});