// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
GoogleGenAI,
} from '@google/genai';
import mime from 'mime';
import { writeFile } from 'fs';

function saveBinaryFile(fileName: string, content: Buffer) {
    writeFile(fileName, content, 'utf8', (err) => {
    if (err) {
        console.error(`Error writing file ${fileName}:`, err);
        return;
    }
    console.log(`File ${fileName} saved to file system.`);
    });
    }

export async function generativeVideoPrompt(prompt: string) {
        console.log('Prompt recebido na função:', prompt)
    const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
    });
    const config = {
    responseModalities: [
        'IMAGE',
        'TEXT',
        ],
        responseMimeTypes: [
        'application/json',
    ]
    };
    const model = 'gemini-2.5-flash-image';

    const contents = [
        {
            role: 'user',
                parts: [
                    { text: `Escreva um prompt para gerar um short de vídeo de 30 segundos - 2 minutos de acordo com os estilos escolhidos acima`},
            ],
        },
        {
            role: 'model',
            parts: [
                {
                    text: ' ```json\n[\n {\n    \"imagePrompt\": \"A vibrant and colorful digital art piece featuring a futuristic cityscape with flying cars and neon lights, in the style of cyberpunk and synthwave, high detail, 4k resolution\",\n }\n]\n```',
                }
            ]
        }
    ];

    const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
    });

    let fileIndex = 0;
    for await (const chunk of response) {
        if (!chunk.candidates || !chunk.candidates[0].content || !chunk.candidates[0].content.parts) {
        continue;
    }
        if (chunk.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
        const fileName = `ENTER_FILE_NAME_${fileIndex++}`;
        const inlineData = chunk.candidates[0].content.parts[0].inlineData;
        const fileExtension = mime.getExtension(inlineData.mimeType || '');
        const buffer = Buffer.from(inlineData.data || '', 'base64');
        saveBinaryFile(`${fileName}.${fileExtension}`, buffer);
    }
        else {
            console.log(chunk.text);
        }
    }
}