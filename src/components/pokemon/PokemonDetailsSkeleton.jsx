import React from 'react';

function PokemonDetailsSkeleton() {
  return (
    <div className="mb-4 flex w-1/3 flex-shrink-0 flex-col content-center animate-pulse">
      <div className="z-20 translate-y-14">
        <div className="mx-auto h-40 w-40">
          <div className="h-40 w-40 rounded-full bg-slate-200"></div>
        </div>
      </div>
      <div className="rounded-xl bg-white px-8 pb-8 pt-16">
        <div className="h-4 rounded bg-slate-200"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-2 h-4 rounded bg-slate-200"></div>
            <div className="col-span-1 h-4 rounded bg-slate-200"></div>
          </div>
          <div className="h-4 rounded bg-slate-200"></div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-1 h-4 rounded bg-slate-200"></div>
            <div className="col-span-2 h-4 rounded bg-slate-200"></div>
          </div>
          <div className="h-4 rounded bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetailsSkeleton;
