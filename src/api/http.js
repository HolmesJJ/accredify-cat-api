import axios from 'axios';

const httpBaseUrl = 'https://api.thecatapi.com/v1'

// Create axios instance
const $http = axios.create({
  baseURL: httpBaseUrl,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8;',
  }
})

export default $http
