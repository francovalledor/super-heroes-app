import "express-async-errors";
import express from "express";
import mongoClient, { connectMongo, disconnectMongo } from "./mongoClient";

import { errorHandler } from "./errorHandler";
import { disableCorsMiddleware } from "./disableCorsMiddleware";
import bodyParser from "body-parser";
import mongoose, { model } from "mongoose";
import SuperHero from "./schemas/SuperHero";
import superHeroService from "./service/superHeroService";
import { Company } from "./types";

const SERVER_PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(disableCorsMiddleware);

app.use(errorHandler);

const initApp = async () => {
  await connectMongo();

  app.listen(SERVER_PORT, () => {
    console.log(`Server ready 🤙🏽 Listening on port ${SERVER_PORT}`);
  });

  process.on("SIGINT", async () => {
    await disconnectMongo();
    process.exit();
  });

  const data = await superHeroService.addSuperHero({
    name: "Spiderman",
    secretName: "Peter Parker",
    biography: "Lorem...",
    company: Company.MARVEL,
    imageUrl: "jahksjdk",
    appearanceYear: 1989,
  });

  console.log(data);
};

initApp();
