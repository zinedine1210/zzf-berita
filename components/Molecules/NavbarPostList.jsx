import React from 'react'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'

export default function NavbarPostList({stuff, skeleton}) {
  return (
      <div className="w-full ">
            <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : stuff.title}`}>
            <div className='group'>
                {skeleton ? <Skeleton height={150}/> :
                <img src="https://source.unsplash.com/500x300?sports" alt="gambar berita" />
                }
                <h1 className='text-sm mt-3 text-gray-800 group-hover:underline'>{skeleton ? <Skeleton count={3}/>: stuff.title}</h1>
            </div>
            </Link>
        </div>
  )
}
