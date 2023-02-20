import PokemonItem from './PokemonItem';
import useSWR from 'swr';
import { useContext, useEffect, useRef } from 'react';
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
    if (listRef.current)
      listRef.current.addEventListener('scroll', console.log);
  }, []);

  if (isLoading || !data) return <LoadingSpinner />;
  if (error) return <div>Error loading</div>;

  const pokemonList = data.pokemon_entries;

  return (
    <div
      ref={listRef}
      className={classnames('flex  flex-wrap', {
        'flex-row': gridView,
        'order-first max-h-screen basis-3/12 items-stretch overflow-hidden':
          !gridView,
      })}
    >
      <ul
        className={classnames('mt-4 flex flex-wrap gap-y-4 text-center', {
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
