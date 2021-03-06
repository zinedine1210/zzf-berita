
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagramSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer({bahasa}) {
  return (
      <footer className="py-6 container mx-auto text-black dark:text-white">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 divide-opacity-50">
                <div className="grid lg:grid-cols-10 space-y-5 lg:space-y-0">
                    
                    <div className="col-span-6 text-center md:text-left md:col-span-2">
                        <p className="pb-1 text-lg text-white mb-3 font-semibold uppercase font-mono">{bahasa("layanan")}</p>
                        <ul>
                            {/* <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={``}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>{bahasa("sitemap")}</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={``}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>{bahasa("pedoman")}</span></Link>
                            </li> */}
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={``}><span className='hover:text-sky-500 font-thin text-gray-300 cursor-pointer'>{bahasa("kontakkami")}</span></Link>
                            </li>
                            {/* <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={``}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>{bahasa("privacy")}</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={``}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>{bahasa("term")}</span></Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-2">
                        <p className="pb-1 text-lg text-white mb-3 font-semibold uppercase font-mono">{bahasa("kategori")}</p>
                        <ul>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&category=HUKUM-KRIMINAL`}><span className='hover:text-sky-500 font-thin  text-gray-300 cursor-pointer'>{bahasa("category.0.text")}</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&category=PERISTIWA`}><span className='hover:text-sky-500 font-thin  text-gray-300 cursor-pointer'>{bahasa("category.1.text")}</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&category=PEMBINAAN-MASYARAKAT`}><span className='hover:text-sky-500 font-thin  text-gray-300 cursor-pointer'>{bahasa("category.2.text")}</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&category=SOSIAL`}><span className='hover:text-sky-500 font-thin  text-gray-300 cursor-pointer'>{bahasa("category.3.text")}</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-2">
                        <p className="pb-1 text-lg text-white mb-3 font-semibold uppercase font-mono ">Tag</p>
                        <ul>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&tag=berita`}><span className='hover:text-sky-500 font-thin  text-gray-300 cursor-pointer capitalize'>{bahasa("widgettab.submenu")}</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&tag=umum`}><span className='hover:text-sky-500 font-thin  text-gray-300 cursor-pointer capitalize'>{bahasa("widgettab.submenu2")}</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&tag=artikel`}><span className='hover:text-sky-500 font-thin  text-gray-300 cursor-pointer capitalize'>{bahasa("widgettab.submenu3")}</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&tag=Polsek-Cikarang`}><span className='hover:text-sky-500 font-thin  text-gray-300 cursor-pointer'>Polsek Cikarang</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&tag=Polsek-Tambun`}><span className='hover:text-sky-500 font-thin  text-gray-300 cursor-pointer'>Polsek Tambun</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-4">
                        <a rel="noopener noreferrer" target={"_blank"} href="https://goo.gl/maps/p6vH7htAUJ6sMV5A6" className="">
                            <Image width={660} height={111} objectFit="contain" src="/images/footer_logo.webp" alt="Logo Metro Bekasi" />
                            
                            <h1 className="self-center text-sm font-thin mt-5 text-white">Jl. Ki Hajar Dewantara No.1, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17550</h1>
                        </a>
                    </div>
                </div>
                
                <div className="grid justify-center pt-2 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span className='text-white'>??2022 POLRES METRO BEKASI, All rights reserved</span>
                        
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a rel="noopener noreferrer" target={"_blank"} href="https://web.facebook.com/aktualindonesia" title="Facebook" className="flex items-center justify-center w-10 h-10 rounded-full bg-white group text-gray-900">
                            <FontAwesomeIcon icon={faFacebook} className="text-xl group-hover:scale-110 group-hover:duration-300 group-hover:ease-in-out"/>
                        </a>
                        <a rel="noopener noreferrer" target={"_blank"} href="https://twitter.com/HumasMetroBks" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full bg-white group text-gray-900">
                            <FontAwesomeIcon icon={faTwitter} className="text-xl group-hover:scale-110 group-hover:duration-300 group-hover:ease-in-out"/>
                        </a>
                        <a rel="noopener noreferrer" target={"_blank"} href="https://www.youtube.com/channel/UCw9bCQBDq7C--dah4EBzpww" title="Youtube" className="flex items-center justify-center w-10 h-10 rounded-full bg-white group text-gray-900">
                            <FontAwesomeIcon icon={faYoutube} className="text-xl group-hover:scale-110 group-hover:duration-300 group-hover:ease-in-out" />
                        </a>
                        <a rel="noopener noreferrer" target={"_blank"} href="https://instagram.com/humaspolresmetrobekasi" title="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full bg-white group text-gray-900">
                            <FontAwesomeIcon icon={faInstagramSquare} className="text-xl group-hover:scale-110 group-hover:duration-300 group-hover:ease-in-out" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
  )
}
