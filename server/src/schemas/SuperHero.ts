import mongoose, { Schema, Document } from "mongoose";

interface SuperHeroData {}

interface ISuperHero extends Document, SuperHeroData {}

const SuperHeroSchema: Schema = new Schema({
  company: {
    type: String,
    enum: ["MARVEL", "DC"],
    required: true,
  },
  name: { type: String, required: true, unique: true },
  secretName: { type: String },
  imageUrl: { type: String, required: true },
  biography: { type: String, required: true },
  appearanceYear: { type: Number, required: true },
  equipment: { type: String },
});

const SuperHeroModel = mongoose.model<ISuperHero>("SuperHero", SuperHeroSchema);

export default SuperHeroModel;
