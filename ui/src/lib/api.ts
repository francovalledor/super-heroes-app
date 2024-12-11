import { AddSuperHeroDTO } from "@/schemas/addSuperHero";
import { SuperHero } from "@/types";

const HOST = `http://localhost:3000`;

const BASE_URL = `${HOST}/api`;

const fetchJson = async <T>(...params: Parameters<typeof fetch>): Promise<T> =>
  fetch(...params).then((res) => res.json());

export const getHeroes = async () => {
  const response = await fetchJson<SuperHero[]>(`${BASE_URL}/super-heros`);

  return response.map((each) => ({
    ...each,
    imageUrl: `${HOST}${each.imageUrl}`,
  }));
};

export const addSuperHero = async (
  data: AddSuperHeroDTO
): Promise<SuperHero> => {
  const response = await fetch(`${BASE_URL}/super-heros`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Failed to create hero");

  return response.json();
};
