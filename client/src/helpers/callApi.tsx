import React from 'react';
import axios from 'axios';

export const callApi = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {'Content-Type': 'application/json'},
});
