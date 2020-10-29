import axios from 'axios';

const server = axios.create({
  baseURL: process.env.SERVER,
  timeout: 10000,
  headers: { 
    'Content-Type': 'application/json', 
    'Frontend':  process.env.SERVER_PASSWORD 
  },
  crossdomain: true,
  validateStatus: () => {
    return true;
  },
})

export default server;
