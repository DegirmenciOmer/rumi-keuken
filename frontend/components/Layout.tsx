import Head from 'next/head'
import React, { FC, PropsWithChildren, ReactNode } from 'react'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'
type TLayoutProps = {
  title?: string
  keywords?: string
  description?: string
  children: ReactNode
}

const Layout: FC<PropsWithChildren<TLayoutProps>> = ({
  title,
  keywords,
  description,
  children,
}) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Rumi's Keuken - {title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='container mx-auto my-7'>{children}</main>
      <Footer />
    </div>
  )
}
Layout.defaultProps = {
  title: "Rumi's Keuken",
  keywords:
    'meal, maaltijd, eten, heerlijk, eet smakelijk, baklava, vegatarisch, vegetarian, keuken',
  description: "Welkom bij Rumi's keuken",
}

export default Layout
