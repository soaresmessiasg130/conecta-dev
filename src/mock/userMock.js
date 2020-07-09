import mock from '../utils/mock';

mock.onPost('/api/home/login').reply(200, {
  'id': 1,
  'username': 'soaresmessiasg130',
  'email': 'soaresmessiasg130@gmail.com'
});
