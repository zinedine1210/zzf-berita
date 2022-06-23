import React from "react"
import Layout from "../components/Layouts/Layout"
import WidgetTab from "../components/Organism/WidgetTab"
import BeritaVideo from "../components/Organism/BeritaVideo"
import VideoPostCarousel from "../components/Organism/VideoPostCarousel"
import FollowUs from "../components/Organism/FollowUs"
import BeritaSkyscraper from "../components/Organism/BeritaSkyscraper"
import { useTranslation } from "next-i18next";
import Blog from "../components/Organism/Blog"
import WidgetAds from "../components/Atoms/WidgetAds"



export default function Home() {
  const {t} = useTranslation("common")

  return (
    <Layout lang={t} title={"Home"} description="WEBSITE POLRES METRO BEKASI">
      <div className="container">
          {/* Banner */}
            <WidgetAds type={"_foto3"} position={"large"} width={1080} height={280} url={"url_3"}/>
          
      </div>
      <div className="container lg:flex gap-2">
        <div className="w-full lg:w-[730px] ">
          <VideoPostCarousel />
        </div>
        <div className="lg:w-[350px] w-full">
          <div className="text-center">
            {/* <a href="https://tvradio.polri.go.id" target="_blank" className="text-center inline-block" aria-label="radio">
              <video autoPlay loop muted>
                <source src="/images/polisiradio.webm" type="video/webm"/>
              </video>
            </a> */}

            <WidgetAds type={"_foto0"} position={"small"} width={350} height={80} url={"url_0"}/>

          {/* <Image width={340} height={76} src="/images/b02f5119-9fbd-46ed-bf68-37c1b3193539.gif" objectFit="contain" alt="Iklan" className="mb-3 text-center block mx-auto" /> */}

          </div>
          <WidgetTab bahasa={t("widgettab", {returnObjects: true})} total={5}/>
        </div>
      </div>
      
      <div className="w-full bg-main-gradient mt-6 py-10">
        <div className="container">
          <BeritaVideo total={10} bahasa={t}/>
        </div>
      </div>


      <div className="container">
        <div className="my-2">
          <WidgetAds type={"_foto1"} position={"large"} width={1080} height={200} url={"url_1"}/>
        </div>
      </div>

      <div className="container lg:flex gap-5">
        <div className="w-full lg:w-[730px]">
          <PostSlick total={12} kolom={4} title={t("terkini")}/>
          <Blog kolom={4} total={12} start={13}/>
        </div>
        <div className="lg:w-[350px] w-full mt-5 lg:mt-0">
          <FollowUs instagram={true} facebook={true} youtube={true} twitter={true} bahasa={t}/>
          <BeritaSkyscraper total={10} bahasa={t}/>
        </div>
        
        
      </div>
    </Layout>
  )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PostSlick from "../components/Organism/PostSlick"

export async function getServerSideProps({ locale }) {

  // console.log(defaultLocale, locale, req.headers);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    }
  };
}