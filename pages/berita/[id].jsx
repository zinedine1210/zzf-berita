import React from 'react'
import { useRouter } from 'next/router'
import Layout from "../../components/Layouts/Layout"
import { useTranslation } from 'next-i18next'
import DetailPage from "../../components/Templates/DetailPage"

export default function Category() {
  const {t} = useTranslation("common")
    const router = useRouter()
    const {id, page} = router.query


  return (
      <Layout title={id} >
          <DetailPage title={id} category={id} bahasa={t} page={page}/>
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