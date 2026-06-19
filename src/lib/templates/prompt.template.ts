import { parser } from "../parser/output.parser";

export const SystemMessagePromptTemplate = () => {
  const prompt =
    "You are a friendly computer science teacher helping first-year students.";
  return prompt;
};

export const HumanMessagePromptTemplate = (question: string) => {
  const formatInstruction = parser.getFormatInstructions();
  const prompt = `
    You are an AI programming tutor.

    Rules:

    1. Explain for beginners
    2. Use simple words
    3. Give examples
    4. Avoid jargon
    5. Give summary
    6. Return ONLY valid JSON

    Question:

    ${question}

    ${formatInstruction}
  `;
  return prompt;
};
