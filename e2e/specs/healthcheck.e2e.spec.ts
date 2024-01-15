import { ping } from 'tcp-ping';

describe('Health', () => {
  test('Gateway Microservice', async () => {
    const response = await fetch('http://gateway:3000');
    expect(response.status).toBe(200);
  });

  test('Auth Microservice', async () => {
    const response = await fetch('http://auth:3001');
    expect(response.status).toBe(200);
  });

  test('Payments Microservice', (done) => {
    ping({ address: 'payments', port: 3003 }, (err) => {
      if (err) {
        fail();
      }
      done();
    });
  });

  test('Notifications Microservice', (done) => {
    ping({ address: 'notifications', port: 3004 }, (err) => {
      if (err) {
        fail();
      }
      done();
    });
  });
});
