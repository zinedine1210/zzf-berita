import React from 'react'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'

export default function List({stuff, skeleton}) {
  return (
      <div className='mb-8'>
            <div className="img overflow-hidden">
              {skeleton ? <Skeleton height={300}/> :
                <img src="https://source.unsplash.com/500x500?sports" alt="Gambar berita" />
              }
            </div>
            <h3 className="text-sm mt-5 mb-2"><span className='text-orange-500 font-main font-bold'>{skeleton ? <Skeleton inline={true} width={50} height={10}/> : stuff.category}</span> {skeleton ? <Skeleton inline={true} width={50} height={10} /> : " / " + stuff.upload}</h3>
            <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : stuff.title}`}><h1 className="text-xl font-semibold dark:text-white cursor-pointer">{skeleton ? <Skeleton height={20} count={2}/> : stuff.title}</h1></Link>
            <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>{skeleton ? <Skeleton count={3} height={10}/> : stuff.body}</p>
        </div>
  )
}
