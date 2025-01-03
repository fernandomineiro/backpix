const request = require('supertest');
const app = require('../app'); 
const { Client } = require('../models');
const sequelize = require('../config/database');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Client Controller', () => {
  it('should create a new client', async () => {
    const res = await request(app)
      .post('/clients/create')
      .send({
        name: 'John Doe',
        cpf: '12345678901',
      });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe('John Doe');
    expect(res.body.cpf).toBe('12345678901');
  });

  it('should list all clients', async () => {
    await Client.create({ name: 'Jane Doe', cpf: '10987654321' });

    const res = await request(app).get('/clients');

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].name).toBe('Jane Doe');
  });
});