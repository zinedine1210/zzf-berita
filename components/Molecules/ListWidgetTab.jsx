import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import Skeleton from 'react-loading-skeleton'

export default function ListWidgetTab({stuff, skeleton}) {
    let jdl = stuff ? stuff.judul.replace(/\s+/g, '-'):""

  return (
    <div>
        <div className="flex gap-3 items-center justify-center mt-3 border-b-2 border-sky-500 border-dashed pb-2">
            <div className="w-1/4">
                <div className="overflow-hidden">
                    <Link href="/">
                        {skeleton ? <Skeleton width={180} height={80}/> : <img src={stuff._foto0} alt="thumb"/>}
                    </Link>
                </div>
            </div>
            <div className="w-3/4">
                <div className="text-xs flex justify-between mb-2">
                    <Link href={`/kategori/${skeleton ? "skeleton" : stuff.category_name_0}`}><a className='text-sky-500 font-semibold uppercase'>{skeleton ? <Skeleton width={80} /> : stuff.category_name_0}</a></Link>
                    <a className='dark:text-gray-400'>{skeleton ? <Skeleton width={50} /> : moment(new Date(stuff._cd.epoch_time * 1000)).local().format('DD MMMM YYYY')}</a>
                </div>
                <h4 className='text-gray-500 dark:text-white text-xs lg:text-sm'><Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" :jdl}?page=1`}>{skeleton ? <Skeleton height={50}/> : stuff.judul}</Link></h4>
            </div>
        </div>
        <div className="space-15"/>
        {/* {dark ? <div className="border_white"/> : <div className="border_black"/>} */}
        <div className="space-15"/>
    </div>
  )
}
