import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SkyScraperFirst from '../Molecules/SkyScraperFirst'
import SkyScraperList from '../Molecules/SkyScraperList'
import CollectionBerita from '../../repositories/CollectionBerita'

export default function BeritaSkyscraper({total, category}) {
    const [data, setData] =useState(null)

    useEffect(()=> {
        CollectionBerita.getDataBerita({start:0, count:total, category:category, flag:"all", img:"t"})
        .then(res => {
            setData(res.data)
        })
    }, [])


  return (
      <div className="w-full">

          <div className="w-full my-10">
                {data ? 
                <SkyScraperFirst stuff={data[0]} skeleton={false}/>
            : <SkyScraperFirst stuff={null} skeleton={true} />}
            </div>

            <div className="w-full h-[800px] overflow-hidden hover:overflow-y-scroll">

                {data ? data.slice(1).map((item, id) => {
                    return (
                        <SkyScraperList stuff={item} key={id} skeleton={false}/>
                    )
                }) : 
                [...Array(total)].map((item) => {
                    return <SkyScraperList stuff={null} skeleton={true} key={item}/>
                })
                }
                
            </div>
      </div>
  )
}
