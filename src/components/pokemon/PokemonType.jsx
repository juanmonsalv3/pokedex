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

const PokemonType = ({ name }) => {
  return (
    <div className='flex items-center bg-slate-400 text-white pr-2'>
      <img
        className={classnames('w-12 mr-2 p-2', colors[name])}
        src={`https://raw.githubusercontent.com/juanmonsalv3/PokemonImages/master/assets/Others/type-icons/${name}.svg`}
        alt={name + ' type'}
      />
      <span className='capitalize text-2xl text-left'>{name}</span>
    </div>
  );
};

export default PokemonType;
