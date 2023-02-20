import { useContext } from 'react';
import classnames from 'tailwindcss-classnames';
import { PokemonContext } from '../../context/PokemonContext';
import { formatEntryNumber } from '../../helpers/format';

const PokemonItem = ({ name, number, gridView }) => {
  const { selectedPokemonId, setSelectedPokemonId } =
    useContext(PokemonContext);
  const entry = formatEntryNumber(number);
  return (
    <li
      className={classnames(
        'flex shrink-0 grow flex-wrap text-lg text-white',
        {
          'shrink-0 grow-0 basis-1/5': gridView,
        },
      )}
    >
      <div
        className={classnames(
          'justify-stretch mx-6 flex grow basis-full cursor-pointer rounded bg-slate-400 shadow-xl',
          {
            'bg-slate-500 outline outline-3 outline-slate-700 scale-105':
              selectedPokemonId === number,
          },
        )}
        onClick={() => setSelectedPokemonId(number)}
      >
        <img
          className="mr-4 grow-0 rounded-l bg-slate-300"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
          alt={name}
        />
        <span className="item-start grow self-center text-left text-xl capitalize">
          {name}
        </span>
        <span className="text-md flex self-start p-1 leading-none">
          N°{entry}
        </span>
      </div>
    </li>
  );
};

export default PokemonItem;
