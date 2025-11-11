import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateTemplate(prompt: string): Promise<string> {
  // Notion formatta şablon üretilmesi için OpenAI ile istek.
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });
  return completion.choices[0]?.message?.content ?? "";
}
