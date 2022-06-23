import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'

export default function RelatedPost({stuff}) {
    const item = stuff ? stuff.split(",") : ""

  return (
    <div>
        <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed border-gray-400">
            <span className='items-center flex justify-center p-2 text-sky-500 dark:text-white'><FontAwesomeIcon icon={faTags} className="mr-1"/>Tags</span>
            {item ? item.map((item, id) => {
                return (
                    <Link href={`/kategori?page=1&tag=${item.split(" ").join("-")}`} key={id}>
                        <span className="cursor-pointer px-3 py-1 my-1 uppercase hover:underline rounded-lg text-white bg-sky-500 dark:text-white">#{item}</span>
                    </Link>
                )
            }) : ""}
        </div>
        {/* <div className="space-y-2 dark:text-white">
            <h4 className="text-lg font-semibold">Related posts</h4>
            <ul className="ml-4 space-y-1 list-disc">
                <li>
                    <a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
                </li>
                <li>
                    <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
                </li>
                <li>
                    <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
                </li>
            </ul>
        </div> */}
    </div>
  )
}
