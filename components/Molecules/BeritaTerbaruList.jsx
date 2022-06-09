import React from 'react'
import Link from 'next/link'
import Skeleton from "react-loading-skeleton"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart, faShare } from "@fortawesome/free-solid-svg-icons"

export default function BeritaTerbaruList({stuff, skeleton}) {
  return (
      <>
        <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : stuff.title}`}>
            <div className="w-full lg:my-10 group cursor-pointer flex gap-2 lg:gap-0 lg:block items-center my-5">
                <div className="w-1/2 lg:w-full lg:h-[300px] overflow-hidden relative">
                    {skeleton ? <Skeleton height={280}/> 
                    :
                    
                    <img src="https://source.unsplash.com/500x800?technology" className="w-[140px] h-[120px] lg:w-[300px] lg:h-[280px]" alt="Gambar berita" />
                    }
                    <span className='hidden lg:block absolute top-5 rounded-r-full opacity-80 bg-main-gradient text-white p-3 text-sm font-semibold'>{skeleton ? <Skeleton /> : stuff.upload }</span>
                </div>
                <div className="w-2/3 lg:w-full">
                    <h1 className='text-sm text-gray-700 font-semibold lg:mt-3 lg:text-xl dark:text-white'>{skeleton ? <Skeleton /> : stuff.title}</h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 lg:text-sm">{skeleton ? <Skeleton /> : stuff.body}</p>

                    <div className="flex lg:mt-5 mt-2 gap-3">
                        {skeleton ? <Skeleton width={30}/> :
                        <span className='flex items-center'>
                        <FontAwesomeIcon icon={faEye} className="text-orange-500 opacity-70 dark:opacity-100 mr-2"></FontAwesomeIcon>
                        <small className="text-xs text-gray-500 dark:text-gray-400">{stuff.informasi.read}</small>
                        </span>
                        }
                        {skeleton ? <Skeleton width={30}/>:
                        <span className='flex items-center'>
                        <FontAwesomeIcon icon={faHeart} className="text-orange-500 opacity-70 dark:opacity-100 mr-2"></FontAwesomeIcon>
                        <small className="text-xs text-gray-500 dark:text-gray-400">{stuff.informasi.like}</small>
                        </span>
                        }
                        {skeleton ? <Skeleton width={30}/> :
                        <span className='flex items-center'>
                        <FontAwesomeIcon icon={faShare} className="text-orange-500 opacity-70 dark:opacity-100 mr-2"></FontAwesomeIcon>
                        <small className="text-xs text-gray-500 dark:text-gray-400">{stuff.informasi.share}</small>
                        </span>
                        }
                    </div>
                </div>
            </div>
        </Link>
    
      </>
  )
}
