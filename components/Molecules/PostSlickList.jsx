import React from 'react'
import ReactMarkdown from 'react-markdown'
import Skeleton from 'react-loading-skeleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import Link from 'next/link'

export default function PostSlickList({stuff, skeleton}) {
    let jdl = stuff ? stuff.judul.replace(/\s+/g, '-'):""

  return (
      <div className="w-full">
        {skeleton ? <Skeleton  height={200}/> :
          <img src={stuff._foto0} alt="gambar berita" />
        }
          <Link href={`/kategori/${skeleton ? "skeleton" :stuff.uid}?category=${skeleton ? "skeleton" : stuff.category_name_0}`}><small className='cursor-pointer text-xs lg:text-sm font-semibold uppercase hover:underline text-sky-500 flex justify-between'>{skeleton ? <Skeleton width={50} height={10}/> : stuff.category_name_0} <span className='text-gray-500 dark:text-white'><FontAwesomeIcon icon={faEye} className="mr-1"/>{skeleton ? <Skeleton width={10} height={10}/> : stuff.view }</span></small></Link>
          <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : jdl}`}>
            <a>
              <h1 className='text-[16px] font-semibold hover:duration-200 hover:text-sky-500 cursor-pointer dark:text-white'>{skeleton ? <Skeleton count={2} height={20}/> : stuff.judul.length > 60 ? stuff.judul.substring(0, 60)+"..." : stuff.judul }</h1>
              <p className='text-sm text-gray-500'>{skeleton ? <Skeleton count={3} height={10}/> : stuff.deskripsi.length > 100 ? <ReactMarkdown>{stuff.deskripsi.substring(0, 100)}</ReactMarkdown> : <ReactMarkdown>{stuff.deskripsi}</ReactMarkdown>}</p>
              <small className='text-xs font-semibold dark:text-white'>{skeleton ? <Skeleton width={50} height={10}/> : moment(new Date(stuff._cd.epoch_time * 1000)).local().format("DD MMMM YYYY")}</small>
            </a>
          </Link>
      </div>
  )
}
