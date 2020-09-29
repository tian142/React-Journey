import axios from 'axios';

const KEY = 'AIzaSyD5r6h6aJwYubXBbRZtZtMUV4JfO8OY5t8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
