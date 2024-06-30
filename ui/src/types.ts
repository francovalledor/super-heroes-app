export type Place = {
  name: string;
  latitude: number;
  longitude: number;
};

enum Company {
  MARVEL = "MARVEL",
  DC = "DC"
}

export type SuperHero = {
  "company": Company,
  "name": string,
  "secretName": string,
  "imageUrl": string,
  "biography": string,
  "appearanceYear": number,
  "equipment": string,
}