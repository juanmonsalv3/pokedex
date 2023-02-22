import { preload } from 'swr';

import PokemonDetails from './components/pokemon/PokemonDetails';
import PokemonList from './components/pokemon/PokemonList';
import PokemonProvider from './context/PokemonContext';
import pokemonAPI from './api/pokemonAPI';
import PokemonFilters from './components/pokemon/PokemonFilters';

preload('pokedex/2', pokemonAPI.get);
preload('pokemon/1', pokemonAPI.get);

function App() {
  return (
    <div className="App flex justify-between flex-wrap">
      <PokemonProvider>
        {/* <PokemonFilters /> */}
        <PokemonList />
        <PokemonDetails />
      </PokemonProvider>
    </div>
  );
}

export default App;
