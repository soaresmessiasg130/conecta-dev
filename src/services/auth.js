import axios from '../utils/axios';

class AuthService {
  SignIn = (email, password) => {
    return new Promise((resolve, reject) => {
      axios.post('api/home/login', {email, password})
        .then(response => {
          if (response.data.user) {
            this.setToken('JWT');
            resolve(response.data.user)
          } else {
            reject(response.data.user);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  SignInWithToken = () => {
    return new Promise((resolve, reject) => {
      axios.post('api/home/me')
        .then(response => {
          if (response.data.user) {
            resolve(response.data.user)
          } else {
            reject(response.data.user);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  setToken = (token) => localStorage.setItem('accessToken', token);

  getToken = () => localStorage.getItem('accessToken');

  isAuthenticated = () => !!this.getToken();
}

const auth = new AuthService();

export default auth;
