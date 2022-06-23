import React, {useState, useEffect} from 'react'
import SkyScraperFirst from '../Molecules/SkyScraperFirst'
import SkyScraperList from '../Molecules/SkyScraperList'
import CollectionBerita from '../../repositories/CollectionBerita'

export default function BeritaSkyscraper({total, bahasa}) {
    const [data, setData] = useState(null)

    useEffect(()=> {
        CollectionBerita.getDataBeritaMostView({count:total})
        .then(res => {
            setData(res.data)
        })
    }, [total])


  return (
      <div className="w-full">
        <h1 className="title">{bahasa("populer")}</h1>

          <div className="w-full">
                {data ? 
                <SkyScraperFirst stuff={data[0]} skeleton={false}/>
            : <SkyScraperFirst stuff={null} skeleton={true} />}
            </div>

            <div className="w-full">

                {data ? data.slice(1).map((item, id) => {
                    return (
                        <SkyScraperList stuff={item} key={id} skeleton={false} number={id}/>
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
