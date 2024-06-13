import createHttpError from "http-errors";
import minioClient from "../clients/minioClient";

export const IMAGES_BUCKET_NAME = "images";

const initStorageService = async () => {
  if (await minioClient.bucketExists(IMAGES_BUCKET_NAME)) return;

  await minioClient.makeBucket(IMAGES_BUCKET_NAME);
};

const uploadImage = async (name: String, data: String) => {
  const buffer = Buffer.from(data, "base64");
  const objectName = `${name}-${Date.now()}.png`;

  try {
    await minioClient.putObject(IMAGES_BUCKET_NAME, objectName, buffer);
    return objectName;
  } catch (err) {
    console.error("Failed to upload image", err);
    throw new createHttpError.InternalServerError("Failed to upload image");
  }
};

const getImageStream = async (imageName: string) => {
  try {
    const stream = await minioClient.getObject(IMAGES_BUCKET_NAME, imageName);
    return stream;
  } catch (error: any) {
    if (error.code == "NoSuchKey")
      throw new createHttpError.NotFound("Image not found");

    throw error;
  }
};

export default {
  uploadImage,
  initStorageService,
  getImageStream,
};
