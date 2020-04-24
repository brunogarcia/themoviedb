import React from 'react';

const SearchContext = React.createContext();

export default SearchContext;
export const SearchConsumer = SearchContext.Consumer;
export const SearchProvider = SearchContext.Provider;
