describe('Gateway', () => {
  beforeAll(async () => {
    const user = {
      email: 'esbtest@mail.com',
      password: 'Pass1234.-',
    };

    await fetch('http://auth:3001', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  });

  test('Create', async () => {});
});
