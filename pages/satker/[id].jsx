import React, { useEffect, useState } from 'react'
import Layout from "../../components/Layouts/Layout"
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import CollectionSatuanFungsi from "../../repositories/CollectionSatuanFungsi"
import SatuanFungsiList from '../../components/Molecules/SatuanFungsiList';
import {wrapper} from "../../store/store"
import {setDataSatuanFungsi} from "../../store/actions"
import lodash from "lodash"

function SatuanFungsiPage(props) {
    const {t} = useTranslation("common")
    const {satuanfungsiName, satuanfungsi} = props

    
  return (
      <Layout lang={t} title={`${satuanfungsi}`} description={`Satuan Fungsi ${satuanfungsi} Polres Metro Bekasi`}>
          {props.dataSatuanFungsi ? 
            <SatuanFungsiList skeleton={false} stuff={props.dataSatuanFungsi[0]} lang={t} title={satuanfungsiName}/>
            :
            <SatuanFungsiList skeleton={true} stuff={null} lang={t} title={satuanfungsiName}/>
          }
      </Layout>
  )
}




import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({query, locale}) => {
  
  const satuanfungsi = query.id.split("-").join(" ")
  const satuanfungsiName = query.name.split("-").join(" ")
  let allData = store.getState().meta.dataSatuanFungsi
    let findOne = allData.filter(res => res.title == satuanfungsi)
    let dataSatuanFungsi = []
    let redirect = null
    if(findOne.length !== 0 ){
        dataSatuanFungsi = findOne
    } else {
        let responseData = await CollectionSatuanFungsi.getOneSatuanFungsi({id:satuanfungsi, img:"thumb"})
      
        if(responseData['data'].length !== 0){
            responseData.data[0]['_foto0'] = responseData.data[0]['_foto0'].replace("thumb/", "")
            store.dispatch(setDataSatuanFungsi(lodash.concat(allData, responseData['data'])))
            dataSatuanFungsi = responseData['data']   
            console.log("ini dari api =",responseData['data'])
        } else {
            redirect =  {
                destination: '/404',
                permanent: false,
            }
        }
    }


    if(dataSatuanFungsi.length !== 0){
      return {
        props: {
          ...(await serverSideTranslations(locale, ['common'])),
          // Will be passed to the page component as props
          satuanfungsi,
          allData,
          dataSatuanFungsi,
          satuanfungsiName
        },
      };

    }else{
      return {
        redirect: {
          destination: "/404",
          permanent: false
        }
      }
    }

})



export default SatuanFungsiPage