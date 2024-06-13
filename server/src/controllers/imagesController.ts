import { RequestHandler } from "express";
import storageService from "../services/storageService";
import { StatusCodes } from "http-status-codes";

const uploadImage: RequestHandler = async (req, res) => {
  const data = req.body.data;
  const imageName = req.params.name;

  const fileName = await storageService.uploadImage(imageName, data);

  res.status(StatusCodes.CREATED).send(fileName);
};

const getImage: RequestHandler = async (req, res) => {
  const imageName = req.params.name;

  const stream = await storageService.getImageStream(imageName);

  res.setHeader("Content-Type", "image/png");
  stream.pipe(res);
};

export default { uploadImage, getImage };
