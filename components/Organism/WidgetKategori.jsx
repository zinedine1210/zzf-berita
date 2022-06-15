import Link from 'next/link'
import React from 'react'

export default function WidgetKategori({bahasa, title}) {
  return (
    <div className='w-full'>
        <h1 className='title'>{title}</h1>
        {bahasa("category", {returnObjects: true}).map((item, id) => {
            
            return (
                <Link href={`/kategori?page=1&category=${item.text.toUpperCase()}`} key={id}>
                    <a className="w-full inline-block my-1 rounded-lg shadow-lg group bg-white dark:bg-slate-800 px-5 py-2 text-gray-600 hover:bg-main-gradient">
                        <h1 className="text-xl font-semibold dark:text-white font-main upparcase group-hover:text-white group-hover:duration-300">{item.text}</h1>
                    </a>
                </Link>
            )
        })}
    </div>
  )
}
