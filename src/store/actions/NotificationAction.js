import axios from '../../utils/axios';

export const GET_NOTIFICATIONS = '@NOTIFICATION/GET_NOTIFICATIONS';

const GetNotifications = () => {
  return async (dispatch) => {
    const notifications = await axios('/api/notifications');

    dispatch({
      type: GET_NOTIFICATIONS,
      payload: {
        notifications: notifications.data.notifications,
      }
    });
  };
};

export { GetNotifications };
