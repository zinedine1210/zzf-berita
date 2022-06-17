import React from 'react'
import Link from 'next/link'
import Skeleton from "react-loading-skeleton"

export default function SorotanKeduaList({stuff, skeleton}) {
  return (
      <>
      {skeleton ? <Skeleton width={320} height={384}/> : 
      
        <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-56 lg:h-96 bg-gray-500" style={{backgroundImage: `url('https://source.unsplash.com/500x500?${stuff.category}')`}}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-800 to-gray-800 opacity-70 dark:opacity-100"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-2 mt-2 lg:mx-5 lg:mt-3">
                <Link href={`/kategori/${stuff.category}`}><a rel="noopener noreferrer" className=" py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 bgundefined">{stuff.category}</a></Link>
                <div className="flex flex-col justify-start text-center text-gray-100">
                    <span className="text-2xl lg:text-3xl font-semibold leading-none tracking-wide">04</span>
                    <span className="leading-none uppercase text-sm lg:text-xl">Aug</span>
                </div>
            </div>
            <h2 className="z-10 lg:p-5 p-2">
                <Link href={`/berita/${stuff.id}/${stuff.title}`}><span rel="noopener noreferrer" className="cursor-pointer text-xs lg:text-xl hover:underline text-gray-100 font-semibold">{stuff.title}</span></Link>
                
            </h2>
        </div>
      }
      </>
  
  )
}
