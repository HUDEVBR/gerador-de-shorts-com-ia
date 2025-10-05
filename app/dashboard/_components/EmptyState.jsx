import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function EmptyState() {
  return (
      <div className='p-5 py-24 flex items-center flex-col mt-10 border-2 border-dashed'>
        <h2>Você não tem nenhum short criado</h2>
      <Link href={'/dashboard/create-new'} >
        <Button className='cursor-pointer'><Plus></Plus>Crie um novo short !</Button>
      </Link>
    </div>
  )
}

export default EmptyState