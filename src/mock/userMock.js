import mock from '../utils/mock';

mock.onPost('/api/home/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== 'soaresmessiasg130@gmail.com' || password !== '2307') {
    return [400, { message: 'Seu email ou senha estão incorretos!' }];
  }

  const user = {
    id: 1,
    name: 'Messias Soares',
    username: 'soaresmessiasg130',
    email: 'soaresmessiasg130@gmail.com'
  }

  return [200, { user }];
});
