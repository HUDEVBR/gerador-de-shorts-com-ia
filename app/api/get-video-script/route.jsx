import { generatePrompt } from "@/configs/AiModel";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const { prompt } = await req.json();
    console.log(prompt);

    const result = await generatePrompt(prompt);
    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

    return NextResponse.json({
      result: JSON.parse(
        result.candidates[0].content.parts[0].text
      )
    });
  } catch (e) {
    console.error("API ERROR:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
