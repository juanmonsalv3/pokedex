import axios from 'axios';

const pokemonAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

const get = async (endpoint) => {
  const response = await pokemonAPI.get(endpoint);
  if (endpoint.includes('pokedex')) {
    await delay(500);
  }
  return response.data;
};

const delay = async (time = 1000) => {
  return new Promise((res) => {
    setTimeout(res, time);
  });
};

const getPokemonList = async () => {
  const response = await axios.get('pokemon/');
  return response.data;
};

export default {
  get,
  getPokemonList
};
