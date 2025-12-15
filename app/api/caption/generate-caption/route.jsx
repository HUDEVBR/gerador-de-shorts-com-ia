import { AssemblyAI } from "assemblyai";
import { NextResponse } from "next/server";

export async function POST(req) {
    console.log('🔥 API generate-caption CHAMADA');

    try {
        const { audioFileUrl } = await req.json();

        const client = new AssemblyAI({
            apiKey: process.env.CAPTION_API,
        });

        // const audioFile = "./local_file.mp3";
        const audioFile = audioFileUrl;

        const params = {
            audio: audioFile,
            speech_models: ["universal"],
            language_code: "pt"

        };

        const transcript = await client.transcripts.transcribe(params);
        console.log(transcript.words);
        return NextResponse.json({ 'result': transcript.words });
    }
    catch (e) {
            return NextResponse.json({'error': e})
        }
}