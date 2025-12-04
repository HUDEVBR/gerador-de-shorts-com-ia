'use client'
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomLoading from './_components/CustomLoading';
import { v4 as uuidv4 } from 'uuid';

const scriptData = 'Era uma vez, em uma pequena vila cercada por montanhas majestosas, vivia uma jovem chamada Luna. Ela era conhecida por sua curiosidade insaciável e seu espírito aventureiro. Todos os dias, Luna explorava as florestas ao redor da vila, sonhando com as maravilhas que o mundo além das montanhas poderia oferecer. Um dia, enquanto caminhava por uma trilha desconhecida, Luna encontrou um mapa antigo escondido sob uma pedra. O mapa mostrava o caminho para um tesouro perdido, escondido em uma caverna secreta nas profundezas das montanhas. Determinada a encontrar o tesouro, Luna embarcou em uma jornada cheia de desafios e descobertas. Ao longo do caminho, ela fez novos amigos, enfrentou perigos inesperados e aprendeu lições valiosas sobre coragem e amizade. Finalmente, após muitos dias de viagem, Luna chegou à caverna e encontrou o tesouro - não ouro ou joias, mas um livro mágico cheio de histórias incríveis de lugares distantes. Com o coração cheio de alegria, Luna retornou à sua vila, pronta para compartilhar suas aventuras e inspirar outros a seguir seus próprios sonhos.'

function CreateNew() {

  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState();

  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue)

    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  const onCreateClickHandler = () => {
    //GetVideoScript();
    GenerateAudioFile(scriptData);
  }

  // Pega o script do vídeo gerado pela IA
  const GetVideoScript = async () => {
    setLoading(true)
    const prompt = 'Escreva um script que gere ' + formData.duration + ' um vídeo do tópico : ' + formData.topic + ' junto com o prompt de imagem de IA no estilo ' + formData.imageStyle + ' para cada cena e me dê o resultado em JSON com o imagePrompt and ContentText as field, sem textos simples'
    console.log(prompt)
    const result = await axios.post('/api/get-video-script', {
      prompt: prompt
    }).then(resp => {
      setVideoScript(resp.data.result);
      GenerateAudioFile(resp.data.result);
    });
    setLoading(false);
  }

  const GenerateAudioFile = async (videoScriptData) => {
    //setLoading(true);
    let script = ' ';
    const id = uuidv4();
 /*    videoScriptData.forEach(item => {
      script = script+item.contentText + ' ';
    }) */
    console.log(script);

    await axios.post('/api/audio/generate-audio', {
      text: videoScriptData,
      id: id
    }).then(resp => {
      console.log(resp.data);
    })
    //setLoading(false);
  }

  return (
      <div className='md:px-20 '>
        <h2 className='font-bold text-4xl text-primary text-center'>Crie seu novo shorts !</h2>
        <div className='mt-10 shadow-md p-10'>
          {/* Select Topic */}
          <SelectTopic onUserSelect={onHandleInputChange} />
          { /* Select Style */}
          <SelectStyle  onUserSelect={onHandleInputChange}/>
          { /* Duration */}
          <SelectDuration  onUserSelect={onHandleInputChange}/>
          {/* Create Button */}
            <Button className='mt-10 w-full' onClick={onCreateClickHandler}>Criar Shorts</Button>
        </div>
        <CustomLoading loading={loading} />
      </div>
  )
}

export default CreateNew