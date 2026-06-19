import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { ChatGoogle } from "@langchain/google";
import { ChatGroq } from "@langchain/groq";
import { ChatOpenAI } from "@langchain/openai";

type ModelOptions = {
  temperature?: number;
};

export const getChatModel = (options: ModelOptions = {}): BaseChatModel => {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  if (!OPENAI_API_KEY || !GEMINI_API_KEY || !GROQ_API_KEY)
    throw new Error(`API Keys are not configured`);

  const OPENAI_MODEL = process.env.OPENAI_MODEL;
  const GEMINI_MODEL = process.env.GEMINI_MODEL;
  const GROQ_MODEL = process.env.GROQ_MODEL;
  if (!OPENAI_MODEL || !GEMINI_MODEL || !GROQ_MODEL)
    throw new Error("Chat Model not properly configured");

  const temperature = options?.temperature ?? 0;
  const MODEL_PROVIDER = process.env.MODEL_PROVIDER;

  switch (MODEL_PROVIDER) {
    case "groq":
      return new ChatGroq({
        model: GROQ_MODEL,
        temperature,
        apiKey: GROQ_API_KEY,
      });

    case "gemini":
      return new ChatGoogle({
        model: GEMINI_MODEL,
        temperature,
        apiKey: GEMINI_API_KEY,
      });

    case "openai":
      return new ChatOpenAI({
        model: OPENAI_MODEL,
        temperature,
        apiKey: OPENAI_API_KEY,
      });

    default:
      return new ChatGroq({
        model: GROQ_MODEL,
        temperature,
        apiKey: GROQ_API_KEY,
      });
  }
};
