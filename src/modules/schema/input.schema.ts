import { z } from "zod";

export const InputSchema = z.string().min(1, "Enter a valid query");
