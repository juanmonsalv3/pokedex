import useSWR from 'swr';
import pokemonAPI from '../api/pokemonAPI';

const usePokemon = (pokemonId) => {
  const { isLoading, error, data } = useSWR(
    pokemonId ? `pokemon/${pokemonId}` : null,
    pokemonAPI.get,
  );

  return {
    isPokemonLoading: isLoading,
    pokemonError: error,
    pokemonData: data,
  };
};

export default usePokemon;
