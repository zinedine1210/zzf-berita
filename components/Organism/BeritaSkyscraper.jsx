import React, {useState, useEffect} from 'react'
import SkyScraperFirst from '../Molecules/SkyScraperFirst'
import SkyScraperList from '../Molecules/SkyScraperList'
import CollectionBerita from '../../repositories/CollectionBerita'

export default function BeritaSkyscraper({total, category, bahasa}) {
    const [data, setData] = useState(null)

    useEffect(()=> {
        CollectionBerita.getDataBerita({start:0, count:total, category:category, flag:"all", img:"thumb"})
        .then(res => {
            setData(res.data)
        })
    }, [])


  return (
      <div className="w-full">
        <h1 className="title">{bahasa("populer")}</h1>

          <div className="w-full">
                {data ? 
                <SkyScraperFirst stuff={data[0]} skeleton={false}/>
            : <SkyScraperFirst stuff={null} skeleton={true} />}
            </div>

            <div className="w-full h-[400px] lg:h-[500px] overflow-hidden hover:overflow-y-scroll">

                {data ? data.slice(1).map((item, id) => {
                    return (
                        <SkyScraperList stuff={item} key={id} skeleton={false}/>
                    )
                }) : 
                [...Array(total).keys()].map((item) => {
                    return <SkyScraperList stuff={null} skeleton={true} key={item}/>
                })
                }
                
            </div>
      </div>
  )
}
