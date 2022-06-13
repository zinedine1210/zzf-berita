import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import ListPostByCategory from '../Molecules/ListPostByCategory'
import Pagination from "../Pagination"
import CollectionBerita from "../../repositories/CollectionBerita"
import { useRouter } from 'next/router'


export default function BeritaByKategori({ total, pagination, category, page, title, tag}) {
    const router = useRouter()
    const url = router.pathname.replace('/[uid]', "")
    const [data, setData] = useState()
    const [keyword, setKeyword] = useState(null)
    const [pagerList, setPagerList] = useState()
    

    useEffect(() => {

        if(tag & category){
            setKeyword(`&category=${category}&tag=${tag}`)
        }else if(tag){
            setKeyword(`&tag=${tag}`)
        }else if(category){
            setKeyword(`&category=${category}`)
        }else{
            ""
        }

        if(category){

                CollectionBerita.getDataBerita({start:0, img:"thumb", flag:"all", count:total, category:category, tag:tag})
                .then(res => {
                    setData(res.data)
                })

                const setCountPage = Math.ceil(data ? data.length / total : 0)
                setPagerList(setCountPage)

        }else{
            CollectionBerita.getDataBerita({start:0, img:"thumb", flag:"all", count:total,tag:tag})
                .then(res => {
                    setData(res.data)
                })

                const setCountPage = Math.ceil(data ? data.length / total : 0)
                setPagerList(setCountPage)
        }
        
    }, [category, tag])

  return (
      <div className='w-full'>
                <h1 className="title">{data ? title:""}</h1>
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
                            {data ? title.toLowerCase() : ""}
                        </li>
                    </ul>
                </div>
                {data ? data.map((item, id) => {
                    return (
                    <ListPostByCategory stuff={item} key={id} skeleton={false}/>
                    )
                }) : 
                
                [...Array(total)].map((item) => {
                    return <ListPostByCategory stuff={null} key={item} skeleton={true} query={keyword}/>
                })
                
                
                }

            
            {data ? pagination ? 
                // <div className="flex space-x-1 text-gray-100">
                //     <button onClick={() => prevPage()} title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-orange-500 border-orange-200 dark:bg-gray-900 dark:border-gray-800">
                //         <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                //             <polyline points="15 18 9 12 15 6"></polyline>
                //         </svg>
                //     </button>
                //     <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-orange-500 border-orange-200 dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400">1</button>
                //     <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-orange-500 border-orange-200 dark:bg-gray-900 dark:border-gray-800" title="Page 2">2</button>
                //     <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-orange-500 border-orange-200 dark:bg-gray-900 dark:border-gray-800" title="Page 3">3</button>
                //     <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-orange-500 border-orange-200 dark:bg-gray-900 dark:border-gray-800" title="Page 4">4</button>
                //     <button onClick={() => nextPage()} title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-orange-500 border-orange-200 dark:bg-gray-900 dark:border-gray-800">
                //         <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                //             <polyline points="9 18 15 12 9 6"></polyline>
                //         </svg>
                //     </button>
                // </div>

                <Pagination page={page} pagerList={pagerList} urlData={url} query={keyword}/>
                :

                <Link href={`/kategori/${data[0].category}?id=${categoryId}`}>
                    <a className="py-2 px-10 text-center bg-orange-600 rounded-sm block w-full font-semibold text-white hover:bg-orange-500">Lihat selengkapnya</a>
                </Link>
                :

                ""
        }
            
      </div>
  )
}


{/* <Pagination 
  page={page}
  pagerList={pagerList}
  urlData={urlData}
  query={valKeyword}
/> */}

// setCountPage = Math.ceil(responseData['total_count'] / count)
// setPagerList(setCountPage)