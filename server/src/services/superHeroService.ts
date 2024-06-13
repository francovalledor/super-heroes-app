import { snakeCase } from "lodash";
import SuperHero from "../schemas/SuperHero";
import { SuperHeroCreationData } from "../types";
import storageService from "./storageService";

const addSuperHero = async (data: SuperHeroCreationData) => {
  const { base64Image, ...rest } = data;

  const imageName = await storageService.uploadImage(
    snakeCase(data.name),
    data.base64Image
  );

  const superHero = new SuperHero({
    ...rest,
    imageUrl: `/api/images/${imageName}`,
  });

  await superHero.save();

  return superHero;
};

export default { addSuperHero };
