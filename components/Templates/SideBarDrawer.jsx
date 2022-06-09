import React, {useState} from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'


export default function SideBarDrawer({children, bahasa}) {
    const Router = useRouter()
    const {theme, setTheme} = useTheme()
    const defaultLocale = Router.locale
    const [language, setLanguage] = useState(defaultLocale)

    const settingsLanguage = () => {
        if(language === "ind"){
            Router.push("/", "/", {locale : "eng"})
            setLanguage("eng")
        }else{
            Router.push("/", "/", {locale : "ind"})
            setLanguage("ind")
        }
    }
    

  return (
    <div className="drawer bg-white ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col bg-gray-100 dark:bg-slate-900">
            {children}
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
            
            <div className="menu flex flex-col h-full p-3 w-60 bg-white dark:bg-slate-900 dark:text-white text-gray-600">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className='font-bold text-orange-500 dark:text-white'>ZZF News</h2>
                        
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button type="submit" className="p-2 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 text-gray-400">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm border-transparent rounded-md focus:outline-none bg-white text-gray-600 focus:bg-white" />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link href={"/"}>
                                    <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                            
                                        <span>Home</span>
                                    </a>
                                </Link>
                            </li>

                            {bahasa("menus", {returnObjects: true}).map((item, id) => {
                                return (
                                    <li className="rounded-sm" key={id}>
                                        <Link href={`/kategori/${item.text.toLowerCase()}?id=${item.id}`}>
                                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                            
                                                <span>{item.text}</span>
                                            </a>
                                        </Link>
                                    </li> 
                                )
                            })}

                            <hr className="border-orange-500 dark:border-white " />

                            <li className="rounded-sm">
                                <label htmlFor="darkmode" className='flex justify-between hover:bg-transparent'>Dark Mode
                                <input type="checkbox" class="toggle toggle-md" id='darkmode' onClick={() => setTheme(theme === "light" ? "dark" : "light")}/>
                                </label>
                            </li>

                            <li className="rounded-sm">
                                <select class="select select-ghost w-full max-w-xs hover:bg-transparent hover:dark:text-white" onChange={() => settingsLanguage()}>
                                    <option className='text-orange-500 dark:text-slate-800' disabled selected>{language == "ind" ? "Bahasa Indonesia" : "Bahasa Inggris"}</option>
                                    {language == "ind" ?
                                    <option className='text-orange-500 dark:text-slate-800'>Bahasa Inggris</option>
                                :
                                <option className='text-orange-500 dark:text-slate-800'>Bahasa Indonesia</option>
                                }
                                </select>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
                <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-lg bg-white" />
                    <div>
                        <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                        <span className="flex items-center space-x-1">
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">View profile</a>
                        </span>
                    </div>
                </div>

                <ul className='pt-2 pb-4 space-y-1 text-sm'>
                    <li className="rounded-sm">
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-400">
                                <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                                <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                            </svg>
                            <span>Settings</span>
                        </a>
                    </li>
                    <li className="rounded-sm">
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-400">
                                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                <rect width="32" height="64" x="256" y="232"></rect>
                            </svg>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}
