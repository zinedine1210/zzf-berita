import React, {useState, useEffect} from 'react'
import axios from 'axios'
import BlogFirst from '../Molecules/BlogFirst'
import BlogList from '../Molecules/BlogList'




export default function BlogBerita({total}) {
    const [data, setData] = useState()

    useEffect(() => {
            axios.get(`http://localhost:3004/posts?_sort=id&_order=desc&_limit=${total}`)
        .then(res => {
            setData(res.data)
        })
    }, [])

  return (
    <section className="w-full">
        <div className="container max-w-6xl mx-auto space-y-6 sm:space-y-12">
            {data ? 
                <BlogFirst stuff={data[0]} skeleton={false}/>
            : <BlogFirst stuff={null} skeleton={true}/>}
            <div className="h-96 lg:h-full overflow-y-scroll lg:overflow-visible grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data ? data.slice(1).map((item, id) => {
                    return (
                        <BlogList stuff={item} key={id} skeleton={false}/>
                    )
                }) :
                [...Array(total).keys()].map((item) => {
                    return <BlogList stuff={null} skeleton={true} />
                })
                }
            </div>
            <div className="flex justify-center">
                <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline border-dashed border-orange-300 border text-gray-400">Muat lebih banyak...</button>
            </div>
        </div>
    </section>
  )
}
