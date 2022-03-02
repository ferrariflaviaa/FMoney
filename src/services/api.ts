import axios from 'axios';

//URL BASE PARA DIRECIONAMENTO DA API:  
export const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})