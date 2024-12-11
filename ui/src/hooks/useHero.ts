import { useHeroes } from "./useHeroes";

export const useHero = (id: string) => {
  const { heroes, isLoading, error } = useHeroes();

  return { hero: heroes.find((hero) => hero._id === id), isLoading, error };
};
