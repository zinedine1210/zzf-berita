
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import BeritaVideoFirst from '../Molecules/BeritaVideoFirst'
import BeritaVideoList from '../Molecules/BeritaVideoList'

export default function BeritaVideo({total}) {
    const [data, setData] = useState()


    const getData = () => {
        axios.get(`https://zzfnews.herokuapp.com/api/posts?category=Teknologi&_sort=informasi.like&_order=desc&_limit=${total}`)
        .then(res => {
            setData(res.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])


    
  return (
    
      <div className="w-full">
          <div className="lg:flex h-[300px] lg:h-[500px] overflow-hidden">

              {data ?
                <BeritaVideoFirst stuff={data[0]} skeleton={false}/>
              : 
                <BeritaVideoFirst stuff={null} skeleton={true} />
              }


              <div className="w-full lg:w-1/3 max-h-full bg-white dark:bg-slate-800 overflow-hidden hover:overflow-scroll">
                  
                  {data ? data.slice(1).map((item, id) => {
                      return <BeritaVideoList stuff={item} key={id} skeleton={false} />
                  }) :
                    [...Array(total)].map((item) => {
                        return <BeritaVideoList stuff={null} skeleton={true} key={item}/>
                    })
                  }
                  
                  
              </div>
          </div>
      </div>
  )
}
