import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import NavbarPostList from '../Molecules/NavbarPostList'

export default function NavbarPost({title, categoryId}) {
    const [data, setData] = useState()

    useEffect(() => {
            axios.get(`http://localhost:3004/posts?categoryId=${categoryId}&_order=desc&_limit=3`)
            .then(res => {
                setData(res.data)
            })
    }, [])
  return (
    <div className='w-full'>
        <h1 className="text-xl font-main uppercase mb-3"><span className="kotak-title"></span>{title}</h1>
        <div className="grid grid-cols-3 gap-2">
            {data ? data.map((item, id) => {
                return (
                    <NavbarPostList stuff={item} key={id} skeleton={false}/>
                )
            }) : 
            [...Array(3)].map(item => {
                return <NavbarPostList stuff={null} key={item} skeleton={true} />
            })
            }
        </div>
    </div>
  )
}
