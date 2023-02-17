import { createContext, useState } from 'react';

export const PokemonContext = createContext({});

const PokemonProvider = ({ children }) => {
  const [selectedPokemonId, setSelectedPokemonId] = useState(1);
  const [pokemonList, setPokemonList] = useState([]);
  return (
    <PokemonContext.Provider
      value={{
        selectedPokemonId,
        setSelectedPokemonId,
        pokemonList,
        setPokemonList,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
