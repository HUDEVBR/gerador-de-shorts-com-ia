import React from 'react'
import {
AlertDialog,
AlertDialogContent,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'

function CustomLoading({loading}) {
return (
<AlertDialog open={loading}>
        <AlertDialogContent className='bg-white'>
            <div className='bg-white flex flex-col items-center my-10 justify-center'>
                <Image src={"/loading.gif"} width={100} height={100} alt="Loading" />
                <h2 className='font-thin' styles='font-weight:900'>Gerando o seu shorts ... Não recarregue a página</h2>
            </div>
    </AlertDialogContent>
</AlertDialog>
)
}

export default CustomLoading