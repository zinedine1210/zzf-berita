import React from 'react'
import Skeleton from "react-loading-skeleton"

export default function Box({children, title, icon}) {
  return (
      <div className='w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg p-5 mb-5'>
        
        {title ? <h1 className='title inline'>{title}</h1> : ""}
        
        {children}
      </div>
  )
}
