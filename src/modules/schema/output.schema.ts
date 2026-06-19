import { z } from "zod";

export const OutputScehma = z.object({
  title: z.string(),
  explaination: z.string(),
  examples: z.array(
    z.object({
      topic: z.string(),
      explaination: z.string(),
      examples: z.array(z.string()),
      summary: z.string(),
      difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
    }),
  ),
  summary: z.string(),
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
});

export type OutputType = z.infer<typeof OutputScehma>;
