import axios from 'axios';
const baseURL = 'https://connections-api.herokuapp.com';
export const contactsAPI = axios.create({ baseURL });
export const getAllContacts = async () => {
  try {
    const result = await contactsAPI(`/contacts`);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const addNewContact = async data => {
  const result = await contactsAPI.post(`/contacts`, data);
  return result;
};

export const deleteContact = async id => {
  const result = await contactsAPI.delete(`/contacts/${id}`);
  return result;
};
