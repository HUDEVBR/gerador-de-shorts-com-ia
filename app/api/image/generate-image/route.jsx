import { NextResponse } from "next/server";
import axios from "axios";
import { storage } from "@/configs/FirebaseConfig";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

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

    const raw = await response.text();

    console.log("PIXAZO RAW RESPONSE >>>", raw);

    let result;
    try {
      result = JSON.parse(raw);
    } catch (err) {
      throw new Error("Pixazo returned non json: " + raw.slice(0, 80));
    }

    if (!result.output) {
      throw new Error("Pixazo didn't return output URL");
    }

    // pega imagem e transforma pra base64
    const res = await axios.get(result.output, {
      responseType: "arraybuffer",
    });

    const imageResponse = await axios.get(result.output, {
      responseType: "arraybuffer",
    });

    const imageBuffer = Buffer.from(imageResponse.data);

    // salva no Firebase
    const fileName = `arquivos-shorts-de-ai/${Date.now()}.png`;
    const storageRef = ref(storage, fileName);

    await uploadBytes(storageRef, imageBuffer, {
      contentType: "image/png",
    });

    // gera URL pública
    const downloadUrl = await getDownloadURL(storageRef);

    return NextResponse.json({ result: downloadUrl });
  } catch (error) {
    console.log("Erro ao gerar/salvar imagem:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
