export enum Company {
  MARVEL = "MARVEL",
  DC = "DC",
}

export interface SuperHero {
  _id: string;
  company: Company;
  name: string;
  secretName: string;
  imageUrl: string;
  biography: string;
  appearanceYear: number;
  equipment: string;
}
