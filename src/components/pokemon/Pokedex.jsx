import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { usePokemonStore } from '../../store/pokemonStore';
import Dialog from '../common/Dialog';
import PokemonDetails from './PokemonDetails';
import PokemonList from './PokemonList';

export default function Pokedex() {
  const { md } = useMediaQuery();

  const openDetail = usePokemonStore((state) => state.openDetail);
  const setOpenDetail = usePokemonStore((state) => state.setOpenDetail);

  return (
    <div className="flex flex-col flex-nowrap sm:flex-row">
      {md ? (
        <PokemonDetails />
      ) : (
        <Dialog open={openDetail} onClose={() => setOpenDetail(false)}>
          <PokemonDetails />
        </Dialog>
      )}
      <PokemonList />
    </div>
  );
}
