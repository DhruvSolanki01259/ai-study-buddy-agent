import { z } from "zod";

export const OutputScehma = z.object({
  title: z.string().optional().default("Untitled"),

  explaination: z.string().optional().default("No explanation available"),

  examples: z
    .array(
      z.object({
        topic: z.string(),
        explaination: z.string(),

        examples: z
          .array(
            z.object({
              topic: z.string(),
              explaination: z.string(),
              examples: z.array(z.string()).optional().default([]),
              summary: z.string(),
              difficulty: z
                .enum(["Beginner", "Intermediate", "Advanced"])
                .optional()
                .default("Beginner"),
            }),
          )
          .optional()
          .default([]),

        summary: z.string(),

        difficulty: z
          .enum(["Beginner", "Intermediate", "Advanced"])
          .optional()
          .default("Beginner"),
      }),
    )
    .optional()
    .default([]),

  summary: z.string().optional().default("No summary available"),

  difficulty: z
    .enum(["Beginner", "Intermediate", "Advanced"])
    .optional()
    .default("Beginner"),
});

export type OutputType = z.infer<typeof OutputScehma>;