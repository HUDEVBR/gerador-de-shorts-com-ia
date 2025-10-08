'use client'
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';

function CreateNew() {

  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue)
  }

  return (
    <div>
      <div className='md:px-20 '>
        <h2 className='font-bold text-4xl text-primary text-center'>Criar Novo</h2>
        <div className='mt-10 shadow-md p-10'>
          {/* Select Topic */}
          <SelectTopic onUserSelect={onHandleInputChange} />
          { /* Select Style */}
          <SelectStyle  />
          { /* Duration */}

          {/* Create Button */}
        </div>
      </div>
    </div>
  )
}

export default CreateNew