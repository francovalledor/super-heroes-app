import { useQuery } from "@tanstack/react-query";
import { getHeroes } from "@/lib/api";
import { Company } from "@/types";

export function useHeroes(company?: Company) {
  const {
    data: heroes = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["heroes"],
    queryFn: getHeroes,
  });

  const filteredHeroes = company
    ? heroes.filter((hero) => hero.company === company)
    : heroes;

  return {
    heroes: filteredHeroes,
    isLoading,
    error,
  };
}
