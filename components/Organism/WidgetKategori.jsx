import Link from 'next/link'
import React from 'react'

export default function WidgetKategori({bahasa}) {
  return (
    <div className='w-full'>
        <h1 className="title bg-white dark:bg-slate-800 p-5 rounded-t-lg mb-2"><span className="kotak-title"></span>{bahasa("kategori")}</h1>
        {bahasa("menus", {returnObjects: true}).map((item, id) => {
            return (
                <Link href={`/kategori/${item.text.toLowerCase()}?id=${item.id}`} key={id}>
                    <a className="w-full inline-block my-1 rounded-lg shadow-lg group bg-white dark:bg-slate-800 px-5 py-2 text-gray-600 hover:bg-main-gradient">
                        <h1 className="text-xl font-semibold dark:text-white font-main upparcase group-hover:text-white group-hover:duration-300">{item.text}</h1>
                    </a>
                </Link>
            )
        })}
    </div>
  )
}
