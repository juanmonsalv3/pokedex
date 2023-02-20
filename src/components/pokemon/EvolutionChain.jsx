import React, { useContext } from 'react';
import useSWR from 'swr';
import classnames from 'tailwindcss-classnames';
import pokemonAPI from '../../api/pokemonAPI';
import { PokemonContext } from '../../context/PokemonContext';
import usePokemonSpecies from '../../custom_hooks/usePokemonSpecies';
import { formatEntryNumber } from '../../helpers/format';
import LoadingSpinner from '../common/LoadingSpinner';

const EvolutionHierarchy = ({ evolutionData, head = false }) => {
  const { setSelectedPokemonId } = useContext(PokemonContext);
  const { pokemonSpeciesData, isLoading, isError } = usePokemonSpecies(
    evolutionData.species.name,
  );

  if (isLoading) return null;
  const { id, name } = pokemonSpeciesData;
  const entry = formatEntryNumber(id);

  const nextEvolutions = evolutionData.evolves_to;
  const hasNextEvolution = nextEvolutions && nextEvolutions.length > 0;

  return (
    <>
      <div className={classnames({ 'ml-8': !head })}>
        <div
          className="flex cursor-pointer border border-t-0"
          onClick={() => setSelectedPokemonId(id)}
        >
          <img
            className="w-20 grow-0 pl-2"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
          />
          <span className="item-start grow self-center text-left text-xl capitalize">
            {name}
          </span>
          <span className="flex self-start p-1 text-md leading-none">
            N°{entry}
          </span>
        </div>
        {hasNextEvolution &&
          nextEvolutions.map((e) => (
            <EvolutionHierarchy key={e.species.name} evolutionData={e} />
          ))}
      </div>
    </>
  );
};

const EvolutionChain = React.memo(({ evolutionUrl }) => {
  const {
    data: evolutionData,
    error,
    isLoading,
  } = useSWR(evolutionUrl, pokemonAPI.get, {});

  if (isLoading || !evolutionData) return <LoadingSpinner />;
  if (error) return <div>Error loading</div>;

  console.log(evolutionData);
  const evolutionChain = evolutionData.chain;

  if (!evolutionChain || evolutionChain.evolves_to.length == 0)
    return <div className="shrink-0 basis-1/3"></div>;

  return (
    <div className="shrink-0 basis-1/3">
      <EvolutionHierarchy evolutionData={evolutionData.chain} head />
    </div>
  );
});

export default EvolutionChain;
