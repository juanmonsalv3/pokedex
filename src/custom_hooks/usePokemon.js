import useSWR from 'swr';
import pokemonAPI from '../api/pokemonAPI';

const usePokemon = (pokemonId) => {
  const { isLoading, error, data } = useSWR(
    `pokemon/${pokemonId}`,
    pokemonAPI.get
  );

  return {
    isPokemonLoading: isLoading,
    pokemonError: error,
    pokemonData: data,
  };
};

export default usePokemon;
