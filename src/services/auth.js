import axios from '../utils/axios';

class Auth {
  SignIn(email, password) {
    return new Promise((resolve, reject) => {
      axios.post('api/home/login', {email, password})
        .then(response => {
          if (response.data.user)
            resolve(response.data.user)
          else
            reject(response.data.user);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

const auth = new Auth();

export default auth;
