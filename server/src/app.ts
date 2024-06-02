import "express-async-errors";
import express from "express";
import mongoClient, {connectMongo, disconnectMongo} from "./mongoClient";
import { router as geoRouter } from "./geo/router";
import { errorHandler } from "./errorHandler";
import { disableCorsMiddleware } from "./disableCorsMiddleware";
import bodyParser from "body-parser";
import mongoose, { model } from "mongoose";

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
    await disconnectMongo()
    process.exit();
  });

};

initApp();
