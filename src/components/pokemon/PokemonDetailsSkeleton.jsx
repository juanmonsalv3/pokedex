import React from 'react';

/**
 * 
 * <div className=" w-1/3 flex-shrink-0">
      <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4 shadow">
        <div className="flex animate-pulse space-x-4">
          <div className="h-10 w-10 rounded-full bg-slate-200"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-slate-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-slate-200"></div>
                <div className="col-span-1 h-2 rounded bg-slate-200"></div>
              </div>
              <div className="h-2 rounded bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
 */

function PokemonDetailsSkeleton() {
  return (
    <div className="mb-4 flex w-1/3 flex-shrink-0 flex-col content-center">
      <div className="z-20 translate-y-14">
        <div className="mx-auto h-40 w-40">
          <div className="h-40 w-40 rounded-full bg-slate-200"></div>
        </div>
      </div>
      <div className="rounded-xl bg-white px-8 pb-8 pt-16">
        <div class="h-4 rounded bg-slate-200"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="col-span-2 h-4 rounded bg-slate-200"></div>
            <div class="col-span-1 h-4 rounded bg-slate-200"></div>
          </div>
          <div class="h-4 rounded bg-slate-200"></div>
          <div class="h-4 rounded bg-slate-200"></div>
          <div class="h-4 rounded bg-slate-200"></div>
          <div class="h-4 rounded bg-slate-200"></div>
          <div class="h-4 rounded bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetailsSkeleton;
