const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
const assert = require('assert');

describe('NGO', () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new NGO', async () => {
    const response = await request(app)
      .post('/ngos')
      .send({
        name: 'Test sample Name',
        email: 'sample@email.com',
        whatsapp: '5511999999999',
        city: 'São Paulo',
        uf: 'SP'
      });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });

  it('should return Bad Request', async () => {
    const response = await request(app)
      .post('/ngos')
      .send({
        name: 'Test sample Name',
        email: 'sample@email.com'
      });

    expect(400);
  });

  it('should return \"\"email\" must be a valid email\" message', async () => {
    const response = await request(app)
      .post('/ngos')
      .send({
        name: 'Test sample Name',
        email: 'sampleemail.com',
        whatsapp: '5511999999999',
        city: 'São Paulo',
        uf: 'SP'
      });

    expect(400);
    expect(response.body).toHaveProperty('message');
    assert(response.body.message, '\"email\" must be a valid email');
  });
})
