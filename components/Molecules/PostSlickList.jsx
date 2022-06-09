import React from 'react'
import ReactMarkdown from 'react-markdown'
import Skeleton from 'react-loading-skeleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

export default function PostSlickList({stuff, skeleton}) {
  return (
      <div className="w-full">
          <img src="/images/gambar/de582729-d5ff-49b9-8ef2-116d37b30f9a.jpg" alt="gambar berita" />
          <div>
            <small className='text-xs lg:text-sm font-semibold uppercase hover:underline text-sky-500 flex justify-between'>{skeleton ? <Skeleton width={50} height={10}/> : stuff.category_name_0} <span className='text-gray-500'><FontAwesomeIcon icon={faEye} className="mr-1"/>{skeleton ? <Skeleton width={10} height={10}/> : stuff.view }</span></small>
            <h1 className='text-[16px] font-semibold hover:duration-200 hover:text-sky-500 cursor-pointer'>{skeleton ? <Skeleton count={2} height={20}/> : stuff.judul }</h1>
            <p className='text-sm text-gray-500'>{skeleton ? <Skeleton count={3} height={10}/> : stuff.deskripsi.length > 100 ? <ReactMarkdown>{stuff.deskripsi.substring(0, 100)}</ReactMarkdown> : <ReactMarkdown>{stuff.deskripsi}</ReactMarkdown>}</p>
            <small className='text-xs font-semibold'>{skeleton ? <Skeleton width={50} height={10}/> : moment(new Date(stuff._cd.epoch_time * 1000)).local().format("DD MMMM YYYY")}</small>
          </div>
      </div>
  )
}
