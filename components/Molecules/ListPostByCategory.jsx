import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faEye, faShare } from "@fortawesome/free-solid-svg-icons"
import Skeleton from "react-loading-skeleton"
import moment from 'moment'
import Image from 'next/image'



export default function ListPostByCategory({stuff, skeleton}) {
    let jdl = stuff ? stuff.judul.replace(/\s+/g, '-'):""

    const gambar = () => {
      if(stuff._video0 && stuff._video0 !== ""){
        let splitData = stuff._video0.split("/")
        let imgYtb = splitData[4]
        return `https://img.youtube.com/vi/${imgYtb}/0.jpg`
        
      }else if(stuff._foto0){
        return stuff._foto0
      }else{
        return "/images/default.webp"
      }
    }

  return (
      <>
            <div className="flex gap-5 lg:card lg:card-side py-3 lg:py-0">
                <figure className=''>
                    {skeleton ? <Skeleton width={250} height={250}/> : 
                    <div className='w-[150px] lg:w-[300px] flex items-center'>
                        <Image width={767} height={512} src={skeleton ? <Skeleton /> : gambar()} alt="Gambar berita" objectFit='contain' />
                    </div>
                    }
                </figure>
                <div className="lg:card-body w-3/4">
                    <div className="flex justify-between items-center">
                        <small className='text-xs lg:text-xs dark:text-gray-400'><span className='text-sky-500 font-semibold'><Link href={`/kategori?page=1&category=${skeleton ? "skeleton" : stuff.category_name_0}`}><a>{skeleton ? <Skeleton width={200} height={10} /> :stuff.category_name_0}</a></Link></span>{skeleton ? "" : " | " + moment(new Date(stuff._cd.epoch_time * 1000)).local().format("DD MMMM YYYY")}</small>
                        <div className="flex text-gray-400 gap-1 text-xs lg:text-sm items-center">
                            {skeleton ? <Skeleton width={20}/> : <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>}
                            {skeleton ? "" : <h3 className='text-sm font-semibold'>{stuff.view}</h3>}

                        </div>
                    </div>
                    <h1 className="text-sm lg:text-[16px] font-semibold text-gray-700 dark:text-white">{skeleton ? <Skeleton /> : stuff.judul.length > 70 ? stuff.judul.substring(0, 70)+"..." : stuff.judul}</h1>
                    <section className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm">{skeleton ? <Skeleton height={50}/> : stuff.deskripsi.length > 130 ? <reactMarkdown>{stuff.deskripsi.substring(0, 130)}</reactMarkdown> : <reactMarkdown>{stuff.deskripsi}</reactMarkdown>}</section>
                    <span className="hidden lg:block">
                        {skeleton ? <Skeleton width={80} height={30}/> : 
                        <Link href={`/berita/${stuff.id}/${jdl}`}>
                            <span className="cursor-pointer hidden lg:block relative w-44 items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-sky-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-white dark:bg-slate-800 group">
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
                            </span>
                        </Link>
                        }
                    </span>
                    <span className="lg:hidden mt-5">
                        {skeleton ? <Skeleton width={50}/> : 
                        <Link href={`/berita/${stuff.id}/${jdl}`}>
                            <span className='cursor-pointer text-sky-500 dark:text-white font-semibold mt-5'>Baca Berita</span>
                        </Link>
                        }
                    </span>
                </div>
            </div>

        
      </>
  )
}
