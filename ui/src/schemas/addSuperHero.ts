import { Company } from "@/types";
import { z } from "zod";

export const addSuperHeroSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.nativeEnum(Company),
  secretName: z.string().min(2, "Secret name must be at least 2 characters"),
  appearanceYear: z.number().min(1900).max(new Date().getFullYear()),
  biography: z.string().min(10, "Biography must be at least 10 characters"),
  equipment: z.string().optional(),
  base64Image: z.string().min(1, "Image is required"),
});

export type AddSuperHeroDTO = z.infer<typeof addSuperHeroSchema>;
