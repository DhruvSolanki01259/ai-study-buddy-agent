import { OutputScehma } from "@/modules/schema/output.schema";
import { StructuredOutputParser } from "@langchain/core/output_parsers";

export const parser = StructuredOutputParser.fromZodSchema(OutputScehma)