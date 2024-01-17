import axios from 'axios';

export const register = async credentials => {
  try {
    const result = await axios.post('/users/signup', credentials);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
