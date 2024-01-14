import axios from 'axios';
const baseURL = 'https://connections-api.herokuapp.com/';

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
