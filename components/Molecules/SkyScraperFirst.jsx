import React from 'react'
import { faEye, faHeart, faShare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Skeleton from "react-loading-skeleton"
import ReactMarkdown from 'react-markdown'
import moment from 'moment'

export default function SkyScraperFirst({stuff, skeleton}) {
  return (
    <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : stuff.judul}`}>
        <div className='cursor-pointer'>
        <div className="w-full h-56 overflow-hidden relative">
          {skeleton ? <Skeleton height={224}/> : 
            <img src="https://source.unsplash.com/500x800?technology" className="w-full" alt="Gambar berita" />
          }
        <span className='absolute top-5 rounded-r-full opacity-80 bg-main-gradient text-white p-3 text-sm font-semibold'>{skeleton ? <Skeleton/> : moment(new Date(stuff._cd.epoch_time * 1000)).local().format("DD MMMM YYYY")}</span>
        </div>
        <h1 className='text-sm text-gray-700 font-semibold mt-3 lg:text-xl dark:text-white'>{skeleton ? <Skeleton count={2} height={15}/> :stuff.judul}</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 lg:text-sm">{skeleton ? <Skeleton height={8} count={5}/> : stuff.deskripsi.length > 130 ? <ReactMarkdown className="text-gray-500">{stuff.deskripsi.substring(0,130)+'...'}</ReactMarkdown>:<ReactMarkdown className="text-gray-500">{stuff.deskripsi}</ReactMarkdown>}</p>

        <div className="flex mt-5 gap-3">
          {skeleton ? <Skeleton width={50}/> :
            <span className='flex items-center'>
                <FontAwesomeIcon icon={faEye} className="text-sky-500 opacity-70 dark:opacity-100 mr-2"></FontAwesomeIcon>
                <small className="text-xs text-gray-500 dark:text-gray-400">{stuff.view}</small>
            </span>
          }
        </div>
        </div>
    </Link>
  )
}
