import React from 'react';
import classnames from 'tailwindcss-classnames';

function PokemonImage({ id, name, className, url }) {
  return (
    <div
      className={classnames('m-auto flex h-full w-full justify-center', className)}
    >
      <img
        className={classnames('m-auto h-full max-h-full w-auto max-w-full')}
        src={url}
        alt={name}
      />
    </div>
  );
}

export default PokemonImage;
