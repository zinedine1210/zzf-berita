import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import ListPostByCategory from '../Molecules/ListPostByCategory'
import Pagination from "../Pagination"
import CollectionBerita from "../../repositories/CollectionBerita"
import { useRouter } from 'next/router'
import {setDataAll} from "../../store/actions"
import {connect} from "react-redux"
import lodash from "lodash"



function BeritaByKategori(props) {
    const {page, title, tag, count, category, pagination} = props
    const router = useRouter()
    const url = router.pathname
    const [data, setData] = useState()
    const [keyword, setKeyword] = useState(null)
    const [pagerList, setPagerList] = useState()
    

    useEffect(() => {
        let start = 0
        if(page){
            if(page > 1){
                start = (page - 1) * count
            }
        }

        if(tag & category){
            setKeyword(`&category=${category}&tag=${tag}`)
        }else if(tag){
            setKeyword(`&tag=${tag}`)
        }else if(category){
            setKeyword(`&category=${category}`)
        }else{
            ""
        }

        // let allData = props.dataAll
        // let findOneData = allData.filter(res => res.category_name_0 === category)

        // if(findOneData.length !== 0){
        //     setData(findOneData)
        // }else{
        CollectionBerita.getDataBerita({start:start, img:"thumb", flag:"all", count:count, category:category, tag:tag})
        .then(res => {
            setData(res.data)
            // props.setDataAll(lodash.concat(allData, res.data, start))
            let setCountPage = Math.ceil(res.total_count / count)
            setPagerList(setCountPage)
        })
        // }

        // console.log(allData);
    }, [category, tag, page])

  return (
      <div className='w-full'>
                <h1 className="title">{data ? title ? title : tag : ""}</h1>
                <div className="text-sm breadcrumbs mb-5">
                    <ul>
                        <li className='dark:text-white'>
                            <Link href={`/`}>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                    Home
                                </a>
                            </Link>
                        </li> 
                        <li className='dark:text-white'>
                            <Link href={`/kategori`}>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                    Kategori
                                </a>
                            </Link>
                        </li>
                        <li className='dark:text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            {data ? title ? title.toLowerCase() : tag :""}
                        </li>
                    </ul>
                </div>
                {data ? data.map((item, id) => {
                    return (
                    <ListPostByCategory stuff={item} key={id} skeleton={false}/>
                    )
                }) : 
                
                [...Array(count)].map((item) => {
                    return <ListPostByCategory stuff={null} key={item} skeleton={true} query={keyword}/>
                })
                
                
                }

            
            {data ? pagination ? 

                <Pagination page={page} pagerList={pagerList} urlData={url} query={keyword}/>
                :

                <Link href={`/kategori/${data[0].category}?category=${category}`}>
                    <a className="py-2 px-10 text-center bg-orange-600 rounded-sm block w-full font-semibold text-white hover:bg-orange-500">Lihat selengkapnya</a>
                </Link>
                :

                ""
        }
            
      </div>
  )
}


const MapStateToProps = state => {
    return {
        dataAll: state.meta.dataAll
    }
}

export default connect(MapStateToProps, {setDataAll})(BeritaByKategori)