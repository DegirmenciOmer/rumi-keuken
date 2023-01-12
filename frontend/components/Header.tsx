import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-primary'>
      <div className='flex justify-between items-center'>
        <Link className='cursor-pointer' passHref href='/'>
          <div className='cursor-pointer text-3xl font-bold flex justify-start items-center'>
            <Image
              src='/images/posts/img1.png'
              alt='logo'
              width={40}
              height={40}
            />
            <h2 className='ml-3 text-xl'>Rumi&apos;s Keuken</h2>
          </div>
        </Link>
        <nav className='flex'>
          <Link className='cursor-pointer' passHref href='/'>
            <div className='cursor-pointer '>
              <h2 className='ml-3 text-xl'>Nagerechten</h2>
            </div>
          </Link>
          <Link className='cursor-pointer' passHref href='/'>
            <div className='cursor-pointer '>
              <h2 className='ml-3 text-xl'>Hoofdgerechten</h2>
            </div>
          </Link>
          <Link className='cursor-pointer' passHref href='/'>
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
