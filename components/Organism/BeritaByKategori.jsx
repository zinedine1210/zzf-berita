import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import ListPostByCategory from '../Molecules/ListPostByCategory'
import Pagination from "../Pagination"
import CollectionBerita from "../../repositories/CollectionBerita"
import { useRouter } from 'next/router'
import {setDataAll, setDataPeristiwa, setDataPembinaan, setDataHukum, setDataSosial, setTotalCount, setTag } from "../../store/actions"
import {connect} from "react-redux"
import lodash from "lodash"


async function getDataByKategori(cat, start, count, tag){
    const responseData = await CollectionBerita.getDataBerita({start:start,count:count, category:cat, tag:tag, img:"t",flag:"all"})
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
    
    const getSemuaBerita = (category, start, count, tag) => {
        getDataByKategori(category, start, count, tag).then(res => {
            // dapatkan total data yang ada
            let dataCategory = null
            let dataCategoryTag = null
            if(category && tag){
                dataCategoryTag = res.data
            }else if(category){
                dataCategory = res.data
        }

            let object = {
                [page]:{
                    "category" : dataCategory,
                    "category_tag":dataCategoryTag
                },
                total: res.totalcount
            }

            const allData = props.dataAll

            setTotal(res.totalcount)
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
            }else{

            }

            props.setDataAll(lodash.unionBy(allData, res.data, "id"))

        })
    }

    useEffect(() => {
        let start = 0
        if(page){
            if(page > 1){
                start = (page - 1) * count
            }
        }

        
        if(category){
            if(tag){
                setKeyword(`&category=${category}&tag=${tag}`)
            }else{
                setKeyword(`&category=${category}`)
            }

            setData(null)


            if(category === "SOSIAL"){
                let allSosial = props.dataSosial

                if(Object.keys(allSosial).length > 0 && allSosial.hasOwnProperty(page)){
                    if(Object.keys(allSosial[page]).length > 0){
                        setData(allSosial[page].category)
                        setTotal(allSosial['total'])
                    }else{
                        getSemuaBerita(category, start, count, tag)
                    }
                }else{
                    getSemuaBerita(category, start, count, tag)
                }
    
            }else if(category === "HUKUM KRIMINAL"){
                let allHukum = props.dataHukum

                if(Object.keys(allHukum).length > 0 && allHukum.hasOwnProperty(page)){
                    if(Object.keys(allHukum[page]).length > 0){
                        setData(allHukum[page].category)
                        setTotal(allHukum['total'])
                    }else{
                        getSemuaBerita(category, start, count, tag)
                    }
                }else{
                    getSemuaBerita(category, start, count, tag)
                }
            }else if(category === "PERISTIWA"){
                let allPeristiwa = props.dataPeristiwa

                if(Object.keys(allPeristiwa).length > 0 && allPeristiwa.hasOwnProperty(page)){
                    if(Object.keys(allPeristiwa[page]).length > 0){
                        setData(allPeristiwa[page].category)
                        setTotal(allPeristiwa['total'])
                    }else{
                        getSemuaBerita(category, start, count, tag)
                    }
                }else{
                    getSemuaBerita(category, start, count, tag)
                }
            }else if(category === "PEMBINAAN MASYARAKAT"){
                let allPembinaan = props.dataPembinaan

                if(Object.keys(allPembinaan).length > 0 && allPembinaan.hasOwnProperty(page)){
                    if(Object.keys(allPembinaan[page]).length > 0){
                        setData(allPembinaan[page].category)
                        setTotal(allPembinaan['total'])
                    }else{
                        getSemuaBerita(category, start, count, tag)
                    }
                }else{
                    getSemuaBerita(category, start, count, tag)
                }
            }else{
                setData([])
            }




        }else if(tag){
            setKeyword(`&tag=${tag}`)
            let allTag = props.dataTag


            let hasPage = page in allTag
            if(Object.keys(allTag).length > 0 && hasPage){
                if(allTag[page].hasOwnProperty(tag)){
                    setData(allTag[page][tag]['data'])
                    setTotal(allTag[page][tag]['total'])
                }else{  
                    CollectionBerita.getDataBerita({start:start, count:count, tag:tag, img:"t", flag:"all"}).then(res => {
                        

                        allTag[page][tag] = {
                            data: res.data,
                            total: res.total_count
                        }
                        
                        props.setTag(allTag)
                        setData(res.data)
                        setTotal(res.total_count)
                    })
                }
            }else{
                CollectionBerita.getDataBerita({start:start, count:count, tag:tag, img:"t", flag:"all"}).then(res => {
                    let object = {
                        [page]:{
                            [tag]:{
                                data:res.data,
                                total:res.total_count
                            }
                        },
                    }
                    
                    props.setTag(Object.assign(allTag, object))
                    setData(res.data)
                    setTotal(res.total_count)
                })
            }

        }else{
            console.log("tidak ada data");
        }
        // console.log(props.dataAll);

        // console.log(props.dataTag);

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
                                <span className='cursor-pointer flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                    {props.bahasa("beranda")}
                                </span>
                            </Link>
                        </li> 
                        <li className='dark:text-white'>
                            <Link href={`/kategori`}>
                                <span className='cursor-pointer flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                    {props.bahasa("kategori")}
                                </span>
                            </Link>
                        </li>
                        <li className='dark:text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            {data ? title ? title.toLowerCase() : tag :""}
                        </li>
                    </ul>
                </div>
                
                {data ? data.length > 0 ? data.map((item, id) => {
                    return (
                    <ListPostByCategory stuff={item} key={id} skeleton={false} bahasa={props.bahasa}/>
                    )
                }) : 

                <h1 className='border-red-500 border-2 text-center text-red-500 dark:text-sky-500 dark:border-sky-500 p-5 font-bold'>Konten Tidak Tersedia</h1> :
                
                [...Array(count).keys()].map((item) => {
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
        totalcountpage: state.meta.totalcountpage,
        dataTag: state.meta.dataTag
    }
}

export default connect(MapStateToProps, {setDataAll, setDataPeristiwa, setDataPembinaan, setDataHukum, setDataSosial, setTotalCount, setTag})(BeritaByKategori)