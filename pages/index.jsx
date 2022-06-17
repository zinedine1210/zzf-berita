import React from "react"
import Layout from "../components/Layouts/Layout"
import WidgetTab from "../components/Organism/WidgetTab"
import BeritaVideo from "../components/Organism/BeritaVideo"
import VideoPostCarousel from "../components/Organism/VideoPostCarousel"
import FollowUs from "../components/Organism/FollowUs"
import BeritaSkyscraper from "../components/Organism/BeritaSkyscraper"
import { useTranslation } from "next-i18next";
import Image from "next/image"


export default function Home() {
  const {t} = useTranslation("common")

  return (
    <Layout lang={t} title={"Home"} description="WEBSITE POLRES METRO BEKASI">
      <div className="container">
          {/* Banner */}
          <Image width={1200} height={260} src="/images/145ae4e5-c5fe-468c-9378-398493e88141.jpg" className='py-2' alt="Banner" />
      </div>
      <div className="container lg:flex gap-5">
        <div className="w-full lg:w-[730px] ">
          <VideoPostCarousel />
        </div>
        <div className="lg:w-[350px] w-full">
          <img src="/images/b02f5119-9fbd-46ed-bf68-37c1b3193539.gif" alt="Iklan" className="mb-3 text-center block mx-auto" />
          <WidgetTab bahasa={t("widgettab", {returnObjects: true})} total={5}/>
        </div>
      </div>
      
      <div className="w-full bg-main-gradient mt-6 py-10">
        <div className="container">
          <BeritaVideo total={10}/>
        </div>
      </div>


      <div className="container">
          <img src="/images/8baf0cde-85f9-46e6-8553-0426c775eb61.jpg" alt="Iklan" className="my-2" />
      </div>

      <div className="container lg:flex gap-5">
        <div className="w-full lg:w-[730px]">
          <PostSlick total={24} kolom={6} title={"Berita Terkini"}/>
        </div>
        <div className="lg:w-[350px] w-full">
          <FollowUs instagram={true} facebook={true} youtube={true} twitter={true}/>
          <BeritaSkyscraper category={"PERISTIWA"} total={10}/>
        </div>
        
      </div>
    </Layout>
  )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PostSlick from "../components/Organism/PostSlick"

export async function getServerSideProps({ locale }) {


  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    }
  };
}