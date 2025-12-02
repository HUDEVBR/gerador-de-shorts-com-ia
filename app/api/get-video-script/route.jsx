import { generatePrompt } from "@/configs/AiModel";
import { NextResponse } from "next/server";


export async function POST(req) {

  const { prompt } = await req.json();
  console.log(prompt);

  const result = await generatePrompt(prompt);
  let text = result.candidates[0].content.parts[0].text;

  //remove blocos de markdown do texto
  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
  
  try {
    const json = JSON.parse(text);

    return NextResponse.json({
      result: json
    });
  } catch (e) {
    console.error("API ERROR:", e);
    console.log("RAW TEXT FROM MODEL:", text);

    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
