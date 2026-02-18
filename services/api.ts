
import axios from 'axios';

const API_BASE_URL = '/api';

export const registerUser = async (email: string) => {
  const response = await axios.post(`${API_BASE_URL}/register`, { email });
  return response.data;
};
