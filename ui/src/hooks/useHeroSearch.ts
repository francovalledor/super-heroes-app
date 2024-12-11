import { useState, useCallback } from 'react';
import { SuperHero } from '@/types';
import { searchHeroes } from '@/lib/api';

export function useHeroSearch(initialHeroes: SuperHero[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SuperHero[]>(initialHeroes);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setSearchResults(searchHeroes(initialHeroes, query));
  }, [initialHeroes]);

  return {
    searchQuery,
    searchResults,
    handleSearch
  };
}