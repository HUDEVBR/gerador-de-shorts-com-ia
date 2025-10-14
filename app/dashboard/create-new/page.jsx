'use client'
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';

function CreateNew() {

  const [formData, setFormData] = useState([]);

  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue)

    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  const onCreateClickHandler = () => {
    GetVideoScript();
  }

  // Pega o script do vídeo gerado pela IA
  const GetVideoScript = async() => {
    const prompt = 'Escreva um script que gere ' + formData.duration + ' um vídeo do tópico : ' + formData.topic + ' junto com o prompt de imagem de IA no estilo ' + formData.imageStyle + ' para cada cena e me dê o resultado em JSON com o imagePrompt and ContentText as field, sem textos simples'
    console.log(prompt)
    const result = await axios.post('/api/get-video-script', {
      prompt:prompt
    }).then(res => {
      console.log(res.data)
    })
  }

  return (
    <div>
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
      </div>
    </div>
  )
}

export default CreateNew