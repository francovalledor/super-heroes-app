import { RequestHandler } from "express";
import superHeroService from "../services/superHeroService";
import { pick } from "lodash";
import { StatusCodes } from "http-status-codes";

const addSuperHero: RequestHandler = async (req, res) => {
  const data = pick(
    req.body,
    "name",
    "company",
    "secretName",
    "base64Image",
    "appearanceYear",
    "biography",
    "equipment"
  );

  const superHero = await superHeroService.addSuperHero(data);

  res.status(StatusCodes.CREATED).send(superHero);
};

export default { addSuperHero };
