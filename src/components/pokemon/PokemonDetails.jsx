import { Suspense, useContext, useDeferredValue } from 'react';

import LoadingSpinner from '../common/LoadingSpinner';
import PokemonType from './PokemonType';
import EvolutionChain from './EvolutionChain';

import { PokemonContext } from '../../context/PokemonContext';

import usePokemon from '../../custom_hooks/usePokemon';
import usePokemonSpecies from '../../custom_hooks/usePokemonSpecies';

import { formatEntryNumber } from '../../helpers/format';

const PokemonDetails = () => {
  const { selectedPokemonId } = useContext(PokemonContext);

  const { pokemonData, isPokemonLoading, pokemonError } =
    usePokemon(selectedPokemonId);
  const { pokemonSpeciesData: species } = usePokemonSpecies(selectedPokemonId);

  if (!selectedPokemonId) return null;

  if (isPokemonLoading || !pokemonData)
    return <div className="grow">Loading</div>;
  if (pokemonError) return <div className="grow">Error loading</div>;

  const { id, name, types } = pokemonData;
  const entry = formatEntryNumber(id);

  return (
    <div className="max-h-screen grow flex">
      <Suspense fallback={<LoadingSpinner />}>
        <div className="basis-2/3">
          <div className="flex items-center justify-between border-b-2 border-slate-300 p-2">
            <h2 className="text-2xl capitalize">N° {entry}</h2>
            <h2 className="m-auto text-center text-2xl capitalize">{name}</h2>
          </div>
          <div className="relative flex">
            <div className="absolute top-2 flex shrink flex-col gap-1 gap-x-4">
              {types.map(({ type }) => (
                <PokemonType name={type.name} key={type.name} />
              ))}
            </div>
            <div className="m-auto w-[30rem] grow-0 p-12">
              <img
                src={`https://raw.githubusercontent.com/juanmonsalv3/PokemonImages/master/assets/images/${entry}.png`}
                alt={name}
              />
            </div>
          </div>
        </div>
        <div className="basis-1/3">
          {species && species.evolution_chain && (
            <EvolutionChain evolutionUrl={species.evolution_chain.url} />
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default PokemonDetails;
