import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7c9d61bceb3345f58c02f1bbf114fa23'
  }
})
