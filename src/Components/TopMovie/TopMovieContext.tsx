import { createContext } from 'react'

const TopMovieContext = createContext(undefined);

export const TopMovieContextValueProvider = TopMovieContext.Provider;

export default TopMovieContext;
