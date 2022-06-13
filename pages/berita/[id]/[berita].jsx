import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Article from "../../../components/Molecules/Articles"
import { useTranslation } from 'next-i18next'
import FollowUs from "../../../components/Organism/FollowUs"
import WidgetTab from "../../../components/Organism/WidgetTab"
import RelatedPost from "../../../components/Atoms/RelatedPost"

export default function Berita() {
  const router = useRouter()
  const {t} = useTranslation("common")
  const {id, berita} = router.query
  const beritaName = berita.split("-").join(" ")
  const [data, setData] = useState(null)

  useEffect(() => {
    CollectionBerita.getOneDataBerita({id:id, img:"t"})
    .then(res => {
      console.log(res.data[0])
      setData(res.data[0])
    })
  }, [id])

  return (
    <Layout lang={t} title={beritaName} description={beritaName}>
      <div className="container flex pt-10 gap-5">
        <div className="w-full lg:w-[730px]">
          {data ? 
            <Article stuff={data} skeleton={false}/> : 
            <Article stuff={null} skeleton={true}/>
          }
          <RelatedPost stuff={data ? data.tag : null}/>
        </div>
        <div className="w-full lg:w-[350px]">
          <FollowUs instagram={true} facebook={true} youtube={true}/>
          <WidgetTab bahasa={t("widgettab", {returnObjects:true})} total={6}/>
        </div>
      </div>
    </Layout>
  )
}


import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../../components/Layouts/Layout'
import CollectionBerita from '../../../repositories/CollectionBerita'

export async function getServerSideProps({ locale }) {


  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}