import { snakeCase } from "lodash";
import SuperHeroModel from "../schemas/SuperHero";
import { SuperHeroCreationData } from "../types";
import storageService from "./storageService";
import { initialData } from "../data/initialData";

const loadInitialSuperHeros = async () => {
  const count = await SuperHeroModel.countDocuments();

  if (count > 0) return;

  await Promise.all(initialData.map(addSuperHero));

  console.log("Initial data loaded 🎉");
};

const addSuperHero = async (data: SuperHeroCreationData) => {
  const { base64Image, ...rest } = data;

  const imageName = await storageService.uploadImage(
    snakeCase(data.name),
    data.base64Image.replace("data:image/jpeg;base64,", "")
  );

  const superHero = new SuperHeroModel({
    ...rest,
    imageUrl: `/api/images/${imageName}`,
  });

  await superHero.save();

  return superHero;
};

const getAll = async () => {
  return SuperHeroModel.find();
};

export default { addSuperHero, loadInitialSuperHeros, getAll };
