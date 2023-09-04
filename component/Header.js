import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useRouter } from 'next/router'

const Header = () => {

    const router = useRouter()

    return (
        <div className='flex flex-row py-4 px-6 items-center justify-between bg-black fixed top-0 w-full border-b-white'>
            <AiOutlineArrowLeft className='text-gray-400 transition hover:text-white cursor-pointer' size={25} onClick={() => router.push('/')} />
            <div className='flex flex-row items-center'>
                <p onClick={() => router.push('/projects')} className='text-gray-400 hover:text-white font-poppins ml-8 transition cursor-pointer'>Projects</p>
                <p onClick={() => router.push('/contacts')} className='text-gray-400 hover:text-white font-poppins ml-8 transition cursor-pointer'>Contact</p>
            </div>
        </div>
    )
}

export default Header