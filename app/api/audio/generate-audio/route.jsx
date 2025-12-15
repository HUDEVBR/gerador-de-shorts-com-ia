import textToSpeech from '@google-cloud/text-to-speech';
import fs from 'fs';
import util from 'util';
import { NextResponse } from 'next/server';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/configs/FirebaseConfig';

const client = new textToSpeech.TextToSpeechClient({
    apiKey: process.env.GOOGLE_API_KEY,
});

export async function POST(req) {
    const { text, id } = await req.json();

    const storageRef = ref(storage, 'arquivos-shorts-de-ai/' + id + '.mp3');

    const request = {
        input: { text: text },
        //Seleciona a linguagem e o SSML do gênero da voz (opcional)
        voice: { languageCode: 'pt-BR', ssmlGender: 'NEUTRAL' },
        // seleciona o tipo de áudio encodado
        audioConfig: { audioEncoding: 'MP3' },
    };

    // Realiza a solicitação de texto para fala
    const [response] = await client.synthesizeSpeech(request);

    const audioBuffer = Buffer.from(response.audioContent, 'binary');
    
    await uploadBytes(storageRef, audioBuffer, { contentType: 'audio/mp3' });

    const downloadUrl = await getDownloadURL(storageRef);
    console.log(downloadUrl);

    return NextResponse.json({ Result: downloadUrl});
}