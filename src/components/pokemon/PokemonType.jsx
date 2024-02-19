import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import classnames from 'tailwindcss-classnames';

export const colors = {
  normal: 'bg-stone-400',
  grass: 'bg-green-600',
  poison: 'bg-purple-500',
  fire: 'bg-orange-500',
  ghost: 'bg-violet-900',
  rock: 'bg-stone-500',
  ground: 'bg-orange-700',
  steel: 'bg-teal-700',
  flying: 'bg-sky-300',
  dragon: 'bg-sky-700',
  fighting: 'bg-red-600',
  electric: 'bg-yellow-300',
  ice: 'bg-teal-300',
  bug: 'bg-green-400',
  water: 'bg-sky-500',
  psychic: 'bg-rose-300',
  dark: 'bg-slate-700',
  fairy: 'bg-pink-400',
};

const PokemonType = ({ name, url }) => {
  const { data } = useQuery({
    queryKey: [url],
    queryFn: () => axios.get(url),
  });

  if (!data) return null;
  return (
    <div
      className={classnames(
        'flex justify-center px-4 text-white rounded py-1',
        colors[name],
      )}
    >
      <span className="text-center uppercase text-sm">{name}</span>
    </div>
  );
};

export default PokemonType;
