import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/notifications').reply(200, {
  notifications: [
    {
      id: '1b81ybs18yb3288csaj3',
      title: 'Novas avaliações recebidas',
      description: 'Você recebeu 1 nova avaliação',
      type: 'review',
      createdAt: moment()
        .subtract(2, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '1b81ybs18yb328scsa7bi',
      title: 'Novos comentários recebidas',
      description: 'Você recebeu 1 novo comentário',
      type: 'new_comment',
      createdAt: moment()
        .subtract(1, 'day')
        .toDate()
        .getTime()
    },
    {
      id: '1b81ybs18yb3sa83nb',
      title: 'Novas seguidores',
      description: 'Você recebeu 1 novo like',
      type: 'like',
      createdAt: moment()
        .subtract(5, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '1b81ybs18yb32vay1i',
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
