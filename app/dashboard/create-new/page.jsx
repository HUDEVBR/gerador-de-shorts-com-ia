'use client'
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';

function CreateNew() {

  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue)
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  return (
    <div>
      <div className='md:px-20 '>
        <h2 className='font-bold text-4xl text-primary text-center'>Criar Novo</h2>
        <div className='mt-10 shadow-md p-10'>
          {/* Select Topic */}
          <SelectTopic onUserSelect={onHandleInputChange} />
          { /* Select Style */}
          <SelectStyle  onUserSelect={onHandleInputChange}/>
          { /* Duration */}
          <SelectDuration  onUserSelect={onHandleInputChange}/>
          {/* Create Button */}
            <Button className='mt-10 w-full'>Criar Shorts</Button>
        </div>
      </div>
    </div>
  )
}

export default CreateNew