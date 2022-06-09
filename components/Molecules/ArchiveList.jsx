import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEye, faHeart, faShare
} from "@fortawesome/free-solid-svg-icons"
import Skeleton from 'react-loading-skeleton'


export default function ArchiveList({stuff, skeleton}) {
  return (
        <div className="w-full mb-10">
            <div className="w-full h-56 overflow-hidden relative">
                {skeleton ? <Skeleton height={224} width={300}/> :
                    <img src="https://source.unsplash.com/500x800?technology" className="w-full" alt="Gambar berita" />
                }
            <span className='absolute top-5 rounded-r-full opacity-80 bg-main-gradient text-white p-3 text-sm font-semibold'>{skeleton ? <Skeleton height={10}/> :stuff.upload}</span>
            </div>
            <h1 className='text-sm text-gray-700 font-semibold mt-3 lg:text-xl dark:text-white'>{skeleton ? <Skeleton height={20}/> :stuff.title}</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 lg:text-sm">{skeleton ? <Skeleton height={10} count={4}/> :stuff.body}</p>

            <div className="flex mt-5 gap-3">
                {skeleton ? <Skeleton width={50} height={10}/> :
                    <span className='flex items-center'>
                        <FontAwesomeIcon icon={faEye} className="text-orange-500 opacity-70 dark:opacity-100 mr-2"></FontAwesomeIcon>
                        <small className="text-xs text-gray-500 dark:text-gray-400">{stuff.informasi.read}</small>
                    </span>
                }
                {skeleton ? <Skeleton width={50} height={10}/> :
                    <span className='flex items-center'>
                        <FontAwesomeIcon icon={faHeart} className="text-orange-500 opacity-70 dark:opacity-100 mr-2"></FontAwesomeIcon>
                        <small className="text-xs text-gray-500 dark:text-gray-400">{stuff.informasi.like}</small>
                    </span>
                }
                {skeleton ? <Skeleton width={50} height={10}/> :
                    <span className='flex items-center'>
                        <FontAwesomeIcon icon={faShare} className="text-orange-500 opacity-70 dark:opacity-100 mr-2"></FontAwesomeIcon>
                        <small className="text-xs text-gray-500 dark:text-gray-400">{stuff.informasi.share}</small>
                    </span>
                }
            </div>
        </div>
  )
}
