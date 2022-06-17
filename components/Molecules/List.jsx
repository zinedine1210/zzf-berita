import React from 'react'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import moment from "moment"
import ReactMarkdown from 'react-markdown'

export default function List({stuff, skeleton}) {
  return (
      <div className='mb-2 lg:mb-8 flex lg:block gap-2'>
            <div className="img overflow-hidden">
              {skeleton ? <Skeleton height={300}/> :
                <img src={skeleton ? "" : stuff._foto0} alt="Gambar berita" className='w-[300px] lg:w-[300px]' />
              }
            </div>
            <div>
              <h3 className="text-sm lg:mt-5 mb-2 lg:text-xs"><span className='text-orange-500 font-main font-bold text-xs'>{skeleton ? <Skeleton inline={true} width={50} height={10}/> : stuff.category_name_0}</span> {skeleton ? <Skeleton inline={true} width={50} height={10} /> : " / " + moment(new Date(stuff._cd.epoch_time*1000)).local().format("DD MMMM YYYY")}</h3>
              <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : stuff.judul}`}><h1 className="text-sm font-semibold dark:text-white cursor-pointer">{skeleton ? <Skeleton height={20} count={2}/> : stuff.judul.length > 50 ? <ReactMarkdown>{stuff.judul.substring(0, 50)+"..."}</ReactMarkdown> : <ReactMarkdown>{stuff.judul}</ReactMarkdown>}</h1></Link>
              <section className='text-xs text-gray-500 dark:text-gray-400 mt-2'>{skeleton ? <Skeleton count={3} height={10}/> : stuff.deskripsi.length > 80 ? <ReactMarkdown>{stuff.deskripsi.substring(0, 80)+"..."}</ReactMarkdown> : <ReactMarkdown>{stuff.deskripsi}</ReactMarkdown>}</section>
            </div>
        </div>
  )
}
