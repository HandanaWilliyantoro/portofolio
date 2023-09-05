import React, { useCallback } from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useRouter } from 'next/router'

const Header = () => {

    const router = useRouter()

    const onClickContact = useCallback(() => {
        window.open('https://api.whatsapp.com/send?phone=6285692244063', '_blank')
    }, [])

    return (
        <div className='flex flex-row py-4 px-6 items-center justify-between fixed top-0 w-full backdrop-blur-md border-b-white z-10'>
            <AiOutlineArrowLeft className='text-gray-400 transition hover:text-white cursor-pointer' size={25} onClick={() => router.push('/')} />
            <div className='flex flex-row items-center'>
                <p onClick={() => router.push('/projects')} className='text-gray-400 hover:text-white font-poppins ml-8 transition cursor-pointer'>Projects</p>
                <p onClick={onClickContact} className='text-gray-400 hover:text-white font-poppins ml-8 transition cursor-pointer'>Contact</p>
            </div>
        </div>
    )
}

export default Header