import React from 'react'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'

export default function MostSharedList({stuff, skeleton}) {
  return (
      <div>
        <div className="flex gap-3 items-center justify-center mb-5 border-b-2 border-orange-600 border-dashed pb-2">
            <div className="w-1/4">
                <div className="overflow-hidden">
                    {skeleton ? <Skeleton width={130} height={50}/> :
                    <Link href="/">
                        <img src={"https://source.unsplash.com/180x130"} alt="thumb"/>
                    </Link>
                    }
                </div>
            </div>
            <div className="w-3/4">
                <div className="text-xs flex justify-between mb-2">
                    <Link href={`/kategori/${skeleton ? "skeleton" : stuff.category}`}><a className='text-orange-500 font-semibold uppercase'>{skeleton ? <Skeleton width={80}/> : stuff.category}</a></Link>
                    <span>{skeleton ? <Skeleton width={30}/> :stuff.upload}</span>
                </div>
                <h4 className='text-gray-600 dark:text-white'><Link href={`/berita/${skeleton ? "skeleton" :stuff.id}/${skeleton ? "skeleton" :stuff.title}`}>{skeleton ? <Skeleton count={2}/> :stuff.title}</Link></h4>
            </div>
        </div>
    </div>
  )
}
