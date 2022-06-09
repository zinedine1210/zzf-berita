import React, {useEffect, useState} from 'react'
import axios from 'axios'
import BeritaTerbaruList from '../Molecules/BeritaTerbaruList'
export default function BeritaTerbaru({total}) {
  const [data, setData] = useState()

  const getData = () => {
    axios.get(`http://localhost:3004/posts?_sort=id&_order=desc&_limit=${total}`)
    .then(res => {
      setData(res.data)
    })

  }


  useEffect(() => {
      getData()
  }, [])


  return (
        <div className='w-full'>
          <div>
            {data ? data.map((item, id) => {
              return (
                <BeritaTerbaruList key={id} stuff={item} skeleton={false}/>
              )
            })
            :
            [...Array(total)].map((item) => {
              return <BeritaTerbaruList stuff={null} skeleton={true} key={item}/>
            })
            }
            
            
          </div>
        </div>
  )
}
