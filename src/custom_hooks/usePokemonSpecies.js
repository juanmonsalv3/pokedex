import useSWR from 'swr';
import pokemonAPI from '../api/pokemonAPI';

const usePokemonSpecies = (pokemonId) => {
  const {
    isLoading,
    error,
    data: pokemonSpeciesData,
  } = useSWR(`pokemon-species/${pokemonId}`, pokemonAPI.get);

  return { isLoading, error, pokemonSpeciesData };
};

export default usePokemonSpecies;
