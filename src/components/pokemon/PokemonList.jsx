import PokemonItem from './PokemonItem';
import useSWR from 'swr';
import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import pokemonAPI from '../../api/pokemonAPI';
import LoadingSpinner from '../common/LoadingSpinner';
import classnames from 'tailwindcss-classnames';

const PokemonList = () => {
  const { selectedPokemonId } = useContext(PokemonContext);

  const gridView = !selectedPokemonId;

  const { isLoading, error, data } = useSWR('pokedex/2', pokemonAPI.get, {});

  if (isLoading || !data) return <LoadingSpinner />;
  if (error) return <div>Error loading</div>;

  const pokemonList = data.pokemon_entries;

  return (
    <div
      className={classnames('flex  flex-wrap', {
        'flex-row': gridView,
        'max-h-screen overflow-scroll basis-3/12 items-stretch order-first': !gridView,
      })}
    >
      <ul
        className={classnames('mt-4 flex flex-wrap gap-y-4 text-center', {
          'grow items-stretch': gridView,
        })}
      >
        {pokemonList.map((pokemon) => (
          <PokemonItem
            gridView={gridView}
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
