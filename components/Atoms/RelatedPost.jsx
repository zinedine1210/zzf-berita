import React from 'react'
import Link from 'next/link'

export default function RelatedPost({stuff}) {
    const item = stuff ? stuff.split(",") : ""

  return (
    <div>
        <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed border-gray-400">
            {item ? item.map((item) => {
                return (
                    <Link href={`/berita?category`}>
                        <a rel="noopener noreferrer" className="px-3 py-1 rounded-sm hover:underline bg-sky-500 text-gray-900 dark:text-white">#{item}</a>
                    </Link>
                )
            }) : ""}
        </div>
        <div className="space-y-2 dark:text-white">
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
        </div>
    </div>
  )
}
