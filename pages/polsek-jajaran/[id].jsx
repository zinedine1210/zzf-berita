import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import {wrapper} from "../../store/store"
import { useTranslation } from 'next-i18next'
import WidgetTab from '../../components/Organism/WidgetTab'
import WidgetKategori from "../../components/Organism/WidgetKategori"
import lodash from "lodash"

export default function PolsekJajaran(props) {
  const {t} = useTranslation("common")
  
  
  return (
      <Layout title={props.PolsekName} lang={t} description={`Daftar Berita ${props.PolsekName}`}>
        <section>
          <div className="dark:bg-violet-400 bg-slate-700">
            <div className="container flex flex-col items-center px-4 py-16 pb-40 mx-auto text-center lg:pb-44 md:py-16 md:px-10 lg:px-32 dark:text-gray-900">
              <h1 className="text-5xl text-white leading-none sm:text-6xl xl:max-w-3xl font-mono uppercase font-extrabold hover:scale-110 hover:duration-300">{props.PolsekName}</h1>
              
            </div>
          </div>
          <div className='container py-5 -mt-24 bg-white dark:bg-slate-800 lg:py-10 lg:flex justify-center rounded-t-lg gap-5'>
            <div className="w-full lg:w-[730px]">
              <h1 className="title">{props.PolsekName}</h1>
              {props.dataSatuanPolsek ? props.dataSatuanPolsek.length == 0 ?
              <span className='block border border-red-500 dark:border-violet-500 dark:text-white py-5 mb-5 text-center font-semibold text-red-700'>{t("nocontent")}</span>
              : props.dataSatuanPolsek.map((item,id) => {
                return (
                  <ListPostByCategory stuff={item} skeleton={false} key={id}/>
                )
              }) : [...Array(5)].map((item) => {
                        return <ListPostByCategory stuff={null} skeleton={true} key={item}/>
                    })
              }
            </div>
            <div className="w-full lg:w-[350px]">
              <FollowUs instagram={true} facebook={true} youtube={true} twitter={true}/>
              <WidgetTab bahasa={t("widgettab", {returnObjects:true})} total={5}/>
              <WidgetKategori bahasa={t} title={t("kategori")} />
            </div>
          </div>
          
        </section>
      </Layout>
  )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CollectionBerita from '../../repositories/CollectionBerita'
import FollowUs from '../../components/Organism/FollowUs'
import ListPostByCategory from '../../components/Molecules/ListPostByCategory'
import { setDataSatuanPolsek } from '../../store/actions'



export const getServerSideProps = wrapper.getServerSideProps((store) => async ({query,locale}) => {
  const NumberPage = Number(query.page)
  const PolsekName = query.id.split("-").join(" ")

  let allData = store.getState().meta.dataSatuanPolsek
  let findOne = allData.filter(res => res.tag.split(",").find(e => e == PolsekName))

  let dataSatuanPolsek = []
  let redirect = null

  if(findOne.length !== 0 ){
    dataSatuanPolsek = findOne
  }else{
    let responseData = await CollectionBerita.getDataBerita({start:0, img:"t", flag:"all", tag:PolsekName})
      
      if(responseData['data'].length !== 0){
          responseData.data[0]['_foto0'] = responseData.data[0]['_foto0'].replace("thumb/", "")
          store.dispatch(setDataSatuanPolsek(lodash.concat(allData, responseData['data'])))
          dataSatuanPolsek = responseData['data']   
      } else {
          redirect =  {
              destination: '/404',
              permanent: false,
          }
      }
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]) ),
      PolsekName,
      allData,
      dataSatuanPolsek,
      NumberPage
    } 
  }

})