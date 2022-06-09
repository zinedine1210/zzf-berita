import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function BeritaLiveListRight({stuff, skeleton}) {
  return (
    <div className="flex flex-col divide-y divide-gray-700">
        <div className="flex px-1 py-4">
            {skeleton ? <Skeleton height={80} width={65}/> :
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src="https://source.unsplash.com/random/244x324" />
            }
            <div className="flex flex-col flex-grow">
                <a rel="noopener noreferrer" href="#" className="font-serif hover:underline dark:text-white text-gray-500">{skeleton ? <Skeleton height={20}/> : stuff.title}</a>
                <p className="mt-auto text-xs text-gray-400">{skeleton ? <Skeleton height={5} /> : stuff.upload}
                    <a rel="noopener noreferrer" href="#" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">{skeleton ? <Skeleton height={10}/> : stuff.category}</a>
                </p>
            </div>
        </div>
    </div>
  )
}
