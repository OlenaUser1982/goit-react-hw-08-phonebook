import axios from 'axios';
const baseURL = 'https://65a26ebc42ecd7d7f0a79d62.mockapi.io';

export const getAllContacts = async () => {
  const result = await axios(`${baseURL}/contacts`);
  return result;
};

export const addNewContact = async data => {
  const result = await axios.post(`${baseURL}/contacts`, data);
  return result;
};

export const deleteContact = async id => {
  const result = await axios.delete(`${baseURL}/contacts/${id}`);
  return result;
};
