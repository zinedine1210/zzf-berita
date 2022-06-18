import axios from 'axios'
import React, {useState, useEffect} from 'react'
import SorotanKeduaList from '../Molecules/SorotanKeduaList'

export default function SorotanKedua({total}) {
    const [data, setData] = useState(null)


    useEffect(() => {
            axios.get(`http://localhost:3004/posts?_sort=informasi.share&_limit=${total}&_order=desc`)
            .then(res => {
                setData(res.data)
            })
    }, [])


  return (
    <div className="w-full">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 sm:grid-cols-2">
            {data ? data.map((item, id) => {
                return (
                    <SorotanKeduaList stuff={item} key={id} skeleton={false} />
                )
            }) :
                [...Array(total).keys()].map((item) => {
                    return <SorotanKeduaList stuff={null} skeleton={true} key={item} />
                })
            }
            
            
        </div>
    </div>
  )
}
