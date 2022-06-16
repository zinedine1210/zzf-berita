import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import ListPostByCategory from '../Molecules/ListPostByCategory'
import Pagination from "../Pagination"
import CollectionBerita from "../../repositories/CollectionBerita"
import { useRouter } from 'next/router'
import {setDataAll, setDataPeristiwa, setDataPembinaan, setDataHukum, setDataSosial, setTotalCount } from "../../store/actions"
import {connect} from "react-redux"

async function getDataByKategori(cat, start, count){
    const responseData = await CollectionBerita.getDataBerita({start:start,count:count, category:cat, img:"t",flag:"all"})
    if(responseData){
        return {
            totalcount : responseData.total_count,
            data: responseData.data
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
    const [total, setTotal] = useState(null)
    
    const getDataBerita = (category, start, count) => {
        getDataByKategori(category, start, count).then(res => {
            // dapatkan total data yang ada
            setTotal(res.totalcount)
            let object = {
                [page]:{
                    "category" : res.data,
                    "tag": [],
                    "category_tag":[]
                }
            }

            
            setData(res.data)
            if(category === "SOSIAL"){
                const dataSosial = props.dataSosial
                props.setDataSosial(Object.assign(dataSosial, object))
            }else if(category === "HUKUM KRIMINAL"){
                const dataHukum = props.dataHukum
                props.setDataHukum(Object.assign(dataHukum, object))
            }else if(category === "PERISTIWA"){
                const dataPeristiwa = props.dataPeristiwa
                props.setDataPeristiwa(Object.assign(dataPeristiwa, object))
            }else if(category === "PEMBINAAN MASYARAKAT"){
                const dataPembinaan = props.dataPembinaan
                props.setDataPembinaan(Object.assign(dataPembinaan, object))
            }
        })
    }

    useEffect(() => {
        let start = 0
        if(page){
            if(page > 1){
                start = (page - 1) * count
            }
        }

        console.log(total);
        
        if(tag & category){
            setKeyword(`&category=${category}&tag=${tag}`)
            // getDataByTag(tag, start, category).then(res => {
            //     setData(res.data)
            //     setTotalcount(res.total)
            // })
        }else if(tag){

        }else if(category){
            setKeyword(`&category=${category}`)
            if(category === "SOSIAL"){
                let allSosial = props.dataSosial

                if(Object.keys(allSosial).length > 0 && allSosial.hasOwnProperty(page)){
                    if(Object.keys(allSosial[page]).length > 0){
                        setData(allSosial[page].category)
                        console.log("redux");
                    }else{
                        console.log("ambil lagi");
                        getDataBerita(category, start, count)
                    }
                }else{
                    console.log("ambil");
                    getDataBerita(category, start, count)
                }
    
            }else if(category === "HUKUM KRIMINAL"){
                let allHukum = props.dataHukum

                if(Object.keys(allHukum).length > 0 && allHukum.hasOwnProperty(page)){
                    if(Object.keys(allHukum[page]).length > 0){
                        setData(allHukum[page].category)
                    }else{
                        getDataBerita(category, start, count)
                    }
                }else{
                    getDataBerita(category, start, count)
                }
            }else if(category === "PERISTIWA"){
                let allPeristiwa = props.dataPeristiwa

                if(Object.keys(allPeristiwa).length > 0 && allPeristiwa.hasOwnProperty(page)){
                    if(Object.keys(allPeristiwa[page]).length > 0){
                        setData(allPeristiwa[page].category)
                    }else{
                        getDataBerita(category, start, count)
                    }
                }else{
                    getDataBerita(category, start, count)
                }
            }else if(category === "PEMBINAAN MASYARAKAT"){
                let allPembinaan = props.dataPembinaan

                if(Object.keys(allPembinaan).length > 0 && allPembinaan.hasOwnProperty(page)){
                    if(Object.keys(allPembinaan[page]).length > 0){
                        setData(allPembinaan[page].category)
                    }else{
                        getDataBerita(category, start, count)
                    }
                }else{
                    getDataBerita(category, start, count)
                }
            }else{
                setData([])
            }
        }else{
            
        }


        let setCountPage = Math.ceil(total / count)
        setPagerList(setCountPage)
    }, [category, tag, page, total])
    
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
        dataPeristiwa: state.meta.dataPeristiwa,
        totalcountpage: state.meta.totalcountpage
    }
}

export default connect(MapStateToProps, {setDataAll, setDataPeristiwa, setDataPembinaan, setDataHukum, setDataSosial, setTotalCount})(BeritaByKategori)