import mongoose from "mongoose";

let db: mongoose.Connection = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB ⚡️🤙🏽");
});

export const connectMongo = async () => {
  await mongoose.connect("mongodb://mongodb:27017/super-heroes");
  db = mongoose.connection;
};

export const disconnectMongo = () => mongoose.disconnect();

export default db;
