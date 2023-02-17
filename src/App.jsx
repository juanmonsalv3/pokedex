import { preload } from 'swr';

import PokemonDetails from './components/pokemon/PokemonDetails';
import PokemonList from './components/pokemon/PokemonList';
import PokemonProvider from './context/PokemonContext';
import pokemonAPI from './api/pokemonAPI';

preload('pokedex/2', pokemonAPI.get);
preload('pokemon/1', pokemonAPI.get);

function App() {
  return (
    <div className="App flex justify-between">
      <PokemonProvider>
        <PokemonDetails />
        <PokemonList />
      </PokemonProvider>
    </div>
  );
}

export default App;
