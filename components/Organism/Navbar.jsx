import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown, faList, faSearch } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'

export default function Navbar() {
  return (
      <div className="w-full">
        <div className="flex items-center justify-between text-white font-bold mx-2 lg:mx-0">
            <button className='lg:hidden'><FontAwesomeIcon icon={faBars}/></button>
            <ul className='lg:flex items-center hidden space-x-3'>
                <Link href={`/`}><li className='uppercase text-xs cursor-pointer'>Beranda</li></Link>
                <Link href={`/berita/${"HUKUM-KRIMINAL?page=1"}`}><li className='uppercase text-xs cursor-pointer'>Hukum Kriminal</li></Link>
                <Link href={`/berita/${"SOSIAL"}?page=1`}><li className='uppercase text-xs cursor-pointer'>Sosial</li></Link>
                <Link href={`/berita/${"PERISTIWA"}?page=1`}><li className='uppercase text-xs cursor-pointer'>Peristiwa</li></Link>
                <Link href={`/berita/${"PEMBINAAN-MASYARAKAT"}?page=1`}><li className='uppercase text-xs cursor-pointer'>Pembinaan Masyarakat</li></Link>
                <li className='group cursor-pointer text-xs uppercase'>
                    Satker <FontAwesomeIcon icon={faCaretDown} className="text-xs" />
                    <div className="invisible group-hover:visible absolute left-0 w-full mt-10 flex gap-2 bg-white text-black py-5 px-2 shadow-lg group-hover:duration-500 rounded-lg group-hover:ease-in-out transition transform group-hover:-translate-y-10 motion-reduce:transition-none motion-reduce:hover:transform-none z-">
                        <div className=' hidden lg:block'>
                            <img src="images/presisi-logo-239x300.png" alt="Gambar presisi" />
                        </div>
                        <div className="lg:grid grid-rows-6 grid-flow-col gap-2 hidden">
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                        </div>
                    </div>
                </li>
                <li className='group cursor-pointer text-xs uppercase'>
                    Polsek jajaran <FontAwesomeIcon icon={faCaretDown} className="text-xs" />
                    <div className="invisible group-hover:visible absolute left-0 w-full mt-10 flex justify-between gap-2 bg-white text-black py-5 px-5 shadow-lg group-hover:duration-500 rounded-lg group-hover:ease-in-out transition transform group-hover:-translate-y-10 motion-reduce:transition-none motion-reduce:hover:transform-none z-">
                        
                        <div className="lg:grid grid-rows-6 grid-flow-col gap-2 hidden">
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                        </div>
                        <div className=' hidden lg:block'>
                            <img src="images/polwan-POLDA-jatim.png" alt="Gambar presisi" className='w-96' />
                        </div>
                    </div>
                </li>
                <Link href={`/video`}><li className='uppercase text-xs cursor-pointer'>Video</li></Link>
                <a href="https://play.google.com/store/apps/details?id=id.go.polri.bekasikabupaten.cikarang_presisi.cikarang_presisi"><li className='uppercase text-xs cursor-pointer'>Aplikasi</li></a>
                <li className='group cursor-pointer text-xs uppercase'>
                    Layanan <FontAwesomeIcon icon={faCaretDown} className="text-xs" />
                    <div className="invisible group-hover:visible absolute left-0 w-full mt-10 flex gap-2 bg-white text-black py-5 px-2 shadow-lg group-hover:duration-500 rounded-lg group-hover:ease-in-out transition transform group-hover:-translate-y-10 motion-reduce:transition-none motion-reduce:hover:transform-none z-">
                        <img src="images/presisi-logo-239x300.png" alt="Gambar presisi" />
                        <div className="grid grid-rows-6 grid-flow-col gap-1">
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                            <Link href={"/"}>
                                <a className='border-l-8 hover:border-red-800 w-48 text-xs font-normal hover:duration-500 hover:ease-in-out flex justify-center items-center'>Polsek bekasi</a>
                            </Link>
                        </div>
                    </div>
                </li>
                <Link href={`/kontak`}><li className='uppercase text-xs cursor-pointer'>kontak</li></Link>

                
            </ul>
            <div className="w-20 text-right flex justify-around items-center">
                <button><FontAwesomeIcon icon={faSearch} className="text-sm"/></button>
                <span className='h-8 bg-white w-0.5'></span>
                <label class="swap swap-rotate">
                    <input type="checkbox" />
                    <svg class="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    
                    <svg class="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                </label>
            </div>
        </div>
      </div>
  )
}
