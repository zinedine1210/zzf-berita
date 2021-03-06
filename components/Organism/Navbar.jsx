import {useState} from 'react'
import {useTheme} from "next-themes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown, faList, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Navbar({bahasa}) {
    const router = useRouter()
    const defaultLocale = router.locale
    const {theme, setTheme} = useTheme()
    const [language, setLanguage] = useState(defaultLocale)
    const [active, setActive] = useState(null)



    const settingsLanguage = () => {
        if(language === "id"){
            router.push("/", "/", {locale : "en"})
            setLanguage("en")
        }else{
            router.push("/", "/", {locale : "id"})
            setLanguage("id")
        }
    }

    const handlerNavbar = (item, event) => {
        if(item.submenu && item.id === active){
            event.preventDefault()
            setActive(null)
        }else if(item.submenu){
            event.preventDefault()
            setActive(item.id)
        }else{
            setActive(item.id)
        }
    }
    


  return (
      <div className="w-full">
        <div className="flex items-center justify-between text-white font-bold mx-2 lg:mx-0">
            <button className='lg:hidden' onClick={() => document.getElementById("navbar").classList.toggle("hidden")} aria-label="Navbar"><FontAwesomeIcon icon={faBars}/></button>
            
            <div className='lg:flex lg:relative lg:items-center lg:w-full hidden lg:bg-transparent lg:h-0 bg-white w-3/4 fixed lg:overflow-visible overflow-y-scroll h-screen z-50 right-0 top-0 px-5 py-2 space-y-5 lg:space-y-0 lg:px-0 lg:py-2' id='navbar'>
                <div className="flex lg:hidden justify-between">
                    <h1 className='text-black uppercase font-mono text-2xl'>Metro Bekasi</h1>
                    <button onClick={() => document.getElementById("navbar").classList.toggle("hidden")} className='text-right lg:hidden' aria-label='navbar'><FontAwesomeIcon icon={faXmark} className="text-black"/></button>
                </div>
                <hr />
                {/* <Link href={"/kategori?category=SOSIAL&tag=berita"}><a className='text-sm lg:text-xs lg:font-semibold text-gray-600 font-thin block hover:bg-red-700 hover:underline hover:duration-300 hover:ease-in-out uppercase cursor-pointer lg:text-white '>Coba</a></Link> */}
                
                <Link href={"/"}><h1 className='text-sm lg:text-xs mr-3 lg:font-semibold text-black font-light block hover:underline hover:duration-300 hover:ease-in-out uppercase cursor-pointer lg:text-white '>{bahasa("beranda")}</h1></Link>
                {bahasa("menus", {returnObjects:true}).map((item) => {
                    return (
                        <Link href={`${item.link}`} key={item.id}>
                            <h1 onClick={(e) => item.submenu ? handlerNavbar(item, e):""} className='group cursor-pointer mr-3 text-sm lg:text-xs uppercase lg:text-white text-black font-light lg:font-semibold hover:lg:underline'>
                                {item.text} {item.submenu ? <FontAwesomeIcon icon={faCaretDown} className="text-xs" /> : ""}
                                {item.submenu ? 
                                 <>
                                    <div className='hidden lg:inline-block'>
                                        
                                        <div className="invisible group-hover:lg:visible absolute left-0 w-full mt-10 flex gap-2 bg-white text-black py-5 px-2 shadow-lg group-hover:duration-500 rounded-lg group-hover:ease-in-out transition transform group-hover:-translate-y-10 motion-reduce:transition-none motion-reduce:hover:transform-none z-50">
                                            <div className=' hidden lg:block'>
                                                <Image width={239} height={300} objectFit="contain" src="/images/presisi-logo-239x300.webp" alt="Gambar presisi" />
                                            </div>
                                            <div className="lg:grid grid-rows-6 grid-flow-col gap-2 hidden">
                                                {item.submenu.map((sub) => {
                                                    return (
                                                        <Link href={`${sub.link}`} key={sub.id}>
                                                            <span className='cursor-pointer border-l-8 hover:border-red-800 w-56 text-xs hover:duration-500 hover:ease-in-out flex pl-5 font-semibold items-center'>{sub.text}</span>
                                                        </Link>
                                                    )
                                                })}
                                                
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div className={`${item.id === active ? "block":"hidden"} lg:hidden my-2 bg-gray-100`}>
                                        
                                        {item.submenu.map((sub) => {
                                            return (
                                                <Link href={`${sub.link}`} key={sub.id}>
                                                    <a className='text-sm font-light block py-3 pl-3 text-black'>{sub.text}</a>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                 </>
                                :""
                            }
                            </h1>
                        </Link>
                    )
                })}
            
                
            </div>
            <div className="w-28 text-right flex justify-around items-center">
                <button onClick={() => document.getElementById("search").classList.toggle("hidden")} aria-label="Search"><FontAwesomeIcon icon={faSearch} className="text-sm"/><h1 className='hidden'>search</h1></button>
                <span className='h-8 invisible lg:visible bg-white w-0.5'></span>
                <form className='flex items-center justify-center'>
                    <label className="swap" htmlFor='lang'>
                        <input type="checkbox" onClick={() => settingsLanguage()} id="lang"/>
                        <div className={`${language == "id" ? "swap-on" : "swap-off"} dark:text-white font-bold font-main text-sm`}>ENG</div>
                        <div className={`${language == "en" ? "swap-on" : "swap-off"} dark:text-white font-bold font-main text-sm`}>IND</div>
                    </label>
                </form>
                <form className='flex items-center justify-center'>
                    <label className="swap swap-rotate" htmlFor="iniganti">
                        <input type="checkbox" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="hidden" id="iniganti"/>
                        <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                        
                        <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                    </label>
                </form>
            </div>
        </div>
      </div>
  )
}
