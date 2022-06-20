import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Article from "../../../components/Molecules/Articles"
import { useTranslation } from 'next-i18next'
import FollowUs from "../../../components/Organism/FollowUs"
import WidgetTab from "../../../components/Organism/WidgetTab"
import { setDataAll } from '../../../store/actions'
import RelatedPost from "../../../components/Atoms/RelatedPost"
import lodash from "lodash"



function Berita(props) {
  const router = useRouter()
  const {t} = useTranslation("common")
  const {id, berita} = router.query
  const beritaName = berita.split("-").join(" ")
  const [data, setData] = useState(null)

  useEffect(() => {
    let allData = props.dataAll
    let findOne = allData.filter(res => res.id == id)
    if(allData.length > 0){
      if(findOne.length > 0){
        setData(findOne[0])
        console.log("redux");
      }else{
        CollectionBerita.getOneDataBerita({id:id, img:"t"})
        .then(res => {
          props.setDataAll(lodash.unionBy(allData, res.data[0], "id"))
          setData(res.data[0])
        })
      }
    }else{
      CollectionBerita.getOneDataBerita({id:id, img:"t"})
      .then(res => {
        props.setDataAll(lodash.unionBy(allData, res.data[0], "id"))
        setData(res.data[0])
      })
    }
  }, [id])

  return (
    <Layout lang={t} title={beritaName} description={beritaName}>
      <div className="container lg:flex pt-10 gap-5">
        <div className="w-full lg:w-[730px]">
          {data ? 
            <Article stuff={data} skeleton={false}/> : 
            <Article stuff={null} skeleton={true}/>
          }
          <RelatedPost stuff={data ? data.tag : null}/>
        </div>
        <div className="w-full lg:w-[350px]">
          <FollowUs instagram={true} facebook={true} youtube={true} twitter={true}/>
          <WidgetTab bahasa={t("widgettab", {returnObjects:true})} total={6}/>
        </div>
      </div>
    </Layout>
  )
}


const MapStateToProps = state => {
  return {
    dataAll: state.meta.dataAll
  }
}

export default connect(MapStateToProps, {setDataAll})(Berita)

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../../components/Layouts/Layout'
import CollectionBerita from '../../../repositories/CollectionBerita'
import { connect } from 'react-redux'

export async function getServerSideProps({ locale }) {


  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}