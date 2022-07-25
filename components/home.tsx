import React from 'react'

export const Home = () => {
  return (
    <div className='flex flex-col'>
        <div className='w-fit self-center mt-2'>
            <img src="/assets/me.jpg" alt="A picture of me!" className='rounded-full max-w-xs'/>
        </div>
        <div className='w-fit self-center mt-2'>
            <h1 className='text-5xl font-bold'>
                Hello I'm Diego!
            </h1>
            <p>
                I'm a software engineer based in Guadalajara, México.
            </p>
        </div>
    </div>
  )
}
