import React from 'react'
import Head from 'next/head'
import TopBar from '../Organism/TopBar'
import Navbar from '../Organism/Navbar'
import Footer from "../Organism/Footer"

export default function Layout({children, title, lang}) {
  return (
      <>
        <Head>
            <title>Siap Pak Pol | {title}</title>
        </Head>

        <main>
            <div className="w-full bg-gray-200 dark:bg-slate-700">
                <div className='container'>
                    <TopBar />
                </div>
                <div className="bg-main-gradient text-center py-8 px-2 lg:py-8">
                    <img src="/images/ede7a4a3-0756-4162-8414-cb6b1676a9fb.png" alt="Banner" className='block mx-auto' />
                </div>
            </div>

            <div className="bg-main-gradient">
                <div className="container py-2 relative">
                    <Navbar />

                </div>
            </div>
            <div className="container">
                {/* Banner */}
                <img src="/images/145ae4e5-c5fe-468c-9378-398493e88141.jpg" className='my-2' alt="Banner" />
            </div>

            {children}
            
        </main>

        <Footer />
      </>
  )
}
