import request from 'supertest';
import { app, server } from '../src/server';

describe('API /test', () => {
  afterAll(() => {
    server.close();
  });

  it('GET /test responds with "Success"', async () => {
    const res = await request(app).get('/test');
    // expect(res.body.status).toBe('Success');
    expect(res.body).toStrictEqual({ status: 'Success' });
  });
  it('PUT /test responds with "Success"', async () => {
    const res = await request(app)
      .put('/test')
      .send({ message: 'hello' })
      .set('Accept', 'application/json');

    expect(res.status).toBe(300);
    expect(res.body.Message).toBe('YES');
  });
});
