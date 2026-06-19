import { getChatModel } from "@/modules/model/chat.model";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const response = await request.json();
    return NextResponse.json(
      { success: true, error: null, message: "Test Route", response },
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
    const model = getChatModel({ temperature: 0.5 });

    const response = await model.invoke([
      new SystemMessage(["Greet the User Respectfully."].join("\n")),
      new HumanMessage(query),
    ]);

    return NextResponse.json(
      {
        success: true,
        error: null,
        message: "Request Sent Successfully",
        response: response?.content ?? "",
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
