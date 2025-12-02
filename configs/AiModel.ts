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
            text:
`
      Gere uma lista em JSON puro, SEM markdown, SEM explicações,
      no seguinte formato:

      [
        {
          "time": "0-5 seconds",
          "imagePrompt": "...",
          "contentText": "..."
        }
      ]

      Agora gere o JSON baseado no meu prompt:
      ${prompt}
    `
          }
      ],
    },
  ],
  });

  return response;
}
