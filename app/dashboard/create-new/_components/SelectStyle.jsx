    import Image from 'next/image'
    import React, { useState } from 'react'

    function SelectStyle({onUserSelect}) {
        const styleOptions = [
            {
                name: 'Realista',
                image: '/real.jpg',
            },
            {
                name: 'Cartoons',
                image:'/cartoon.jpg',
            },
            {
                name: 'Quadrinhos',
                image:'/comic.jpg',
            },
            {
                name: 'Aquarela',
                image:'/watercolor.jpg',
            },
            {
                name: 'GTA',
                image:'/gta.jpg',
            },
        ]

        const [selectedOption, setSelectedOption] = useState();
    return (
        <div className='mt-7'>
            <h2 className='font-bold text-2xl text-primary'>Estilo</h2>
            <p className='text-gray-500'>Selecione o seu estilo de vídeo ?</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3'>
                {styleOptions.map((item) => (
                    <div key={item.name} className={`relative hover:scale-105 transition-all cursor-pointer
                    ${selectedOption == item.name && 'border-2 border-primary rounded-xl'}
                    `}>
                        <Image src={item.image} width={250} height={250} alt={item.name}
                            className='h-48 object-cover rounded-lg w-full'
                            onClick={() => {
                                setSelectedOption(item.name)
                                onUserSelect('imageStyle', item.name)
                            }}
                        />
                        <h2 className='absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
        )
    }

    export default SelectStyle