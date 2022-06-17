import React from 'react'
import Link from 'next/link'
import Skeleton from "react-loading-skeleton"

export default function ListImageContain({stuff, skeleton}) {
  return (

    <>
        <div className="lg:my-0 card w-full lg:w-1/4 bg-base-100 shadow-xl image-full my-2">
          {skeleton ? <Skeleton width={400} height={225}/> :
            
            <>
            <figure><img src="https://source.unsplash.com/400x225?technology" alt="Gambar berita" /></figure>
            <div className="card-body">
                <h2 className="card-title">Trending</h2>
                <p>{stuff.title}</p>
                <div className="card-actions">
                <Link href={`/berita/${stuff.id}/${stuff.title}`}><span className="btn cursor-pointer bg-orange-600 text-white hover:bg-orange-700">Baca</span></Link>
                </div>
            </div>
            </>
          
          }
        </div>
    </>
  )
}
