'use client'
import { Button } from '@/components/ui/button.jsx'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState';
import Link from 'next/link';

function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div>
      <div className='flex justify-between items-center'  >
        <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
        <Link href={'./create-new'}>
        <Button><Plus></Plus>Criar Novo</Button>
        </Link>
      </div>

      {/* Empty State */}
      {videoList?.length == 0 && <div>
        <EmptyState />
        </div>}


    </div>
  )
}

export default Dashboard