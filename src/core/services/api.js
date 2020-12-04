import axios from 'axios';

export const ApiService = {
  get(url, params) {
    return axios.get(`http://api.tvmaze.com/${url}`, { params }).then((res) => res && res.data);
  },
};
