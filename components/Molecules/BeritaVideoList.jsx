import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import Skeleton from 'react-loading-skeleton'

export default function BeritaVideoList({stuff, skeleton}) {
  return (
    <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : stuff.title}`}>
        <div className="text-left p-5 border-sky-500 border-b-2 cursor-pointer group">
            <div className="flex items-center">
                {skeleton ? <Skeleton width={30} height={30} circle={true}/> : 
                <FontAwesomeIcon icon={faCirclePlay} className="text-sky-500 text-2xl lg:text-3xl"/>
                }
                <div className="ml-3">
                    <h1 className="text-xs text-sky-500 font-bold lg:text-sm">{skeleton ? <Skeleton width={50}/> : stuff.category}</h1>
                    <small className="text-xs text-gray-500 dark:text-gray-400">{skeleton ? <Skeleton width={30} height={10}/> : stuff.upload}</small>
                </div>
            </div>

            <h1 className=" text-sm font-semibold text-gray-600 mt-2 lg:text-xl group-hover:underline dark:text-white">{skeleton ? <Skeleton count={3}/> : stuff.title}</h1>
        </div>
    </Link>
  )
}
