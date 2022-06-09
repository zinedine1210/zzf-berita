import React from 'react'


// Lebar 1344px dan tinggi menyesuaikan gambar
export default function Billboard({image, url, name}) {
  return (
      <div className='bg-orange-300 shadow-lg my-5 dark:bg-slate-800 rounded-lg mx-auto flex justify-center items-center lg:w-[1344px] text-white font-bold text-5xl text-center m-auto overflow-hidden'>
          <a href={`${url}`} target="_blank"><img src={`${image}`} alt={`${name}`} /></a>
      </div>
  )
}
