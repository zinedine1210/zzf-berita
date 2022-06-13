import React from 'react'

import { faEye, faHeart, faShare } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Skeleton from 'react-loading-skeleton'


export default function SkyScraperList({stuff, skeleton}) {
  return (
      <div className="hero">
            <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : stuff.judul}`}>
            <div className="hero-content flex-row border-t-2 border-orange-200 border-b-2 dark:border-white">
                <div className="img w-1/2">{
                    skeleton ? <Skeleton height={130} width={130}/> : 
                    <img src={stuff._foto0} alt="Gambar berita" />
                }
                </div>
                <div className='w-1/2 group cursor-pointer'>
                    <h1 className="font-semibold text-xs group-hover:underline dark:text-white">{skeleton ? <Skeleton count={3} height={20}/> :stuff.judul.length > 70 ? <ReactMarkdown >{stuff.judul.substring(0, 70) + "..."}</ReactMarkdown> : <ReactMarkdown>{stuff.judul}</ReactMarkdown>}</h1>
                    <div className="flex mt-5 gap-3">
                        {skeleton ? <Skeleton width={25}/> :
                        <span className='flex items-center'>
                            <FontAwesomeIcon icon={faEye} className="text-sky-500 opacity-70 dark:opacity-100 mr-1"></FontAwesomeIcon>
                            <small className="text-xs text-gray-500 dark:text-gray-400">{stuff.view}</small>
                        </span>
                        }
                    </div>
                </div>
            </div>
            </Link>
        </div>
  )
}
