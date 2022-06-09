import React from 'react'
import Link from 'next/link'
import Skeleton from "react-loading-skeleton"

export default function ListPostImageLeft({stuff, skeleton}) {
  return (
    <> 
        <div className="hero">
            <Link href={`/berita/${skeleton ? "loading.." : stuff.id}/${skeleton ? "skeleton" : stuff.title}`} className="cursor-pointer">
                <div className="hero-content flex-row border-orange-200 dark:border-white border-b-2 group cursor-pointer w-full">
                    {skeleton ? 
                    <Skeleton width={130} height={80} />
                    :
                    <img src="https://source.unsplash.com/180x130?technology" className="max-w-sm rounded-lg shadow-2xl lg:w-[180px] w-[100px] lg:h-[130px] h-[80px]" />
                    }

                    <div>
                        {skeleton ? <Skeleton width={100}/> : 
                        <h1 className="text-sm font-bold text-orange-500">{stuff.category} <span className='text-gray-500 dark:text-gray-400 font-normal'>| {stuff.upload}</span></h1>
                        
                        }
                        <p className="text-sm group-hover:underline dark:text-white">{skeleton ? <Skeleton height={50}/> : stuff.title}</p>
                    
                    </div>
                </div>
            </Link>
        </div>
    </>
  )
}
