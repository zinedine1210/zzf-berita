import React from 'react'
import Layout from '../../components/Layouts/Layout'
import DetailPage from '../../components/Templates/DetailPage'
import { useTranslation } from 'next-i18next'

export default function Kategori(props) {
    const {t} = useTranslation("common")
    
  return (
    <Layout title={props.categoryName} lang={t} description={`Berita ${props.categoryName}`}>
        <div className="container">
          <DetailPage title={props.categoryName} category={props.categoryName} tag={props.tagName} bahasa={t} page={props.NumberPage}/>
        </div>
    </Layout>
  )
}


import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({locale, query}){
  const categoryName = query.category ? query.category.split("-").join(" ") : ""
  const tagName = query.tag ? query.tag.split("-").join(" ") :""
  const NumberPage = Number(query.page)

  return {
    props:{
      ...(await serverSideTranslations(locale, ['common'])),
      categoryName,
      tagName,
      NumberPage
    }
  }
}