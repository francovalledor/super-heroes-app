import SuperHero from "../schemas/SuperHero";
import { SuperHeroData } from "../types";

const addSuperHero = async (data: SuperHeroData) => {
  const superHero = new SuperHero(data);

  await superHero.save();

  return superHero;
};

export default { addSuperHero };
