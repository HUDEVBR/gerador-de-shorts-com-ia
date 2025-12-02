import textToSpeech from '@google-cloud/text-to-speech';
import { NextResponse } from 'next/server';

const client = new textToSpeech.TextToSpeechClient({
    apiKey: process.env.GOOGLE_API_KEY,
});

export async function POST(req) {
    const { text, id } = await req.json();


    const request = {
        input: { text: text },
        //Seleciona a linguagem e o SSML do gênero da voz (opcional)
        voice: { languageCode: 'pt-BR', ssmlGender: 'NEUTRAL' },
        // seleciona o tipo de áudio encodado
        audioConfig: { audioEncoding: 'MP3' },
    };

    // Realiza a solicitação de texto para fala
    const [response] = await client.synthesizeSpeech(request);

    
    //const outputPath = "/tmp/output.mp3";
    
    // Escreve o binário do audío em um arquivo local
    const writeFile = util.promisify(fs.writeFile);
    await writeFile('output.mp3', response.audioContent, 'binary');
    console.log('Conteúdo do aúdio salvo em : output.mp3');

    return NextResponse.json({ Result: 'Sucsess'});
}