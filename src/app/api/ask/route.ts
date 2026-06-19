import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { OutputScehma } from "@/modules/schema/output.schema";
import { InputSchema } from "@/modules/schema/input.schema";
import { getChatModel } from "@/modules/model/chat.model";
import { NextRequest, NextResponse } from "next/server";
import {
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "@/lib/templates/prompt.template";

export const GET = async (request: NextRequest) => {
  try {
    return NextResponse.json(
      { success: true, error: null, message: "Test Route Working!!!" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        message: "Internal Server Error.",
      },
      { status: 500 },
    );
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const { query } = await request.json();
    const validateQuery = InputSchema.parse(query);

    const systemPrompt = SystemMessagePromptTemplate();
    const humanPrompt = HumanMessagePromptTemplate(validateQuery);

    const model = getChatModel({ temperature: 0.5 });
    const response = await model.invoke([
      new SystemMessage(systemPrompt),
      new HumanMessage(humanPrompt),
    ]);

    const raw = response.content as string;
    const matches = raw.match(/```json\s*([\s\S]*?)\s*```/g);
    if (!matches || matches.length === 0) {
      throw new Error("No JSON found");
    }

    const end = matches.length - 1;
    const actualJSON = matches[end]
      .replace(/```json/, "")
      .replace(/```/, "")
      .trim();

    const parsedJSON = JSON.parse(actualJSON);
    const validateOutput = OutputScehma.parse(parsedJSON);

    return NextResponse.json(
      {
        success: true,
        error: null,
        message: "Request Sent Successfully",
        data: validateOutput ?? "",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        message: "Internal Server Error.",
      },
      { status: 500 },
    );
  }
};
