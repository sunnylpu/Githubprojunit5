const request = require('supertest');
const server = require('./index');

describe('GET /', () => {
  afterAll((done) => {
    server.close(done);
  });

  it('should return the correct message', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Hello, CI/CD Pipeline is working!');
  });
});
