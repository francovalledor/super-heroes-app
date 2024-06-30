import { SuperHero } from "./types";

const HOST = `http://localhost:3000`;

const BASE_URL = `${HOST}/api`;

const fetchJson = async <T>(...params: Parameters<typeof fetch>): Promise<T> =>
  fetch(...params).then((res) => res.json());

export const getAll = async () => {
  const response = await fetchJson<SuperHero[]>(`${BASE_URL}/super-heros`);

  return response.map(each => ({...each, imageUrl: `${HOST}${each.imageUrl}`}));
};