import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

export async function generatePrompt(prompt: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image",
    contents: [
    {
        role: 'user',
        parts: [
          {
            text:`Sua tarefa: gerar cenas em JSON puro.

Regras obrigatórias:

- Responda SOMENTE com um JSON válido.
- Não inclua explicações.
- Não inclua texto fora do JSON.
- Não inclua markdown.
- O JSON deve ser um array de objetos assim:
  [
    {
      "time": "0-5 seconds",
      "imagePrompt": "...",
      "contentText": "..."
    }
  ]

Agora gere o JSON baseado nisso:

${prompt}`
          }
      ],
    },
  ],
  });

  return response;
}
