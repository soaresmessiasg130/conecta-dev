import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/notifications').reply(200, {
  notifications: [
    {
      id: '1b81ybs18yb328sajxkb',
      title: 'Novas avaliações recebidas',
      description: 'Você recebeu 1 nova avaliação',
      type: 'reviews',
      createdAt: moment()
        .subtract(2, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '1b81ybs18yb328sajxkb',
      title: 'Novos comentários recebidas',
      description: 'Você recebeu 1 novo comentário',
      type: 'new_comment',
      createdAt: moment()
        .subtract(1, 'day')
        .toDate()
        .getTime()
    },
    {
      id: '1b81ybs18yb328sajxkb',
      title: 'Novas seguidores',
      description: 'Você recebeu 1 novo like',
      type: 'like',
      createdAt: moment()
        .subtract(5, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '1b81ybs18yb328sajxkb',
      title: 'Novos seguidores',
      description: '2 devs começaram a seguir você',
      type: 'connection',
      createdAt: moment()
        .subtract(3, 'days')
        .toDate()
        .getTime()
    },
  ]
});
