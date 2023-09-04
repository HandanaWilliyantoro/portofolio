import { useRouter } from 'next/router'

import Link from 'next/link'

export default function Home() {
  // Hooks
  const router = useRouter();

  return (
    <main
      className={`flex bg-[url('../public/dark-sky-bg.jpg')] bg-repeat animate-ltr-linear-infinite min-h-screen flex-col items-center justify-center p-24 max-md:px-4`}
    >
      <div className='flex flex-row items-center justify-center h-full'>
        <p onClick={() => router.push('/projects')} className={`text-gray-400 transition cursor-pointer hover:text-white font-sans mx-4 text-xs font-inter animate-appear-fade`}>Projects</p>
        <p onClick={() => router.push('/contacts')} className='text-gray-400 transition cursor-pointer hover:text-white font-sans mx-4 text-xs font-inter animate-appear-fade'>Contact</p>
      </div>
      <p className='text-6xl text-white py-10 font-poppins font-bold max-md:text-center max-md:text-5xl max-md:py-8'>Hello World</p>
      <p className='text-gray-300 text-xs w-1/2 leading-8 text-center mx-auto font-inter animate-appear-fade max-md:w-full'>
        Hi, my name is Handana Williyantoro, I'm a front end developer at <a href={'https://pintap.id'} className='cursor-pointer underline text-gray-400 transition hover:text-white'>Pintap</a>{" "}
        and i'm working on freelance software development <Link href={'/projects'} className='cursor-pointer text-gray-400 transition underline hover:text-white'>projects</Link> at night.
      </p>
    </main>
  )
}
