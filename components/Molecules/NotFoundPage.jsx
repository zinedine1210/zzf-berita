import React from 'react'
import Link from 'next/link'

export default function NotFoundPage({bahasa}) {
  return (
    <div className="max-w-md text-center my-10">
        <h2 className="mb-8 font-extrabold text-9xl text-orange-500">
            <span className="sr-only">Error</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">{bahasa("error.p")}</p>
        <p className="mt-4 mb-8 text-gray-400">{bahasa("error.p2")}</p>
        <Link href={"/"}><a rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded bg-main-gradient text-white">{bahasa("error.a")}</a></Link>
    </div>
  )
}
