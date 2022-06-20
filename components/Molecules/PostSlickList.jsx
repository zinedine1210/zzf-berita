import React from 'react'
import ReactMarkdown from 'react-markdown'
import Skeleton from 'react-loading-skeleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

export default function PostSlickList({stuff, skeleton}) {
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
      <div className="w-full mt-5 lg:mt-5">
        {skeleton ? <Skeleton  height={200}/> :
          
          <Image width={767} height={510} src={gambar()} alt="gambar berita" objectFit="contain" />
        }
          <Link href={`/kategori?page=1&category=${skeleton ? "skeleton" :stuff.category_name_0}`}><small className='cursor-pointer text-xs lg:text-sm font-semibold uppercase hover:underline text-sky-500 flex justify-between'>{skeleton ? <Skeleton width={50} height={10}/> : stuff.category_name_0} <span className='text-gray-500 dark:text-white'><FontAwesomeIcon icon={faEye} className="mr-1"/>{skeleton ? <Skeleton width={10} height={10}/> : stuff.view }</span></small></Link>
          <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : jdl}`}>
            <span className='cursor-pointer'>
              <h1 className='text-[16px] font-semibold hover:duration-200 hover:text-sky-500 cursor-pointer dark:text-white'>{skeleton ? <Skeleton count={2} height={20}/> : stuff.judul.length > 60 ? stuff.judul.substring(0, 60)+"..." : stuff.judul }</h1>
              <section className='text-sm text-gray-500'>{skeleton ? <Skeleton count={3} height={10}/> : stuff.deskripsi.length > 100 ? <ReactMarkdown>{stuff.deskripsi.substring(0, 100)}</ReactMarkdown> : <ReactMarkdown>{stuff.deskripsi}</ReactMarkdown>}</section>
              <small className='text-xs font-semibold dark:text-white'>{skeleton ? <Skeleton width={50} height={10}/> : moment(new Date(stuff._cd.epoch_time * 1000)).local().format("DD MMMM YYYY")}</small>
            </span>
          </Link>
      </div>
  )
}
