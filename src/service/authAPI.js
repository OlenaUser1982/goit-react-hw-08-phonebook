// import axios from 'axios';
import { contactsAPI } from './contactsApi';
export const register = async credentials => {
  try {
    const result = await contactsAPI.post(`/users/signup`, credentials);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
export const login = async credentials => {
  try {
    const result = await contactsAPI.post(`/users/login`, credentials);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
export const refreshUser = async () => {
  try {
    const result = await contactsAPI(`/users/current`);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
export const logout = async () => {
  try {
    const result = await contactsAPI.post(`/users/logout`);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
