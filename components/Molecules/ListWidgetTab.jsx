import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import Skeleton from 'react-loading-skeleton'
import Image from 'next/image'

export default function ListWidgetTab({stuff, skeleton}) {
    let jdl = stuff ? stuff.judul.replace(/\s+/g, '-'):""
    const gambar = () => {
      if(stuff._video0 && stuff._video0 !== ""){
        let splitData = stuff._video0.split("/")
        let imgYtb = splitData[4]
        return `https://img.youtube.com/vi/${imgYtb}/0.jpg`
        
      }else if(stuff._foto0){
        return stuff._foto0
      }else{
        return "/images/default.webp"
      }
    }

  return (
    <div>
        <div className="flex gap-3 items-center justify-center mt-3 border-b-2 border-sky-500 border-dashed pb-2">
            <div className="w-1/4">
                <div className="overflow-hidden">
                    <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : jdl}`}>
                        {skeleton ? <Skeleton containerClassName='flex items-center justify-center' className='h-[50px] lg:h-[80px]'/> : <Image width={300} height={200} src={gambar()} alt="thumb" objectFit='contain'/>}
                    </Link>
                </div>
            </div>
            <section className="w-3/4">
                <div className="text-xs flex justify-between mb-5 lg:mb-3">
                    <Link href={`/kategori?page=1&category=${skeleton ? "skeleton" : stuff.category_name_0.split(" ").join("-")}`}><a className='text-sky-500 font-semibold uppercase'>{skeleton ? <Skeleton width={80} /> : stuff.category_name_0}</a></Link>
                    <span className='dark:text-gray-400'>{skeleton ? <Skeleton width={50} /> : moment(new Date(stuff._cd.epoch_time * 1000)).local().format('DD MMMM YYYY')}</span>
                </div>
                <h2 className='text-gray-500 dark:text-white text-xs lg:text-sm'><Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" :jdl}?page=1`}>{skeleton ? <Skeleton height={50}/> : stuff.judul}</Link></h2>
            </section>
        </div>
        <div className="space-15"/>
        {/* {dark ? <div className="border_white"/> : <div className="border_black"/>} */}
        <div className="space-15"/>
    </div>
  )
}
