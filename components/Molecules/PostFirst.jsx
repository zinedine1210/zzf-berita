import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
faShareNodes,
faBookmark,
faThumbsUp,
faEye
} from "@fortawesome/free-solid-svg-icons"
import Skeleton from "react-loading-skeleton"




export default function PostFirst({stuff}) {
  return (
      <>
        {!stuff && (
            <>
                <div className="flex space-x-4">
                    <Skeleton width={50} height={50} circle={true}/>
                    <Skeleton />
                    <div className="flex flex-col space-y-1">
                        <Skeleton />
                        <Skeleton />
                    </div>
                </div>
                <div className="cursor-pointer">
                    <div>
                        <Skeleton height={240}/>
                        <h2 className="mb-1 text-xl font-semibold dark:text-white"><Skeleton /></h2>
                        <p className="text-sm text-gray-400"><Skeleton /></p>
                    </div>

                    <Skeleton />
                </div>
            </>
        )}
        {
            stuff && (
                <>
                <div className="flex space-x-4">
                    <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <Link href={`/kategori/${stuff.category}`}>
                            <span rel="noopener noreferrer" className="cursor-pointer text-sm font-semibold text-orange-500">{stuff.category}</span>
                        </Link>
                        <span className="text-xs text-gray-400">{stuff.upload}</span>
                    </div>
                </div>
                <Link href={`/berita/${stuff.id}/${stuff.title}`}>
                <div className="cursor-pointer">
                    <div>
                    <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold dark:text-white">{stuff.title}</h2>
                    <p className="text-sm text-gray-400">{stuff.body}...</p>
                    </div>
                    <div className="flex flex-wrap justify-between mt-5">
                    <div className="space-x-2">
                        <a className="p-2 text-center text-gray-400"><FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon></a>
                    
                        <a className="p-2 text-gray-400"><FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon></a>
                    </div>
                    <div className="flex space-x-2 text-sm text-gray-400">
                        <div className="flex items-center p-1 space-x-1.5">
                            <a className="text-gray-400"><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></a>
                            <span>{stuff.informasi.like}</span>
                        </div>
                        <div className="flex items-center p-1 space-x-1.5">
                            <a className="text-gray-400"><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></a>
                            <span>{stuff.informasi.read}</span>
                        </div>
                    </div>
                    </div>
                </div>
                </Link>
                </>

            )
        }
        </>
  )
}
