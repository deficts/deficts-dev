import React from 'react'

export const Nav = () => {
  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="flex flex-shrink-0 hover:bg-black p-1">
                <a href="/" className="font-bold text-xl md:text-4xl hover:text-white">
                    Deficts.
                </a>
            </div>
            <div className="flex flex-shrink-0 hover:bg-black">
                <a href="/blog" className='font-bold text-xl md:text-4xl hover:text-white p-1'>
                    Blog.
                </a>
            </div>
        </nav>
    </div>
  )
}
