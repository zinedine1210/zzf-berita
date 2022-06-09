import React from 'react'

export default function BillboardContainer({name, url, image}) {
  return (
      <div className='my-5 shadow-lg bg-orange-300 dark:bg-slate-800 rounded-lg mx-auto flex justify-center items-center lg:w-[1008px] text-white font-bold text-5xl text-center m-auto overflow-hidden'>
          <a href={`${url}`} target="_blank"><img src={`${image}`} alt={`${name}`} /></a>
      </div>
  )
}
