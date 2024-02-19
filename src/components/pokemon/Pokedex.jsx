import React from 'react';
import PokemonDetails from './PokemonDetails';
import PokemonList from './PokemonList';

export default function Pokedex() {
  return (
    <div className='flex flex-row flex-nowrap'>
      <PokemonDetails />
      <PokemonList />
    </div>
  );
}
