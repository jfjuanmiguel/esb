describe('Gateway', () => {
  beforeAll(async () => {
    const user = {
      email: 'esbtest@mail.com',
      password: 'Pass1234.-',
    };

    await fetch('http://auth:3001/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await fetch('http://auth:3001/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    const token = data.accessToken;

    console.log(token);
  });

  test('Create', async () => {
    expect(true).toBeTruthy();
  });
});
