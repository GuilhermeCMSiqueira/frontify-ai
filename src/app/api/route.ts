import { config } from "@/lib/utils";
import {
  GoogleGenerativeAI,
  GenerateContentResult,
  Content,
} from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY || "");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "Você é um assistente de desenvolvedores front-end, formado em ciência da computação e com vastos conhecimentos sobre todo tipo de linguagem utilizada para o front-end de aplicações web. Com base nos dados fornecidos pelo usuário, você pode sugerir dicas, indicar boas práticas, corrigir erros e dar dicas de soluções mais otimizadas. Responda somente em português e seja breve nas respostas, sem se estender muito, não utilize markups, responda em um texto sem marcações de formatação.",
});

export async function POST(req: NextRequest) {
  try {
    const message = await req.json();

    const prompt = message.body;

    const result = await model.generateContent(prompt);

    const response = await result.response;

    const output = await response.text();

    console.log(message)

    return NextResponse.json({
      output,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json({
        error: error.message,
      });
    } else {
      return NextResponse.json({
        error: "An unknown error occurred",
      });
    }
  }
}

export async function GET() {
  return NextResponse.json({ smileyFace: "Hey :)" });
}
