import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-primary text-secondary shadow w-full'>
      <div className='flex justify-between items-center  flex-wrap p-5 flex-col md:flex-row'>
        <Link className='cursor-pointer' passHref href='/'>
          <div className='cursor-pointer text-3xl font-medium flex items-center md:w-1/5 md:justify-start mb-4 md:mb-0'>
            <Image
              src='/images/posts/img1.png'
              alt='logo'
              width={40}
              height={40}
            />
            <h2 className='ml-3 text-xl'>Rumi&apos;s Keuken</h2>
          </div>
        </Link>
        <nav className='flex flex-wrap items-center text-base '>
          <Link className='cursor-pointer' passHref href='/blog/nagerechten'>
            <div className='cursor-pointer '>
              <h2 className='ml-3 text-xl'>Nagerechten</h2>
            </div>
          </Link>
          <Link className='cursor-pointer' passHref href='/blog/gebakjes'>
            <div className='cursor-pointer '>
              <h2 className='ml-3 text-xl'>Gebakjes</h2>
            </div>
          </Link>
          <Link className='cursor-pointer' passHref href='/about'>
            <div className='cursor-pointer '>
              <h2 className='ml-3 text-xl'>Over Ons</h2>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
