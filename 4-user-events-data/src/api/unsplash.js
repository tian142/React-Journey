import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID SEbNPjh2ZCHpT5gCoxOT-bt71NyX91S7WUVwojus1KA',
  },
});
