import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { formatEntryNumber } from '../../helpers/format';
import { usePokemonStore } from '../../store/pokemonStore';
import PokemonImage from './PokemonImage';

const PokemonDetails = () => {
  const selectedPokemonId = usePokemonStore((state) => state.selectedPokemonId);
  const id = formatEntryNumber(selectedPokemonId);

  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${selectedPokemonId}/`;

  const { data: speciesData } = useQuery({
    queryKey: [speciesUrl],
    queryFn: () => axios.get(speciesUrl).then((response) => response.data),
  });

  console.log(speciesData);
  if (!speciesData) return <div className="w-80 flex-shrink-0"></div>;

  const description = speciesData.flavor_text_entries
    .filter((t) => t.language.name === 'en')
    .pop();

  const genera = speciesData.genera.find((g) => g.language.name === 'en');

  return (
    <div className="flex w-80 flex-shrink-0 flex-col content-center">
      <div className="">
        <PokemonImage className="m-auto" id={id} name={speciesData.name} />
      </div>
      <div className="text-center font-medium text-slate-400">#{id}</div>
      
      <div className="text-center text-3xl font-bold capitalize">
        {speciesData.name}
      </div>
      <div className="text-center text-sm font-light capitalize">
        {genera.genus}
      </div>
      <p>{description.flavor_text}</p>
    </div>
  );
};

export default PokemonDetails;
