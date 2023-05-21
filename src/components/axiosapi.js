import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://proyectobd.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Origin': 'http://localhost:5173',
    'Access-Control-Allow-Methods': 'GET, POST'
  }
});

export default instance;