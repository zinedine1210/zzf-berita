import React from 'react'


// Lebar 1344px tinggi menyesuaikan gambar
export default function Header({url, name, image}) {
  return (
    <div className='bg-orange-300 dark:bg-slate-800 mx-auto flex justify-center items-center lg:w-[1344px] text-white font-bold text-5xl text-center m-auto overflow-hidden'>
        <a href={`${url}`} target="_blank"><img src={`${image}`} alt={`${name}`} /></a>
    </div>
  )
}
