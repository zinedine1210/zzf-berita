import { useEffect, useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import FollowUs from '../../components/Organism/FollowUs'
import CollectionYoutube from '../../repositories/CollectionYoutube'
import Skeleton from 'react-loading-skeleton'
import { setDataVideo } from '../../store/actions'
import {connect} from "react-redux"
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { useRouter } from 'next/router'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import Pagination from '../../components/Pagination'
import WidgetTab from "../../components/Organism/WidgetTab"
import axios from "axios"


async function getDetailYT(idVideo){
    const responseData = await axios.get(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${idVideo}`)

    if(responseData){
        return responseData['data']
    }
}

function Vidio(props) {
    const router = useRouter()
    const urlPath = router.pathname
    const page = router.query.page
    const {t} = useTranslation("common")
    const [data, setData] = useState(null)
    const [pagerList, setPagerList] = useState(null)
    const [total, setTotal] = useState(null)

    useEffect(() => {
        let start = 0
        let count = 3
        if(page){
            if(page > 1){
                start = (page - 1) * count
            }
        }

        if(Object.keys(props.dataVideo).length > 0 ){
            if(props.dataVideo[page]){
                setData(props.dataVideo[page].data)
                setTotal(props.dataVideo[page].total)
            }else{
                CollectionYoutube.getAllYoutube({start:start, count:count}).then(res => {

                    let obj = {
                        [page]:{
                        data: res.data,
                        total:res.total_count
                    }
                }

                setDataVideo(Object.assign(props.dataVideo, obj))

                setTotal(res.total_count)
                setData(res.data)
                })
            }
        }else{
            CollectionYoutube.getAllYoutube({start:start, count:count}).then(res => {
                

                let obj = {
                [page]:{
                    data: res.data,
                    total:res.total_count
                }
            }
                setDataVideo(Object.assign(props.dataVideo, obj))


            setTotal(res.total_count)
            setData(res.data)
            })
        }


        let countpage = Math.ceil(total / count)
        setPagerList(countpage)
    }, [page, total])



    
  return (
      <Layout lang={t} title={"Vidio"} description="Daftar Video">
          <div className="container py-10">
              <div className="w-full lg:flex justify-center gap-5">
                  <div className="w-full lg:w-[730px]">
                      <h1 className="title">Daftar Vidio</h1>
                      {data ? data.map((item, id) => {
                        const splitData = item.url.split("/")
                        const idYoutube = splitData[4]

                          return (
                            // <iframe style={{width:"100%", height:"350px"}} className="my-2" src={item.url} allowFullScreen></iframe>
                            <div className='my-5' key={id}>
                                {/* <span className='bg-sky-500 lg:text-xl text-sm font-semibold text-white'>sajs</span> */}
                                <LiteYouTubeEmbed 
                                id={idYoutube}
                                webp={true}
                                aspectHeight={400}
                                aspectWidth={730}
                                />
                                <hr className='mt-6'/>
                            </div>
                          )
                      }) : 
                      [...Array(5).keys()].map((item) => {
                          return (
                              <Skeleton height={350}/>
                          )
                      })
                      }

                      <Pagination page={page} pagerList={pagerList} query="" urlData={urlPath} />
                  </div>
                  <div className="w-full lg:w-[350px] mt-2 lg:mt-0">
                      <FollowUs instagram={true} facebook={true} twitter={true} youtube={true} bahasa={t}/>
                      <WidgetTab bahasa={t("widgettab", {returnObjects:true})} total={5}/>
                  </div>
              </div>
          </div>
      </Layout>
  )
}


const MapStateToProps = state => {
    return {
        dataVideo: state.meta.dataVideo
    }
}

export default connect(MapStateToProps, {setDataVideo})(Vidio)

export async function getServerSideProps({locale}){

    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    }
}