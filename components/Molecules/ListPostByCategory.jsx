import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faEye, faShare } from "@fortawesome/free-solid-svg-icons"
import Skeleton from "react-loading-skeleton"
import reactMarkdown from 'react-markdown'
import moment from 'moment'



export default function ListPostByCategory({stuff, skeleton}) {
    let jdl = stuff ? stuff.judul.replace(/\s+/g, '-'):""

  return (
      <>
            <div className="flex gap-5 lg:card lg:card-side py-3 lg:py-0">
                <figure className=''>
                    {skeleton ? <Skeleton width={250} height={250}/> : 
                    <img src={skeleton ? <Skeleton /> : stuff._foto0} alt="Gambar berita" className='w-[150px] lg:w-[300px]' />
                    }
                </figure>
                <div className="lg:card-body w-3/4">
                    <div className="flex justify-between">
                        <small className='text-xs lg:text-xs dark:text-gray-400'><span className='text-sky-500 font-semibold'><Link href={`/berita/${skeleton ? "skeleton" : stuff.category_name_0}?page=1`}><a>{skeleton ? <Skeleton width={200} height={10} /> :stuff.category_name_0}</a></Link></span>{skeleton ? "" : " | " + moment(new Date(stuff._cd.epoch_time * 1000)).local().format("DD MMMM YYYY")}</small>
                        <div className="flex text-gray-400 gap-3 text-xs lg:text-sm">
                            {skeleton ? <Skeleton width={20}/> : <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>}
                            {skeleton ? <Skeleton width={20}/> : <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>}

                        </div>
                    </div>
                    <h1 className="text-sm lg:text-[16px] font-semibold text-gray-700 dark:text-white">{skeleton ? <Skeleton /> : stuff.judul.length > 70 ? stuff.judul.substring(0, 70)+"..." : stuff.judul}</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm">{skeleton ? <Skeleton height={50}/> : stuff.deskripsi.length > 130 ? <reactMarkdown>{stuff.deskripsi.substring(0, 130)}</reactMarkdown> : <reactMarkdown>{stuff.deskripsi}</reactMarkdown>}</p>
                    <span className="hidden lg:block">
                        {skeleton ? <Skeleton width={80} height={30}/> : 
                        <Link href={`/berita/${stuff.id}/${jdl}`}>
                            <a className="hidden lg:block relative w-44 items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-sky-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-white dark:bg-slate-800 group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-sky-500 group-hover:h-full"></span>
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                {/* <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                </span>
                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                {/* <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                <FontAwesomeIcon icon={faEye} className="text-white"></FontAwesomeIcon>
                                </span>
                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white uppercase font-main font-semibold">Baca berita</span>
                            </a>
                        </Link>
                        }
                    </span>
                    <span className="lg:hidden mt-5">
                        {skeleton ? <Skeleton width={50}/> : 
                        <Link href={`/berita/${stuff.id}/${jdl}`}>
                            <a className='text-sky-500 dark:text-white font-semibold mt-5'>Baca Berita</a>
                        </Link>
                        }
                    </span>
                </div>
            </div>

        
      </>
  )
}
