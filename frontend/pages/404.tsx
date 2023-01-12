import Image from 'next/image'
import { FC } from 'react'
import { BsExclamationTriangleFill } from 'react-icons/bs'
import Layout from '../components/Layout'

export const NotFoundPage: FC = () => {
  return (
    <Layout title='Page Not Found'>
      <div className='flex flex-col items-center mt-20'>
        <BsExclamationTriangleFill size={82} />

        <h1 className='text-6xl my-5'>Whoeps!</h1>
        <h2 className='text-4xl text-gray-400 mb-5'>
          Deze pagina bestaat er niet!
        </h2>
      </div>
    </Layout>
  )
}

export default NotFoundPage
