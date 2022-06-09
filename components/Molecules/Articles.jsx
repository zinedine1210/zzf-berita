import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagramSquare,
faTwitter,
faYoutube
} from "@fortawesome/free-brands-svg-icons"
import Skeleton from 'react-loading-skeleton'

export default function Articles({stuff, skeleton}) {
  return (
      <article className="space-y-8 text-gray-600">
        <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl dark:text-white">{skeleton ? <Skeleton height={50}/> : stuff.title}</h1>
            
            <p className='text-sm lg:text-xl text-gray-500 dark:text-gray-400'>{skeleton ? <Skeleton count={2}/> : stuff.body}</p>
            {skeleton ? <Skeleton height={700}/> :
            <img src="https://source.unsplash.com/1450x700?economic" alt="Gambar berita" />
            }
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
                <div className="flex items-center md:space-x-2">
                    <p className="text-sm"><span className='text-orange-500 font-semibold'>{skeleton ? <Skeleton width={50} height={10} inline={true}/> : stuff.category}</span> • {skeleton ? <Skeleton  width={50} height={10} inline={true}/> : stuff.upload}</p>
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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam omnis distinctio, harum quam amet libero eveniet assumenda! Accusamus nostrum autem accusantium rerum, dolores nobis itaque inventore facilis. Explicabo autem aperiam provident eveniet laudantium excepturi, veniam voluptates porro nam, vero corrupti dolorum fuga facilis! Odio voluptas illum nobis rerum ut, velit magni magnam. Distinctio repellat saepe quo a hic nisi accusamus necessitatibus voluptate tenetur temporibus ab quos, earum ipsa dolorem recusandae odio vel dolor? Cupiditate, nemo animi itaque perferendis non modi voluptatum dolorum quis. Rem, consectetur fugit! Ex, possimus quos. Debitis ab dolore non ratione recusandae, officia unde ut amet dolor!</p>
        </div>



    </article>
  )
}
