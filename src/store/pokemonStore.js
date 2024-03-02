import { create } from 'zustand';

export const usePokemonStore = create((set) => ({
  openDetail: false,
  setOpenDetail: (open) => set(() => ({ openDetail: open })),
  selectedPokemonId: 1,
  setSelectedPokemonId: (id) => {
    set(() => ({ selectedPokemonId: id }))
    set(() => ({ openDetail: true }))
  },
}));
