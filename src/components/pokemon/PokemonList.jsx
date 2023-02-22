import PokemonItem from './PokemonItem';
import useSWR from 'swr';
import { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import pokemonAPI from '../../api/pokemonAPI';
import LoadingSpinner from '../common/LoadingSpinner';
import classnames from 'tailwindcss-classnames';

const PokemonList = () => {
  const { selectedPokemonId } = useContext(PokemonContext);
  const listRef = useRef(null);

  const gridView = !selectedPokemonId;

  const { isLoading, error, data } = useSWR('pokedex/2', pokemonAPI.get, {});

  useEffect(() => {
    if (listRef.current) listRef.current.addEventListener('keyup', console.log);
  }, []);

  useLayoutEffect(() => {
    if (selectedPokemonId) {
      const element = document.querySelector(
        `[data-pokemon-id="${selectedPokemonId}"]`,
      );
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedPokemonId]);

  if (isLoading || !data) return <LoadingSpinner />;
  if (error) return <div>Error loading</div>;

  const pokemonList = data.pokemon_entries;

  return (
    <div
      ref={listRef}
      className={classnames('flex  flex-wrap', {
        'flex-row': gridView,
        'max-h-screen basis-3/12 items-stretch overflow-scroll':
          !gridView,
      })}
    >
      <ul
        className={classnames('mt-4 flex flex-wrap gap-y-2 text-center', {
          'grow items-stretch': gridView,
          'grow flex-col': !gridView,
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
