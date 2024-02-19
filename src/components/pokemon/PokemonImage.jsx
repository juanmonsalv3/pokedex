import React from 'react';

function PokemonImage({ id, name, className }) {
  return (
    <img
      className={className}
      src={`https://raw.githubusercontent.com/juanmonsalv3/PokemonImages/master/assets/thumbnails-compressed/${id}.png`}
      alt={name}
    />
  );
}

export default PokemonImage;
