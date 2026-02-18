
/* 
  FRONTEND API SERVICE
  This utility handles all communication with the Express backend.
*/

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const createOrder = async (email: string) => {
  const response = await axios.post(`${API_BASE_URL}/create-order`, { email });
  return response.data;
};

export const verifyPayment = async (paymentData: any) => {
  const response = await axios.post(`${API_BASE_URL}/verify-payment`, paymentData);
  return response.data;
};
