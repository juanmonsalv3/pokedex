import PokemonItem from './PokemonItem';
import useSWR from 'swr';
import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import pokemonAPI from '../../api/pokemonAPI';
import LoadingSpinner from '../common/LoadingSpinner';

const PokemonList = () => {
  const { setPokemonList, pokemonList, setSelectedPokemonId } =
    useContext(PokemonContext);

  const { isLoading, error } = useSWR('pokedex/2', pokemonAPI.get, {
    onSuccess: (data) => {
      setPokemonList(data.pokemon_entries);
      setSelectedPokemonId(data.pokemon_entries[0].entry_number);
    },
  });

  if (isLoading || !pokemonList.length) return <LoadingSpinner />;
  if (error) return <div>Error loading</div>;

  return (
    <div className="flex max-h-screen basis-3/12 items-stretch overflow-scroll">
      <ul className="mt-4 flex grow flex-col items-stretch gap-y-4 text-center">
        {pokemonList.map((pokemon) => (
          <PokemonItem
            key={pokemon.entry_number}
            number={pokemon.entry_number}
            {...pokemon.pokemon_species}
          />
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
