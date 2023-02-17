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
      className={classnames('flex grow flex-wrap text-lg text-white ', {
        'shrink-0 grow-0 basis-1/5': gridView,
      })}
    >
      <div
        className={classnames(
          'justify-stretch mx-4 flex grow basis-full cursor-pointer rounded bg-red-400 shadow-xl',
          {
            'bg-red-500 outline outline-2 outline-slate-500':
              selectedPokemonId === number,
          },
        )}
        onClick={() => setSelectedPokemonId(number)}
      >
        <img
          className="grow-0"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
          alt={name}
        />
        <span className="item-start grow self-center text-left text-xl capitalize">
          {name}
        </span>
        <span className="flex self-start p-1 text-sm leading-none">
          N°{entry}
        </span>
      </div>
    </li>
  );
};

export default PokemonItem;
