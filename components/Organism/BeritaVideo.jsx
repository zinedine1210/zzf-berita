
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import CollectionYoutube from '../../repositories/CollectionYoutube'
// import BeritaVideoFirst from '../Molecules/BeritaVideoFirst'
// import BeritaVideoList from '../Molecules/BeritaVideoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import Skeleton from 'react-loading-skeleton'

function BeritaVideoList({stuff, skeleton, title}) {
  const [data, setData] = useState(null)


  useEffect(() => {
    const splitData = stuff.url.split("/")
    const idVideo = splitData[4]
    axios.get(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${idVideo}`).then(res => {
      setData(res.data)
    })
  }, [])


  return (
    <div className="text-left p-5 border-sky-500 border-b-2 cursor-pointer group">
        <div className="flex items-center">
            {skeleton ? <Skeleton width={30} height={30} circle={true}/> : 
            <FontAwesomeIcon icon={faCirclePlay} className="text-sky-500 text-2xl lg:text-3xl"/>
            }
            <div className="ml-3">
                <h1 className="text-xs text-sky-500 font-bold lg:text-sm">{skeleton ? <Skeleton width={50}/> : "jkh"}</h1>
                <small className="text-xs text-gray-500 dark:text-gray-400">{skeleton ? <Skeleton width={30} height={10}/> : "jkhj"}</small>
            </div>
        </div>

        <h1 className=" text-sm font-semibold text-gray-600 mt-2 lg:text-sm group-hover:underline dark:text-white">{skeleton ? <Skeleton count={3}/> : "hgh"}</h1>
    </div>
  )
}


export default function BeritaVideo({total}) {
    const [data, setData] = useState(null)
    const [video, setVideo] = useState(null)

    useEffect(() => {

        CollectionYoutube.getAllYoutube({count:total}).then(res => {
          setData(res.data)
        })

    }, [])
    

    const getTitle = (item) => {
      const splitData = item.url.split("/")
      const idVideo = splitData[4]
      axios.get(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${idVideo}`).then(res => {
        return res.data.title
      })
    }
  return (
    
      <div className="w-full">
          <div className="lg:flex h-[300px] lg:h-[500px] overflow-hidden">

            
            <div className="w-full lg:w-[730px] bg-white relative">
                {data ? <iframe width="730" height="500" className='w-full h-[300px] lg:w-[730px] lg:h-[500px]' src={`https://www.youtube.com/embed/${video}`} title={"asjja"} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                : <Skeleton height={500} width={730}/>
                }
                    
            </div>


              <div className="w-full lg:w-[350px] max-h-full bg-white dark:bg-slate-800 overflow-hidden hover:overflow-y-scroll">
                  
                  {/* {data ? data.slice(1).map((item, id) => {
                    //   const data = getDataYoutube(item.url)
                      return <BeritaVideoList stuff={item.url} key={id} skeleton={false} />
                  }) :
                    [...Array(total)].map((item) => {
                        return <BeritaVideoList stuff={null} skeleton={true} key={item}/>
                    })
                  } */}

                  {data ? data.map((item, id) => {
                    
                    return (
                      <div className="text-left p-5 border-sky-500 border-b-2 cursor-pointer group" key={id}>
                          <div className="flex items-center">
                              <FontAwesomeIcon icon={faCirclePlay} className="text-sky-500 text-2xl lg:text-3xl"/>
                              <div className="ml-3">
                                  <h1 className="text-xs text-sky-500 font-bold lg:text-sm">Diupload oleh {item.nama.toLowerCase()}</h1>
                              </div>
                          </div>

                          <button className="inline-block text-sm font-semibold text-gray-600 mt-2 lg:text-sm group-hover:underline dark:text-white">{getTitle(item)}</button>
                      </div>
                    )
                  })
                  :""}
                  
                  
              </div>
          </div>
      </div>
  )
}
