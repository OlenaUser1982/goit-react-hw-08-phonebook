import { contactsAPI } from './contactsApi';
export const register = async credentials => {
  const result = await contactsAPI.post(`/users/signup`, credentials);
  return result;
};
export const login = async credentials => {
  const result = await contactsAPI.post(`/users/login`, credentials);
  return result;
};
export const refreshUser = async () => {
  const result = await contactsAPI(`/users/current`);
  return result;
};
export const logout = async () => {
  const result = await contactsAPI.post(`/users/logout`);
  return result;
};
