import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 '>
      <div>
        <Image src={'/login.webp'}
          alt='login' width={1000} height={1000}
          className='w-full object-cover flex justify-center items-center h-screen'
        />
      </div>
      <div className='flex justify-center items-center h-screen'>
        <SignIn />
      </div>
    </div>
  )
}