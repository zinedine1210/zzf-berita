import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ArchiveList from '../Molecules/ArchiveList'

export default function Archive({total}) {
    const [data, setData] = useState()

    useEffect(()=> {
            axios.get(`http://localhost:3004/posts?_sort=informasi.like&_limit=${total}`)
        .then(res => {
            setData(res.data)
        })
    }, [])



  return (
    <div className='w-full'>

        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-5">
        {data ? data.map((item, id) => {
            return (
                <ArchiveList stuff={item} key={id} skeleton={false}/>
            )
        }) :
        [...Array(total)].map((item) => {
            return <ArchiveList stuff={null} key={item} skeleton={true}/>
        })
        }
        </div>
    </div>
  )
}
