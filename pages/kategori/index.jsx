import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layouts/Layout'
import DetailPage from '../../components/Templates/DetailPage'
import { useTranslation } from 'next-i18next'


export default function Kategori() {
    const {t} = useTranslation("common")
    const router = useRouter()
    const {category, page, tag} = router.query
    const categoryName = category ? category.split("-").join(" "):""
    const tagName = tag ? tag.split("-").join(" ") :""
    const NumberPage = Number(page)
    

  return (
    <Layout title={categoryName} lang={t} description={`Berita ${categoryName}`}>
        <div className="container">
          <DetailPage title={categoryName} category={categoryName} tag={tagName} bahasa={t} page={NumberPage}/>
        </div>
    </Layout>
  )
}


import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale }) {


  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}