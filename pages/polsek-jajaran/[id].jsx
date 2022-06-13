import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import WidgetTab from '../../components/Organism/WidgetTab'
import WidgetKategori from "../../components/Organism/WidgetKategori"

export default function PolsekJajaran() {
  const {t} = useTranslation("common")
    const router = useRouter()
    const [data , setData] = useState(null)
    const {id, page} = router.query
    const PolsekName = id.split("-").join(" ")

    useEffect(() => {
      CollectionBerita.getDataBerita({start:0, img:"thumb", count:5, tag:PolsekName, flag:"all"})
      .then(res => {
        setData(res.data)
      })
    }, [PolsekName])

  return (
      <Layout title={PolsekName} lang={t} description={`Daftar Berita ${PolsekName}`}>
        <section>
          <div className="dark:bg-violet-400 bg-slate-700">
            <div className="container flex flex-col items-center px-4 py-16 pb-40 mx-auto text-center lg:pb-44 md:py-16 md:px-10 lg:px-32 dark:text-gray-900">
              <h1 className="text-5xl text-white leading-none sm:text-6xl xl:max-w-3xl font-mono uppercase font-extrabold hover:scale-110 hover:duration-300">{id.split("-").join(" ")}</h1>
              
            </div>
          </div>
          <div className='container py-5 -mt-24 bg-white dark:bg-slate-800 lg:py-10 lg:flex justify-center rounded-t-lg gap-5'>
            <div className="w-full lg:w-[730px]">
              <h1 className="title">{PolsekName}</h1>
              {data ? data.length == 0 ?
              <span className='block border border-red-500 dark:border-violet-500 dark:text-white py-5 mb-5 text-center font-semibold text-red-700'>{t("nocontent")}</span>
              : data.map((item,id) => {
                return (
                  <ListPostByCategory stuff={item} skeleton={false} key={id}/>
                )
              }) : [...Array(5)].map((item) => {
                        return <ListPostByCategory stuff={null} skeleton={true} key={item}/>
                    })
              }
            </div>
            <div className="w-full lg:w-[350px]">
              <FollowUs instagram={true} facebook={true} vimeo={true}/>
              <WidgetTab bahasa={t("widgettab", {returnObjects:true})} total={5}/>
              <WidgetKategori bahasa={t} title={t("kategori")} />
            </div>
          </div>
          {/* <img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" /> */}
        </section>
      </Layout>
  )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CollectionBerita from '../../repositories/CollectionBerita'
import FollowUs from '../../components/Organism/FollowUs'
import ListPostByCategory from '../../components/Molecules/ListPostByCategory'

export async function getServerSideProps({locale}){
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]) )
    }
  }
}