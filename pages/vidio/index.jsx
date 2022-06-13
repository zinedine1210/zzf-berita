import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import FollowUs from '../../components/Organism/FollowUs'
import CollectionYoutube from '../../repositories/CollectionYoutube'
import Skeleton from 'react-loading-skeleton'



export default function Vidio() {
    const {t} = useTranslation("common")
    const [data, setData] = useState(null)
    useEffect(() => {
        CollectionYoutube.getAllYoutube({start:0, count:5}).then(res => {
          setData(res.data)  
        })
    }, [])


  return (
      <Layout lang={t} title={"Vidio"} description="Daftar Video">
          <div className="container py-10">
              <div className="w-full lg:flex justify-center gap-5">
                  <div className="w-full lg:w-[730px]">
                      <h1 className="title">Daftar Vidio</h1>
                      {data ? data.map((item, id) => {
                          return (
                            <iframe style={{width:"100%", height:"350px"}} className="my-2" src={item.url} allowFullScreen></iframe>
                              
                          )
                      }) : 
                      [...Array(5)].map((item) => {
                          return (
                              <Skeleton height={350}/>
                          )
                      })
                      }
                  </div>
                  <div className="w-full lg:w-[350px]">
                      <FollowUs instagram={true} facebook={true} twitter={true}/>
                  </div>
              </div>
          </div>
      </Layout>
  )
}

export async function getServerSideProps({locale}){
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    }
}