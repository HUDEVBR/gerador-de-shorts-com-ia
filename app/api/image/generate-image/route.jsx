import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    // chamada para a API da Pixazo
    const response = await fetch(
      "https://gateway.pixazo.ai/flux-1-schnell/v1/getData",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
          "Ocp-Apim-Subscription-Key": process.env.PIXAZO_KEY,
        },
        body: JSON.stringify({
          prompt,
          num_steps: 4,
          seed: 15,
          height: 512,
          width: 512,
        }),
      }
    );

    // Pega o texto antes de tentar json()
    const raw = await response.text();

    // Se não for JSON → erro da API
    let result;
    try {
      result = JSON.parse(raw);
    } catch (err) {
      throw new Error("Pixazo returned non json: " + raw.slice(0, 80));
    }

    return NextResponse.json({ result: result.output });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
