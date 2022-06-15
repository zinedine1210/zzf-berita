import React from 'react'
import ErrorPage from "../../components/Templates/ErrorPage"
import { useTranslation } from 'next-i18next'



export default function index() {
  const {t} = useTranslation("common")


  return (
      <ErrorPage bahasa={t} />
  )
}


import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ defaultLocale }) {


  return {
    props: {
      ...(await serverSideTranslations(defaultLocale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}
