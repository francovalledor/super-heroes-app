export enum Company {
  MARVEL = "MARVEL",
  DC = "DC",
}

export interface SuperHeroData {
  company: Company;
  name: string;
  secretName?: string;
  imageUrl: string;
  appearanceYear: number;
  biography: string;
  equipment?: string;
}
