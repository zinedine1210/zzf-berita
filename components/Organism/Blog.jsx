// import axios from 'axios'
import React, {useState, useEffect} from 'react'
import List from "../../components/Molecules/List"
import CollectionBerita from "../../repositories/CollectionBerita"


export default function Blog({kolom,total, tag}) {
    const [data, setData] = useState()
    useEffect(() => {
        CollectionBerita.getDataBerita({start:0, count:total, img:"t", flag:"all", tag:tag})
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
                [...Array(total).keys()].map(item => {
                    return <List key={item} stuff={null} skeleton={true} />
                })
                }
                
          </div>
      </div>
  )
}
