
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import CollectionYoutube from '../../repositories/CollectionYoutube'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faVideo } from "@fortawesome/free-solid-svg-icons"
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'
import Link from 'next/link'
function BeritaVideoList({stuff, changeVideo, skeleton, active}) {
  const [data, setData] = useState(null)


  useEffect(() => {
    if(skeleton){

    }else{
      const splitData = stuff.url.split("/")
      const idVideo = splitData[4]
      axios.get(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${idVideo}`).then(res => {
        setData(res.data)
      })

    }
  }, [])


  return (
    <div className={`text-left cursor-pointer group relative h-32 overflow-hidden border-b-2 border-sky-500`} >
        
        {skeleton ? "" :
        <img src={data? data.thumbnail_url :""} alt="Thumbnail" className={` brightness-50 ${skeleton ? "" : active === stuff.url ? "filter-none": ""} `} />
        }
        <div className="flex absolute p-3 top-0 items-center justify-center mx-auto h-full">
          {data ? 
            <button onClick={() => changeVideo()}><FontAwesomeIcon icon={faCirclePlay} className="text-white text-2xl lg:text-3xl"/></button>
            :<Skeleton width={24} height={24} circle={true}/>
          }
            <div className="ml-3">
                <button onClick={() => changeVideo()} className=" text-sm text-left font-semibold text-white mt-2 lg:text-sm group-hover:underline dark:text-white block">{data ? data.title : <Skeleton height={30} width={200}/>}</button>
                <small className='text-gray-300 text-xs block'>{skeleton ? <Skeleton inline={true} width={80}/> : stuff.nama.length !== 0 ? stuff.nama : "No Name"} | {skeleton ? <Skeleton inline={true} width={50} /> : moment(new Date(stuff._cd.epoch_time * 1000)).local().format("DD MMMM YYYY")}</small>
            </div>
        </div>

    </div>
  )
}


export default function BeritaVideo({total}) {
    const [data, setData] = useState(null)
    const [active, setActive] = useState(null)

    useEffect(() => {

        CollectionYoutube.getAllYoutube({count:total}).then(res => {
          setData(res.data)
          setActive(res.data[0].url)
        })

    }, [])

    const changeVideo = (url) => {
      setActive(null)
      setActive(url)
    }
    
  return (
    
      <div className="w-full">
          <div className="container">
            <h1 className="title">Youtube Polres Metro Bekasi</h1>
            <div className="lg:flex h-[300px] lg:h-[500px] overflow-hidden gap-2">

            
            <div className="w-full lg:w-[730px] bg-white relative">
                {active ? <iframe width="730" height="500" className='w-full h-[300px] lg:w-[730px] lg:h-[500px]' src={active ? active :""} title={data ? data.url : ""} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                : <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-red-500 dark:border-violet-400 absolute top-[200px] left-[320px]"></div>
                }
                    
            </div>


              <div className="w-full lg:w-[350px] max-h-full bg-white dark:bg-slate-800 overflow-hidden hover:overflow-y-scroll">
                  
                  {data ? data.map((item, id) => {
                    
                    return <BeritaVideoList stuff={item} key={id} changeVideo={() => changeVideo(item.url)} skeleton={false} active={active}/>
                  })
                  :
                  [...Array(total)].map(item => {
                    return <BeritaVideoList stuff={null} key={item} skeleton={true} />
                  })
                  }
                  
                  
              </div>
          </div>
          <Link href={`/vidio`}><span className='cursor-pointer text-xl text-white text-center font-semibold mt-10 animate-bounce block'>Lihat Selengkapnya<FontAwesomeIcon icon={faVideo} className="ml-2"/></span></Link>
          </div>
      </div>
  )
}
