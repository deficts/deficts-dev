import React from 'react'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

export const Home = () => {
    const goToBlog = () => {
        window.location.href = "/blog";
    }

  return (
    <div className='flex flex-col h-5/6 justify-center'>
        <div className='w-fit self-center mt-2'>
            <img src="/assets/me.jpg" alt="A picture of me!" className='rounded-full max-w-xs drop-shadow-xl'/>
        </div>
        <div className='w-fit self-center mt-2'>
            <h1 className='text-5xl font-bold'>
                Hello I'm Diego!
            </h1>
            <p>
                I'm a software engineer from México 🇲🇽
            </p>
        </div>
        <div className='flex flex-row justify-center mt-3'>
            <a href="https://www.instagram.com/deficts/" className='text-2xl hover:text-gray-800' target={'_blank'}>
                <IoLogoInstagram></IoLogoInstagram>
            </a>
            <a href="https://github.com/deficts" className='text-2xl ml-2 hover:text-gray-800' target={'_blank'}>
                <IoLogoGithub></IoLogoGithub>
            </a>
            <a href="https://www.linkedin.com/in/deficts/" className='text-2xl ml-2 hover:text-gray-800' target={'_blank'}>
                <IoLogoLinkedin></IoLogoLinkedin>
            </a>
            <a href="https://twitter.com/deficts" className='text-2xl ml-2 hover:text-gray-800' target={'_blank'}>
                <IoLogoTwitter></IoLogoTwitter>
            </a>
        </div>
        <div className='w-fit self-center mt-3'>
            <button className='bg-black	px-4 py-2 font-bold hover:text-black hover:bg-white border-2 border-black text-white' onClick={goToBlog}>Blog</button>
        </div>
    </div>
  )
}
