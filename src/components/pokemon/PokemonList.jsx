import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useCallback, useMemo, useRef } from 'react';
import { BASE_API_URL } from '../../constants';
import ErrorMessage from '../common/Error';
import LoadingSpinner from '../common/LoadingSpinner';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['pokemonList'],
      queryFn: ({ pageParam = `${BASE_API_URL}/pokemon/?limit=12` }) =>
        axios.get(pageParam).then((res) => res.data),
      getNextPageParam: (lastPage) => lastPage.next,
    });

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage],
  );

  const results = useMemo(
    () => (data ? data.pages.map((p) => p.results).flat() : []),
    [data],
  );

  if (isLoading) {
    return <LoadingSpinner fullContainer />;
  }

  if (isError) {
    return <ErrorMessage fullContainer />;
  }

  return (
    <div className="flex max-h-screen flex-row flex-wrap justify-start overflow-y-scroll">
      {results.map((result, i) => (
        <PokemonCard
          key={result.name}
          {...result}
          ref={results.length === i + 1 ? lastElementRef : null}
        ></PokemonCard>
      ))}
    </div>
  );
};

export default PokemonList;
