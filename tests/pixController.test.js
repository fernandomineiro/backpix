const request = require('supertest');
const app = require('../app');
const { Client, Pix } = require('../models');
const sequelize = require('../config/database');

beforeAll(async () => {
  await sequelize.sync({ force: true });

  await Client.create({ name: 'John Doe', cpf: '12345678901' });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Pix Controller', () => {
  let clientId;

  beforeAll(async () => {
    const client = await Client.findOne({ where: { cpf: '12345678901' } });
    clientId = client.id;
  });

  it('should create a new PIX transaction', async () => {
    const res = await request(app)
      .post(`/clients/${clientId}/transfer`)
      .send({
        value: 100.0,
        description: 'Pagamento de Teste',
      });

    expect(res.status).toBe(201);
    expect(res.body.value).toBe(100.0);
    expect(res.body.description).toBe('Pagamento de Teste');
    expect(res.body.clientId).toBe(clientId);
  });

  it('should list all PIX transactions of a client', async () => {
    await Pix.create({ value: 50.0, description: 'Teste de Transação', clientId });

    const res = await request(app).get(`/clients/${clientId}/pix`);

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].value).toBe(50.0);
    expect(res.body[0].description).toBe('Teste de Transação');
  });
});