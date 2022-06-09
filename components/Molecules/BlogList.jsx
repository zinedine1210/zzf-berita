import React from 'react'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'


export default function BlogList({stuff, skeleton}) {
  return (
    <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : stuff.title}`}>
        <a rel="noopener noreferrer" className="flex gap-2 items-center lg:block max-w-sm mx-auto group hover:no-underline focus:no-underline border-dashed border-orange-300 border">
          {skeleton ? <Skeleton height={176} width={300}/> : 
            <img role="presentation" className="object-cover w-1/3 lg:w-full rounded h-44 lg:border-dashed lg:border-orange-300 lg:border" src="https://source.unsplash.com/random/480x360?1" />
          }
            <div className="lg:p-6 space-y-2 lg:w-full">
                <h3 className="text-sm lg:text-2xl font-semibold group-hover:underline group-focus:underline dark:text-white">{skeleton ? <Skeleton count={2} height={20}/> : stuff.title}</h3>
                <span className="text-xs text-gray-400">{skeleton ? <Skeleton height={10}/> : stuff.upload}</span>
                <p className='dark:text-gray-400 text-xs lg:text-sm'>{skeleton ? <Skeleton height={15} count={3}/> : stuff.body}</p>
            </div>
        </a>
    </Link>
  )
}
