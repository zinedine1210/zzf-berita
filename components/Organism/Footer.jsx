import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
      <footer className="py-6 container mx-auto text-black dark:text-white">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid lg:grid-cols-10 space-y-5">
                    
                    <div className="col-span-6 text-center md:text-left md:col-span-2">
                        <p className="pb-1 text-lg text-white mb-3 font-semibold uppercase font-mono">Service</p>
                        <ul>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={``}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>Sitemap</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={``}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>Pedoman Media Siber</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={``}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>Kontak Kami</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={``}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>Privacy Policy</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={``}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>Term and Condition</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-2">
                        <p className="pb-1 text-lg text-white mb-3 font-semibold uppercase font-mono">Category</p>
                        <ul>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&category=HUKUM-KRIMINAL`}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>Hukum dan Kriminal</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&category=PERISTIWA`}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>Peristiwa</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&category=PEMBINAAN-MASYARAKAT`}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>Pembinaan Masyarakat</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&category=SOSIAL`}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>Sosial</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-2">
                        <p className="pb-1 text-lg text-white mb-3 font-semibold uppercase font-mono ">Tag</p>
                        <ul>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&tag=berita`}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>Berita</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&tag=umum`}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>Umum</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&tag=artikel`}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>Artikel</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&tag=Polsek-Cikarang`}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>Polsek Cikarang</span></Link>
                            </li>
                            <li className='my-1 text-gray-400 dark:text-white'>
                                <Link href={`/kategori?page=1&tag=Polsek-Tambun`}><span className='hover:text-sky-500 font-thin font-mono text-gray-300 cursor-pointer'>Polsek Tambun</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-4">
                        <a rel="noopener noreferrer" href="#" className="">
                            <img src="/images/footer_logo.webp" alt="Logo Metro Bekasi" />
                            
                            <h1 className="self-center text-sm font-mono font-thin mt-5 text-white">Jl. Ki Hajar Dewantara No.1, Simpangan, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17550</h1>
                        </a>
                    </div>
                </div>
                
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span className='text-white'>©2022 POLRES METRO BEKASI, All rights reserved</span>
                        
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center justify-center w-10 h-10 rounded-full bg-white group text-gray-900">
                            <FontAwesomeIcon icon={faFacebook} className="text-xl group-hover:scale-110 group-hover:duration-300 group-hover:ease-in-out"/>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full bg-white group text-gray-900">
                            <FontAwesomeIcon icon={faTwitter} className="text-xl group-hover:scale-110 group-hover:duration-300 group-hover:ease-in-out"/>
                        </a>
                        <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full bg-white group text-gray-900">
                            <FontAwesomeIcon icon={faGithub} className="text-xl group-hover:scale-110 group-hover:duration-300 group-hover:ease-in-out" />
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full bg-white group text-gray-900">
                            <FontAwesomeIcon icon={faInstagramSquare} className="text-xl group-hover:scale-110 group-hover:duration-300 group-hover:ease-in-out" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
  )
}
