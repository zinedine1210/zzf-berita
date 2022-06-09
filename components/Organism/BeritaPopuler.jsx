import React, {useState, useEffect} from "react"
import axios from "axios"
import PostFirst from "../Molecules/PostFirst"
import ListPostImageLeft from "../Molecules/ListPostImageLeft"

export default function BeritaPopuler({total}) {
  const [data, setData] = useState(null)

  useEffect(() => {
      axios.get(`http://localhost:3004/posts?_sort=informasi.like&_order=desc&_limit=${total}`)
      .then(res => {
        setData(res.data)
      })
  }, [])

  
  return (
      <>
          <div className="lg:flex gap-2 align-items">
            <div className="flex flex-col w-full lg:w-3/5 space-y-6 overflow-hidden">
            {data ? <PostFirst stuff={data[0]} skeleton={false}/> : <PostFirst stuff={false} skeleton={true}/>}
           
            </div>


            <div className="w-full lg:w-2/5 overflow-y-scroll lg:overflow-hidden lg:hover:overflow-y-scroll h-[400px] lg:h-[650px] mt-5">
              {data ?
                data.slice(1).map((item, id) => {
                  return (
                    <ListPostImageLeft stuff={item} skeleton={false} key={id} />
                  )
                })
                : 
                <>
                  {
                    [...Array(total)].map((item) => {
                      return (
                        <ListPostImageLeft stuff={[]} key={item} skeleton={true}/>
                      )
                    })
                  }
                </>
              }
                
            </div>
          </div>
      </>
  )
}
