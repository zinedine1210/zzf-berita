import React from 'react'
import Link from 'next/link'
import ReactMarkdown from "react-markdown"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagramSquare,
faTwitter,
faYoutube
} from "@fortawesome/free-brands-svg-icons"
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function Articles({stuff, skeleton}) {
  return (
    <article className="space-y-8 text-gray-600">
        <div className="space-y-6">
            <h1 className="text-xl lg:text-3xl font-bold md:tracking-tight md:text-5xl dark:text-white">{skeleton ? <Skeleton height={50}/> : stuff.judul}</h1>
            
            <p className='text-xs lg:text-sm text-gray-500 dark:text-gray-400 flex justify-between uppercase'><span>{skeleton ? <Skeleton count={2}/> : stuff.nama}</span> <span><FontAwesomeIcon icon={faEye} className="mr-1" />{skeleton ? "" : stuff.view}</span></p>
            {skeleton ? <Skeleton height={700}/> :
            <img src={stuff._foto0} alt="Gambar berita" className='w-full' />
            }
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
                <div className="flex items-center md:space-x-2">
                    <p className="text-sm"><span className='text-orange-500 font-semibold'>{skeleton ? <Skeleton width={50} height={10} inline={true}/> : stuff.category_name_0}</span> • {skeleton ? "" : moment(new Date(stuff._cd.epoch_time * 1000)).local().format("DD MMMM YYYY")}</p>
                </div>
                <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                    {skeleton ? <Skeleton width={30} height={30} circle={true} inline={true} /> :
                    <Link href={"/"}>
                        <a className='mx-1'><FontAwesomeIcon icon={faTwitter} className="text-blue-500 text-2xl" /></a>
                    </Link>
                    }
                    {skeleton ? <Skeleton width={30} height={30} circle={true} inline={true} /> :
                    <Link href={"/"}>
                        <a className='mx-1'><FontAwesomeIcon icon={faInstagramSquare} className="text-purple-600 text-2xl" /></a>
                    </Link>
                    }
                    {skeleton ? <Skeleton width={30} height={30} circle={true} inline={true} /> :
                    <Link href={"/"}>
                        <a className='mx-1'><FontAwesomeIcon icon={faFacebook} className="text-blue-900 text-2xl" /></a>
                    </Link>
                    }
                    {skeleton ? <Skeleton width={30} height={30} circle={true} inline={true} /> :
                    <Link href={"/"}>
                        <a className='mx-1'><FontAwesomeIcon icon={faYoutube} className="text-red-700 text-2xl" /></a>
                    </Link>
                    }
                </p>
            </div>
        </div>

        {/* main content */}
        <div className="text-gray-500 dark:text-gray-400">
            <p><ReactMarkdown className='leading-relaxed'>{skeleton ? <Skeleton count={100}/> : stuff.deskripsi}</ReactMarkdown></p>
        </div>



    </article>
  )
}
