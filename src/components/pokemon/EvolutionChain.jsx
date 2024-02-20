import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import PokemonImage from './PokemonImage';

const EvolutionCondition = ({ evolutionDetails }) => {
  console.log(evolutionDetails);
  return (
    <div className="mr-4 text-xs">
      {evolutionDetails.min_level && (
        <div>Min lvl: {evolutionDetails.min_level}</div>
      )}
      {evolutionDetails.item && <div>Item: {evolutionDetails.item.name}</div>}
      {evolutionDetails.location && (
        <div>Loc: {evolutionDetails.location.name}</div>
      )}
      {evolutionDetails.min_affection && (
        <div>Min Affection: {evolutionDetails.min_affection}</div>
      )}
      {evolutionDetails.min_happiness && (
        <div>Min Happines: {evolutionDetails.min_happiness}</div>
      )}
      {evolutionDetails.trigger.name === 'other' && <div>Other</div>}
      {evolutionDetails.trigger.name === 'trade' && <div>Trade</div>}
    </div>
  );
};

const EvolutionDetails = ({ evolutionData }) => {
  const url = evolutionData.species.url.replace(
    '/pokemon-species/',
    '/pokemon/',
  );
  const { data: pokemon } = useQuery({
    queryKey: [url],
    queryFn: () => axios.get(url).then((res) => res.data),
  });

  if (!pokemon) return null;

  const evolutionDetails = evolutionData.evolution_details ?? [];
  return (
    <div className="flex flex-row items-center justify-center">
      <div>
        {evolutionDetails.length > 0 &&
          evolutionDetails.map((e) => (
            <EvolutionCondition evolutionDetails={e} />
          ))}
      </div>
      <div className="flex flex-col justify-center overflow-hidden">
        <div className="-m-1 w-20 ">
          <PokemonImage
            name={pokemon.name}
            url={pokemon.sprites.front_default}
          />
        </div>
        <div className="m-auto text-xs font-bold capitalize">
          {pokemon.name}
        </div>
      </div>
      {evolutionData.evolves_to.length > 0 && (
        <div className="flex flex-col justify-between gap-4">
          {evolutionData.evolves_to.map((e) => (
            <EvolutionDetails key={e.species.name} evolutionData={e} />
          ))}
        </div>
      )}
    </div>
  );
};

const EvolutionChain = React.memo(({ url }) => {
  const { data: evolutionData } = useQuery({
    queryKey: [url],
    queryFn: () => axios.get(url).then((response) => response.data),
  });

  if (!evolutionData || evolutionData.chain.evolves_to.length == 0)
    return (
      <div className="shrink-0 basis-1/3">
        <div class="h-8 rounded bg-slate-200"></div>
        <div class="mt-4 grid grid-cols-2 gap-4">
          <div class="col-span-1 h-2 rounded bg-slate-200"></div>
          <div class="col-span-1 h-2 rounded bg-slate-200"></div>
          <div class="col-span-1 h-2 rounded bg-slate-200"></div>
          <div class="col-span-1 h-2 rounded bg-slate-200"></div>
        </div>
      </div>
    );

  const evolutionChain = evolutionData.chain;
  return (
    <div className="shrink-0 basis-1/3">
      <div className="flex items-center justify-between border-b-2 border-slate-300 p-2">
        <h2 className="m-auto text-left text-xl capitalize">Evolution</h2>
      </div>
      <div>
        <EvolutionDetails evolutionData={evolutionChain} />
      </div>
    </div>
  );
});

export default EvolutionChain;
