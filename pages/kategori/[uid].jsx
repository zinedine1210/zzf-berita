import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layouts/Layout'
import DetailPage from '../../components/Templates/DetailPage'
import { useTranslation } from 'next-i18next'


export default function Kategori() {
    const {t} = useTranslation("common")
    const router = useRouter()
    const {uid, category, page, tag} = router.query
    const categoryName = category.split("-").join(" ")

  return (
    <Layout title={categoryName} lang={t} description={`Berita ${categoryName}`}>
        <div className="container">
          <DetailPage title={categoryName} categoryId={uid} category={categoryName} tag={tag} bahasa={t} page={page}/>
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