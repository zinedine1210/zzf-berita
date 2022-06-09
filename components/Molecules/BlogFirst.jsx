import React from 'react'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'

export default function BlogFirst({stuff, skeleton}) {
  return (
    <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : stuff.title}`}>
        <a rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 border-dashed border-orange-300 border">
          {skeleton ? <Skeleton height={256} width={500}/> : 
            <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 border-dashed border-orange-300 border" />
          }
          <div className="p-6 space-y-2 lg:col-span-5 relative">
              <h3 className="text-2xl font-semibold dark:text-white sm:text-4xl group-hover:underline group-focus:underline">{skeleton ? <Skeleton width={100}/> : stuff.title}</h3>
              <span className="text-xs text-gray-400">{skeleton ? <Skeleton width={100}/> : stuff.upload}</span>
              <p className='dark:text-gray-400'>{skeleton ? <Skeleton width={100}/> : stuff.body}</p>
          </div> 
        </a>
    </Link>
  )
}
