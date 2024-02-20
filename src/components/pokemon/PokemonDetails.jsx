import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_API_URL } from '../../constants';
import { formatEntryNumber } from '../../helpers/format';
import { usePokemonStore } from '../../store/pokemonStore';
import EvolutionChain from './EvolutionChain';
import PokemonImage from './PokemonImage';
import PokemonType from './PokemonType';

const PokemonDetails = () => {
  const selectedPokemonId = usePokemonStore((state) => state.selectedPokemonId);
  const id = formatEntryNumber(selectedPokemonId);

  const speciesUrl = `${BASE_API_URL}/pokemon-species/${selectedPokemonId}/`;
  const pokemonUrl = `${BASE_API_URL}/pokemon/${selectedPokemonId}/`;

  const { data: pokemonData } = useQuery({
    queryKey: [pokemonUrl],
    queryFn: () => axios.get(pokemonUrl).then((response) => response.data),
  });

  const { data: speciesData } = useQuery({
    queryKey: [speciesUrl],
    queryFn: () => axios.get(speciesUrl).then((response) => response.data),
  });

  if (!speciesData || !pokemonData)
    return <div className=" w-1/3 flex-shrink-0"></div>;

  const description = speciesData.flavor_text_entries
    .filter((t) => t.language.name === 'en')
    .pop();

  const genera = speciesData.genera.find((g) => g.language.name === 'en');

  return (
    <div className="mb-4 flex w-1/3 flex-shrink-0 flex-col content-center">
      <div className="z-20 translate-y-14">
        <div className="mx-auto h-40 w-40">
          <PokemonImage
            className="m-auto"
            id={id}
            name={speciesData.name}
            url={pokemonData.sprites.other['official-artwork'].front_default}
          />
        </div>
      </div>
      <div className="rounded-xl bg-white px-8 pt-16 pb-8">
        <div className="text-center font-medium text-slate-400">#{id}</div>

        <div className="text-center text-4xl font-bold capitalize">
          {speciesData.name}
        </div>
        <div className="text-center text-sm font-light capitalize">
          {genera.genus}
        </div>
        <div className="my-4 flex flex-row justify-center gap-x-2">
          {pokemonData.types.map(({ type }) => (
            <PokemonType key={type.name} {...type} />
          ))}
        </div>
        <div className="my-4 text-center">
          <p className="text-lg font-bold">Pokedex Entry</p>
          <p className="my-4 text-justify">{description.flavor_text}</p>
        </div>

        <EvolutionChain url={speciesData.evolution_chain.url} />
      </div>
    </div>
  );
};

export default PokemonDetails;
