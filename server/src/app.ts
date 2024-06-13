import "express-async-errors";
import express from "express";
import mongoClient, {
  connectMongo,
  disconnectMongo,
} from "./clients/mongoClient";

import { errorHandler } from "./errorHandler";
import { disableCorsMiddleware } from "./disableCorsMiddleware";
import bodyParser from "body-parser";
import storageService from "./services/storageService";
import imagesRouter from "./routers/imagesRouter";

const SERVER_PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(disableCorsMiddleware);

app.use("/api", imagesRouter);

app.use(errorHandler);

const initApp = async () => {
  await connectMongo();
  await storageService.initStorageService();

  app.listen(SERVER_PORT, () => {
    console.log(`Server ready 🤙🏽 Listening on port ${SERVER_PORT}`);
  });

  process.on("SIGINT", async () => {
    await disconnectMongo();
    process.exit();
  });
};

initApp();
