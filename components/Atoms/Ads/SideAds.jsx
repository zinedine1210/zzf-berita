import React from 'react'


// Iklan pada tepi kanan 1/4 lebar container 

// Lebar 320px dan tinggi menyesuaikan gambar
export default function SideAds({name,url, image}) {
  return (
      <div className='bg-orange-300 shadow-lg my-5 dark:bg-slate-800 rounded-lg mx-auto flex justify-center items-center lg:w-[320px] text-white font-bold text-5xl text-center m-auto overflow-hidden'>
          <a href={`${url}`} target="_blank"><img src={`${image}`} alt={`${name}`} /></a>
      </div>
  )
}
