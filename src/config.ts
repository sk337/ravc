import { config } from "dotenv";
import { z } from "zod";

config();

const configSchema = z.object({
  ROBLOX_CLIENT_ID: z.string(),
  ROBLOX_SECRET: z.string(),
  NEXT_HOST: z.string(),
});

const envs = {
  NEXT_HOST: process.env.HOST ?? "localhost:3000",
  ...process.env,
};

export const env = configSchema.parse(envs);
