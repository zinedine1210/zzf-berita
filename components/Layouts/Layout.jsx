import React from 'react'
import Seo from "../../components/seo"
import TopBar from '../Organism/TopBar'
import Navbar from '../Organism/Navbar'
import Footer from "../Organism/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



export default function Layout({children, title, lang, description}) {
  return (
      <>
      <Seo 
        title={title}
        description={description}
      />

        <main>
            <div className="w-full bg-gray-200 dark:bg-slate-800">
                <div className='container'>
                    <TopBar />
                </div>
                <div className="bg-main-gradient text-center py-8 px-2 lg:py-8">
                    <img src="/images/ede7a4a3-0756-4162-8414-cb6b1676a9fb.png" alt="Banner" className='block mx-auto' />
                </div>
            </div>

            <div className="bg-main-gradient">
                <div className="container py-2 relative">
                    <Navbar bahasa={lang}/>
                    <div className='hidden w-full' id='search'>
                        <form className='w-full flex items-center justify-between mt-2 bg-white dark:text-white'>
                            <input type="text" className='w-full py-2 focus:outline-none px-5' placeholder={lang("cari")}/>
                            <button className="bg-transparent"><FontAwesomeIcon icon={faSearch} className="px-5 text-gray-500 hover:text-black text-2xl lg:text-xl bg-transparent" /></button>
                        </form>
                    </div>
                </div>
            </div>
            

            <div className="bg-white dark:bg-slate-800 pb-24">
                {children}
            </div>
            
        </main>

        <div className="bg-main-gradient dark:bg-slate-800">
            <Footer />
        </div>
      </>
  )
}
