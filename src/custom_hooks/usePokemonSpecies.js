import useSWR from 'swr';
import pokemonAPI from '../api/pokemonAPI';

const usePokemonSpecies = (pokemonId) => {
  const {
    isLoading,
    error,
    data: pokemonSpeciesData,
  } = useSWR(pokemonId ? `pokemon-species/${pokemonId}` : null, pokemonAPI.get);

  return { isLoading, error, pokemonSpeciesData };
};

export default usePokemonSpecies;
