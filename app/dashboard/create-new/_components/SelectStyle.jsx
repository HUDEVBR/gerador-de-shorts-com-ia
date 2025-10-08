    import Image from 'next/image'
    import React from 'react'

    function SelectStyle() {
        const styleOptions = [
            {
                name: 'Realista',
                image: '/real.jpg',
            },
            {
                name: 'Cartoon',
                image:'/cartoon.jpg',
            },
            {
                name: 'Comic',
                image:'/comic.jpg',
            },
            {
                name: 'Watercolor',
                image:'/watercolor.jpg',
            },
            {
                name: 'GTA',
                image:'/gta.jpg',
            },
        ]
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-2xl text-primary'>Estilo</h2>
            <p className='text-gray-500'>Selecione o seu estilo de vídeo ?</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
                {styleOptions.map((item) => (
                    <div key={item.name} >
                        <Image src={item.image} width={250} height={250} alt={item.name}
                        className='h-48 object-cover rounded-lg w-full '/>
                    </div>
                ))}
            </div>
        </div>
        )
    }

    export default SelectStyle