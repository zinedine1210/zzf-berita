import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function BeritaLiveListLeft({stuff, skeleton}) {
  return (
      <div className="flex flex-col space-y-2">
            <h3 className="flex items-center space-x-2 text-gray-400">
                <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-orange-500 dark:bg-violet-400"></span>
                <span className="text-xs font-bold tracking-wider uppercase dark:text-gray-300 text-gray-700">Exclusive</span>
            </h3>
            <a rel="noopener noreferrer" href="#" className="font-serif hover:underline dark:text-white text-gray-500">{skeleton ? <Skeleton /> : stuff.title}</a>
            <p className="text-xs text-gray-400">{skeleton ? <Skeleton /> : stuff.upload}
                <a rel="noopener noreferrer" href="#" className="hover:underline text-slate-800 dark:text-violet-400">{skeleton ? <Skeleton /> : "Zinedine Ziddan"}</a>
            </p>
        </div>
  )
}
