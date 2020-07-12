import axios from '../utils/axios';

class Auth {
  SignIn = (email, password) => {
    return new Promise((resolve, reject) => {
      axios.post('api/home/login', {email, password})
        .then(response => {
          if (response.data.user) {
            // this.setUser(response.data.user);
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

  setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser = () => {
    const user = localStorage.getItem('user');

    if (user) return JSON.parse(user);

    return user;
  }

  isAuthenticated = () => !!this.getUser();
}

const auth = new Auth();

export default auth;
