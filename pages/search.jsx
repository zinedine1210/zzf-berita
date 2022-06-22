import React, { useEffect, useState } from 'react'
import Layout from "../components/Layouts/Layout"
import { useRouter } from 'next/router'
import ListPostByCategory from "../components/Molecules/ListPostByCategory"
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import Pagination from "../components/Pagination/index"
import { connect } from 'react-redux'
import {setDataAll} from "../store/actions"
import lodash from "lodash"

function search(props) {
    const {t} = useTranslation("common")
    const {keyword, NumberPage} = props
    const url = useRouter().pathname
    const [data, setData] = useState(null)
    const [pagerList, setPagerList] = useState(null)
    const [valKeyword, setvalKeyword] = useState(null)

    useEffect(() => {
        let start = 0
        let count = 5
        if(NumberPage){
            if(NumberPage > 1){
                start = (NumberPage - 1) * count
            }
        }
        console.log(props.dataAll);
        setvalKeyword(`&keyword=${keyword}`)

        setData(null)

        CollectionBerita.getDataSearch({start: start, keyword: keyword, count:count, img:"t"}).then(res => {
            setData(res.data)
            props.setDataAll(lodash.unionBy(props.dataAll, res.data, "id"))
            let setCountPage = Math.ceil(res.total_count / count)
            setPagerList(setCountPage)
        })
    }, [keyword, NumberPage])
    
  return (
    <Layout title={`Pencarian ${keyword}`} lang={t} description={`Hasil Pencarian untuk ${keyword}`}>
        <div className="container py-5 lg:flex lg:gap-5">
            <div className="w-full lg:w-[730px]">
                <div className='w-full'>
                <h1 className="title uppercase">{keyword}</h1>
                <div className="text-sm breadcrumbs mb-5">
                    <ul>
                        <li className='dark:text-white'>
                            <Link href={`/`}>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                    {t("beranda")}
                                </a>
                            </Link>
                        </li> 
                        <li className='dark:text-white'>
                            <Link href={`/kategori`}>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                    Search
                                </a>
                            </Link>
                        </li>
                        <li className='dark:text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            {keyword}
                        </li>
                    </ul>
                </div>
                {data ? data.length !== 0 ? data.map((item, id) => {
                        return (
                        <ListPostByCategory stuff={item} key={id} skeleton={false} bahasa={t}/>
                        )
                    }) : 
                    
                    <h1 className='text-red-500 border-2 font-semibold border-red-500 p-5 text-center dark:text-sky-500 dark:border-sky-500'>{t("nocontent")}</h1>
                    
                    :

                    [...Array(5).keys()].map(item => {
                        return <ListPostByCategory stuff={null} skeleton={true} key={item}/>
                    })
                    
                    
                    }


                    <Pagination page={NumberPage} pagerList={pagerList} urlData={url} query={valKeyword}/>
                    
            
      </div>
            </div>
            <div className="w-full lg:w-[350px]">
                <FollowUs instagram={true} facebook={true} twitter={true} youtube={true} bahasa={t}/>
                <WidgetTab bahasa={t("widgettab", {returnObjects:true})} count={5}/>
            </div>
        </div>
    </Layout>
  )
}


const MapStateToProps = state => {
    return {
        dataAll : state.meta.dataAll
    }
}

export default connect(MapStateToProps, {setDataAll})(search)

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CollectionBerita from '../repositories/CollectionBerita'
import FollowUs from '../components/Organism/FollowUs'
import WidgetTab from '../components/Organism/WidgetTab'

export async function getServerSideProps({locale, query}){
    const keyword = query.keyword
  const NumberPage = Number(query.page)

  return {
    props:{
      ...(await serverSideTranslations(locale, ['common'])),
      keyword,
      NumberPage
    }
  }
}