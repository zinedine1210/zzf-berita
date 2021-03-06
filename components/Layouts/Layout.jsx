import Seo from "../../components/seo"
import TopBar from '../Organism/TopBar'
import Navbar from '../Organism/Navbar'
import Footer from "../Organism/Footer"
import SearchTop from '../Atoms/SearchTop'
import Image from 'next/image'
import ScrollTopButton from '../Atoms/ScrollTopButton'

export default function Layout({children, title, lang, description, image}) {
  return (
      <>
      <Seo 
        title={title}
        description={description}
        image={image}
      />
        <main>
            <div className="w-full bg-gray-200 dark:bg-slate-800">
                <div className='container'>
                    <TopBar bahasa={lang}/>
                </div>
                <div className="bg-main-gradient text-center py-8 px-2 lg:py-3">
                    <Image width={1140} height={157} objectFit="contain" src="/images/ede7a4a3-0756-4162-8414-cb6b1676a9fb.webp" alt="Banner" />
                </div>
            </div>

            <div className="bg-main-gradient">
                <div className="container py-2 relative">
                    <Navbar bahasa={lang}/>
                    <SearchTop bahasa={lang}/>
                    
                </div>
            </div>
            

            <div className="bg-white dark:bg-slate-800 pb-5">
                {children}
                <ScrollTopButton />
            </div>

            
        </main>

        <div className=" dark:bg-slate-700 bg-slate-800">
            <Footer bahasa={lang}/>
        </div>
      </>
  )
}
