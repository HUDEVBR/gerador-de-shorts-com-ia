import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

function EmptyState() {
  return (
      <div className='p-5 py-25 flex items-center flex-col mt-10 border-2 border-dashed'>
          <h2>Você não tem nenhum short criado</h2>
          <Button><Plus></Plus>Crie um novo short !</Button>
    </div>
  )
}

export default EmptyState