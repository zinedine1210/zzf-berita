import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import ListPostByCategory from '../Molecules/ListPostByCategory'
import Pagination from "../Pagination"
import CollectionBerita from "../../repositories/CollectionBerita"
import { useRouter } from 'next/router'
import {setDataAll, setDataPeristiwa, setDataPembinaan, setDataHukum, setDataSosial } from "../../store/actions"
import {connect} from "react-redux"

async function getDataByKategori(cat, tag){
    const responseData = await CollectionBerita.getDataBerita({start:0, category:cat, img:"t",flag:"all"})
    if(responseData){
        return responseData['data']
    }
}

async function getDataByTag(tag, start, category) {
    const responseData = await CollectionBerita.getDataBerita({start:start,category:category,count:5, img:"t",flag:"all", tag:tag})
    if(responseData){
        return {
            data : responseData['data'],
            total : responseData['total_count']
        }
    }
}

function BeritaByKategori(props) {
    const {page, title, tag, count, category, pagination} = props
    const router = useRouter()
    const url = router.pathname
    const [data, setData] = useState(null)
    const [keyword, setKeyword] = useState(null)
    const [pagerList, setPagerList] = useState()
    const [totalcount, setTotalcount] = useState(0)
    

    useEffect(() => {
        let start = 0
        if(page){
            if(page > 1){
                start = (page - 1) * count
            }
        }

        
        if(tag & category){
            setKeyword(`&category=${category}&tag=${tag}`)
            getDataByTag(tag, start, category).then(res => {
                setData(res.data)
                setTotalcount(res.total)
            })
        }else if(tag){
            setKeyword(`&tag=${tag}`)
            getDataByTag(tag,start,null ).then(res => {
                setData(res.data)
                setTotalcount(res.total)
            })
        }else if(category){
            setKeyword(`&category=${category}`)
            if(category === "SOSIAL"){
                let allSosial = props.dataSosial
                const ujung = start !== 0 ? start + 5 : 5
                let findSosial = allSosial.slice(start, ujung)
                
                if(allSosial.length !== 0){
                    setData(findSosial)
                    setTotalcount(allSosial.length)
                }else{
                    setData(null)
                    getDataByKategori("SOSIAL").then(res => {
                        props.setDataSosial(res)
                        setTotalcount(res.length)
                        setData(res.slice(start, ujung))
                    })
                }
    
            }else if(category === "HUKUM KRIMINAL"){
                let allHukum = props.dataHukum
                const ujung = start !== 0 ? start + 5 : 5
                let findHukum = allHukum.slice(start, ujung)
                
                
                if(allHukum.length !== 0){
                    setData(findHukum)
                    setTotalcount(allHukum.length)
                }else{
                    setData(null)
                    getDataByKategori("HUKUM KRIMINAL").then(res => {
                        props.setDataHukum(res)
                        setTotalcount(res.length)
                        setData(res.slice(start, ujung))
                    })
                }
            }else if(category === "PERISTIWA"){
                let allPeristiwa = props.dataPeristiwa
                const ujung = start !== 0 ? start + 5 : 5
                let findPeristiwa = allPeristiwa.slice(start, ujung)
                if(allPeristiwa.length !== 0){
                    setData(findPeristiwa)
                    setTotalcount(allPeristiwa.length)
                }else{
                    setData(null)
                    getDataByKategori("PERISTIWA").then(res => {
                        props.setDataPeristiwa(res)
                        setTotalcount(res.length)
                        setData(res.slice(start, ujung))
                    })
                }
            }else if(category === "PEMBINAAN MASYARAKAT"){
                let allPembinaan = props.dataPembinaan
                const ujung = start !== 0 ? start + 5 : 5
                let findPembinaan = allPembinaan.slice(start, ujung)
                if(allPembinaan.length !== 0){
                    setData(findPembinaan)
                    setTotalcount(allPembinaan.length)
                }else{
                    setData(null)
                    getDataByKategori("PEMBINAAN MASYARAKAT").then(res => {
                        props.setDataPembinaan(res)
                        setTotalcount(res.length)
                        setData(res.slice(start, ujung))
                    })
                }
            }else{
                setData([])
            }
        }else{
            
        }
        let setCountPage = Math.ceil(totalcount / 5)
        setPagerList(setCountPage)
    }, [category, tag, page, totalcount])
    
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
                {data ? data.length !== 0 ? data.map((item, id) => {
                    return (
                    <ListPostByCategory stuff={item} key={id} skeleton={false}/>
                    )
                }) : 

                <h1 className='border-red-500 border-2 text-center text-red-500 dark:text-sky-500 dark:border-sky-500 p-5 font-bold'>Konten Tidak Tersedia</h1> :
                
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
        dataAll: state.meta.dataAll,
        dataPembinaan : state.meta.dataPembinaan,
        dataSosial: state.meta.dataSosial,
        dataHukum: state.meta.dataHukum,
        dataPeristiwa: state.meta.dataPeristiwa
    }
}

export default connect(MapStateToProps, {setDataAll, setDataPeristiwa, setDataPembinaan, setDataHukum, setDataSosial})(BeritaByKategori)