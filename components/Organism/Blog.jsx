import axios from 'axios'
import React, {useState, useEffect} from 'react'
import List from "../../components/Molecules/List"



export default function Blog({kolom,total}) {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get(`http://localhost:3004/posts?_sort=informasi.read&_limit=${total}`)
        .then(res => {
            setData(res.data)
        })
    }, [])
  return (
      <div className="w-full">

          <div className={`grid grid-cols-1 lg:grid-cols-${kolom} gap-5`}>

                {data ? data.map((item, id) => {
                    return (
                        <List key={id} stuff={item} skeleton={false}/>
                    )
                }) :
                [...Array(total)].map(item => {
                    return <List key={item} stuff={null} skeleton={true} />
                })
                }
                
          </div>
      </div>
  )
}
