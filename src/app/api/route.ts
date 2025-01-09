import { config } from '@/lib/utils';
import {
  GoogleGenerativeAI,
  GenerateContentResult,
  Content,
} from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import { ParsedChatHistory } from '../../types/index';
import { randomUUID } from 'crypto';

const genAI = new GoogleGenerativeAI(config.geminiKey);
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  systemInstruction:
    'Você é um assistente de desenvolvedores front-end, formado em ciência da computação e com vastos conhecimentos sobre todo tipo de linguagem utilizada para o front-end de aplicações web. Com base nos dados fornecidos pelo usuário, você pode sugerir dicas, indicar boas práticas, corrigir erros e dar dicas de soluções mais otimizadas. Responda somente em português.',
});

export async function POST(req: NextRequest) {
  try {
    const { message, chatHistory, parsedChatHistory } = await req.json();

    const newChatHistory: Content[] = [...chatHistory];

    const chat = model.startChat({ history: newChatHistory });
    const chatResponse = await chat.sendMessage(message);

    console.log('Response Text: ', chatResponse.response.text());

    const newParsedChatHistory: ParsedChatHistory[] = handleChatHistory(
      message,
      chatResponse,
      parsedChatHistory
    );
    console.log(newChatHistory, newParsedChatHistory);

    return NextResponse.json({
      chatHistory: newChatHistory,
      parsedChatHistory: newParsedChatHistory,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: 'Error Ocurred',
    });
  }
}

export async function GET() {
  return NextResponse.json({ smileyFace: 'Hey :)' });
}

function handleChatHistory(
  userPrompt: string,
  modelResponse: GenerateContentResult,
  array: ParsedChatHistory[]
) {
  const temp_array = [...array];

  temp_array.push({
    id: randomUUID().toString(),
    role: 'user',
    text: userPrompt,
  });
  temp_array.push({
    id: randomUUID().toString(),
    role: 'model',
    text: modelResponse.response.text(),
  });

  return temp_array;
}