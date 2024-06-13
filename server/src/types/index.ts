export enum Company {
  MARVEL = "MARVEL",
  DC = "DC",
}

export interface SuperHeroCreationData {
  company: Company;
  name: string;
  secretName?: string;
  base64Image: string;
  appearanceYear: number;
  biography: string;
  equipment?: string;
}
