import { useEffect, useState } from 'react';

// Mobile first = mobile always true
const getMediaQueriesMatches = () => ({
  sm: window.matchMedia('(min-width: 640px)').matches,
  md: window.matchMedia('(min-width: 768px)').matches,
  lg: window.matchMedia('(min-width: 1024px)').matches,
});

export const useMediaQuery = () => {
  const [matches, setMatches] = useState(getMediaQueriesMatches());

  useEffect(() => {
    const setMatchesQueryMatches = () => setMatches(getMediaQueriesMatches());
    window.addEventListener('resize', setMatchesQueryMatches);

    return () => window.removeEventListener('resize', setMatchesQueryMatches);
  }, []);

  return matches;
};
