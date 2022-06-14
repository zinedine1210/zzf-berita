
import React, {useState, useEffect} from 'react'
import CollectionYoutube from '../../repositories/CollectionYoutube'
import BeritaVideoFirst from '../Molecules/BeritaVideoFirst'
import BeritaVideoList from '../Molecules/BeritaVideoList'

export default function BeritaVideo({total}) {
    const [data, setData] = useState()


    const getData = () => {
        CollectionYoutube.getAllYoutube({count:5}).then(res => {
            // console.log(res.data);
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


              <div className="w-full lg:w-[350px] max-h-full bg-white dark:bg-slate-800 overflow-hidden hover:overflow-y-scroll">
                  
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
