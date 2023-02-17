import axios from 'axios';

const pokemonAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

const get = async (endpoint) => {
  const response = await pokemonAPI.get(endpoint);
  return response.data;
};

const delay = async (time = 1000) => {
  return new Promise((res) => {
    setTimeout(res, time);
  });
};

export default {
  get,
};
