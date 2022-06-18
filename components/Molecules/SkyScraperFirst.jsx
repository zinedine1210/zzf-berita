import React from 'react'
import { faEye, faHeart, faShare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Skeleton from "react-loading-skeleton"
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import Image from 'next/image'


export default function SkyScraperFirst({stuff, skeleton}) {
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
    <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : stuff.judul}`}>
        <div className='cursor-pointer'>
        <div className="w-full h-56 overflow-hidden relative">
          {skeleton ? <Skeleton height={224}/> : 
            <Image width={767} height={512} src={gambar()} className="w-full" alt="Gambar berita" objectFit='contain'/>
          }
        <span className='absolute top-5 rounded-r-full opacity-80 bg-main-gradient text-white p-3 text-sm font-semibold'>{skeleton ? <Skeleton/> : moment(new Date(stuff._cd.epoch_time * 1000)).local().format("DD MMMM YYYY")}</span>
        </div>
        <h1 className='text-sm text-gray-700 font-semibold mt-3 lg:text-xl dark:text-white'>{skeleton ? <Skeleton count={2} height={15}/> :stuff.judul}</h1>
        <section className="text-xs text-gray-500 dark:text-gray-400 mt-2 lg:text-sm">{skeleton ? <Skeleton height={8} count={5}/> : stuff.deskripsi.length > 130 ? <ReactMarkdown className="text-gray-500">{stuff.deskripsi.substring(0,130)+'...'}</ReactMarkdown>:<ReactMarkdown className="text-gray-500">{stuff.deskripsi}</ReactMarkdown>}</section>

        <div className="flex mt-5 gap-3">
          {skeleton ? <Skeleton width={50}/> :
            <span className='flex items-center mb-5'>
                <FontAwesomeIcon icon={faEye} className="text-sky-500 opacity-70 dark:opacity-100 mr-2"></FontAwesomeIcon>
                <small className="text-xs text-gray-500 dark:text-gray-400">{stuff.view}</small>
            </span>
          }
        </div>
        </div>
    </Link>
  )
}
