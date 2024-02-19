import { create } from 'zustand';

export const usePokemonStore = create((set) => ({
  selectedPokemonId: 1,
  setSelectedPokemonId: (id) => set(() => ({ selectedPokemonId: id })),
}));
