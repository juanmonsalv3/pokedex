import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { forwardRef, useCallback } from 'react';
import { formatEntryNumber } from '../../helpers/format';
import { usePokemonStore } from '../../store/pokemonStore';
import PokemonImage from './PokemonImage';
import PokemonType from './PokemonType';

function PokemonCard({ url }, ref) {
  const { data: pokemonData } = useQuery({
    queryKey: [url],
    queryFn: () => axios.get(url).then((response) => response.data),
  });

  const setSelectedPokemonId = usePokemonStore(
    (state) => state.setSelectedPokemonId,
  );

  const selectPokemon = useCallback(
    (id) => {
      setSelectedPokemonId(id);
    },
    [setSelectedPokemonId],
  );

  if (!pokemonData) return null;

  const id = formatEntryNumber(pokemonData.id);
  return (
    <div
      className="flex shrink-0 grow-0 basis-1/2 lg:basis-1/3 flex-col items-center justify-center px-4"
      ref={ref}
    >
      <div
        className="align-center z-10 w-20 h-20 translate-y-8 cursor-pointer"
        onClick={() => selectPokemon(pokemonData.id)}
      >
        <PokemonImage
          id={id}
          name={pokemonData.name}
          url={pokemonData.sprites.other['official-artwork'].front_default}
        />
      </div>
      <div
        className="z-0 flex size-full grow cursor-pointer flex-col items-center justify-center gap-y-2 rounded-xl bg-white pb-4 pt-12"
        onClick={() => selectPokemon(pokemonData.id)}
      >
        <div className="text-center font-medium text-slate-400">#{id}</div>
        <div className="text-center text-xl font-bold capitalize">
          {pokemonData.name}
        </div>
        <div className="flex flex-row gap-x-2">
          {pokemonData.types.map(({ type }) => (
            <PokemonType key={type.name} {...type} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(PokemonCard);
