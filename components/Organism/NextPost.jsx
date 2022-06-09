import React from 'react'
import Link from 'next/link'

export default function NextPost() {
  return (
      <div className="w-full">
          <div className="flex justify-center items-center gap-5">
              <div className="w-full lg:w-1/2 flex gap-5">
                  <span className='w-3 bg-orange-200'/>
                  <h1 className="text-sm text-gray-600 lg:text-xl">
                      <h1 className='text-orange-500 text-xl lg:text-2xl font-semibold'>Berita selanjutnya</h1>
                      <Link href={"/"}>
                          <a className='hover:text-gray-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, enim.</a>
                      </Link>
                  </h1>
              </div>
              <div className="w-full lg:w-1/2 flex gap-5">
                  <span className='w-3 bg-orange-200'/>
                  <h1 className="text-sm text-gray-600 lg:text-xl">
                      <h1 className='text-orange-500 text-xl lg:text-2xl font-semibold'>Berita sebelumnya</h1>
                      <Link href={"/"}>
                          <a className='hover:text-gray-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, enim.</a>
                      </Link>
                  </h1>
              </div>
          </div>
      </div>
  )
}
