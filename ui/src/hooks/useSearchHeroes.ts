import { useHeroes } from "./useHeroes";

export const useSearchHeroes = (query: string) => {
  const { heroes, isLoading, error } = useHeroes();

  const searchTerm = query.toLowerCase();
  const searchResults = heroes.filter(
    (hero) =>
      hero.name.toLowerCase().includes(searchTerm) ||
      hero.secretName.toLowerCase().includes(searchTerm)
  );

  return { searchResults, isLoading, error };
};
