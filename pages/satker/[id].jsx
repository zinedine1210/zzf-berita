import React, { useEffect, useState } from 'react'
import Layout from "../../components/Layouts/Layout"
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import CollectionSatuanFungsi from "../../repositories/CollectionSatuanFungsi"
import SatuanFungsiList from '../../components/Molecules/SatuanFungsiList';


export default function SatuanFungsi() {
    const {t} = useTranslation("common")
    const router = useRouter()
    const {id, name} = router.query
    const [data, setData] = useState(null)
    const satuanfungsi = id.split("-").join(" ")
    const satuanfungsiName = name.split("-").join(" ")


    useEffect(() => {
      CollectionSatuanFungsi.getOneSatuanFungsi({id:satuanfungsi, img:"thumb"})
      .then(res => {
        setData(res.data[0])
      })
    }, [satuanfungsi])
    
  return (
      <Layout lang={t} title={`${satuanfungsi}`} description={`Satuan Fungsi ${satuanfungsi} Polres Metro Bekasi`}>
          {data ? 
            <SatuanFungsiList skeleton={false} stuff={data} lang={t} title={satuanfungsiName}/>
            :
            <SatuanFungsiList skeleton={true} stuff={null} lang={t} title={satuanfungsiName}/>
          }
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