'use client'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

function SelectTopic() {
    const options = ['Prompt customizado', 'Story Aleatório de IA', 'Fatos Históricos', 'Story Assustador', 'Story para dormir', 'Motivacional', 'Fatos Engrçados']
    const [selectedOption, setSelectedOption] = useState();
return (
    <div>
        <h2 className='font-bold text-2xl text-primary'>Conteúdo</h2>
        <p className='text-gray-500'>Qual é o assunto do seu vídeo ?</p>
        <Select onValueChange={(value) => setSelectedOption(value)}>
            <SelectTrigger className="w-full mt-2 p-6 text-lg">
                <SelectValue placeholder="Tipo de Conteúdo" />
            </SelectTrigger>
            <SelectContent>
                {options.map((item, index) => (
                    <SelectItem value={item}>{item}</SelectItem>
                ))}
                
            </SelectContent>
        </Select>

        {selectedOption == 'Prompt customizado' && 
            <Textarea className='mt-3' placeholder='Escreva o prompt que você quer gerar do seu video' />
        }
    </div>
)
}

export default SelectTopic