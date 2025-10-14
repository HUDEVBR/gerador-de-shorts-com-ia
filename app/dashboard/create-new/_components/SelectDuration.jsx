import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'

function SelectDuration({onUserSelect}) {
  return (
    <div className='mt-7'>
      <h2 className='font-bold text-2xl text-primary'>Duração</h2>
        <p className='text-gray-500'>Selecione a duração do seu vídeo</p>
        <Select onValueChange={(value) => {
            value!='Prompt customizado' && onUserSelect('duration', value)
        }}>
            <SelectTrigger className="w-full mt-2 p-6 text-lg">
                <SelectValue placeholder="Tempo de duração" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value='30 segundos'>30 segundos</SelectItem>
                <SelectItem value='01 minuto'>01 minuto</SelectItem>
                <SelectItem value='02 minutos'>02 minutos</SelectItem>
            </SelectContent>
        </Select>
    </div>
  )
}

export default SelectDuration