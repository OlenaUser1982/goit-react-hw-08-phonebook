import axios from 'axios';
const baseURL = 'https://connections-api.herokuapp.com';

export const getAllContacts = async () => {
  try {
    const result = await axios(`${baseURL}/contacts`);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const addNewContact = async data => {
  const result = await axios.post(`${baseURL}/contacts`, data);
  return result;
};

export const deleteContact = async id => {
  const result = await axios.delete(`${baseURL}/contacts/${id}`);
  return result;
};
