import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import ListImageContain from '../Molecules/ListImageContain'
import Skeleton from "react-loading-skeleton"


export default function Sorotan({title, total}) {
    const [data, setData] = useState()


    useEffect(() => {
            axios.get(`http://localhost:3004/posts?_sort=informasi.share&_limit=${total}&_order=desc`)
            .then(res => {
                setData(res.data)
            })
    }, [])



  return (
      <div className='w-full'>
            <div className="lg:flex gap-3 align-center h-[200px] overflow-hidden lg:h-full lg:overflow-visible">
                {data ? data.map((item, id) => {
                    return (
                        <ListImageContain stuff={item} key={id} skeleton={false}/>
                    )
                })
                :
                [...Array(total)].map((item) => {
                    return <ListImageContain stuff={null} skeleton={true} key={item}/>
                })
            }
            </div>
            <Link href={`/berita`}><h1 className='lg:hidden text-center text-orange-500 font-semibold dark:text-white dark:bg-gray-700 py-2 mt-5'>Lihat Sorotan Lainnya...</h1></Link>
        </div>
  )
}
