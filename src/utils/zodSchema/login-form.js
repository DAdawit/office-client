import { z } from "zod";
// login form schema
export const loginSchema = z.object({
  loginIdentifier: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
});
