import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye, faHeart, faShare
} from "@fortawesome/free-solid-svg-icons"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import axios from "axios";
import Skeleton from "react-loading-skeleton"

export default function BeritaUtama({total}) {
  const [data, setData] = useState()

  useEffect(() => {
      axios.get(`https://zzfnews.herokuapp.com/api/posts?_sort=informasi.read&_order=desc&_limit=${total}`)
      .then(res => {
        setData(res.data)
      })
  }, [])


  return (
    <div className="w-full ">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper hidden lg:block"
      >
        {data ? data.map((item, id) => {
          return (
            <SwiperSlide className="" key={id}>
              <Link href={`/berita/${item.id}/${item.title}`}>
                <div className="bg-white dark:bg-slate-800 p-5 text-left w-full group cursor-pointer">
                  <h1 className="text-sm text-orange-500 uppercase font-semibold font-main"><span className="w-2 h-2 lg:w-8 bg-black dark:bg-white inline-block rounded-r-full mr-3"/>{item.category}</h1>
                  <h1 className="group-hover:underline text-2xl font-semibold text-gray-800 mt-2 dark:text-white">{item.title}</h1>
                  <div className="flex gap-3 mt-5">
                    <div className=" w-3/5">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.body}</p>
                      <div className="flex mt-5 gap-3 space-x-2">
                        <span className='flex items-center'>
                          <FontAwesomeIcon icon={faEye} className="text-orange-500 opacity-70 dark:opacity-100 mr-2"></FontAwesomeIcon>
                          <small className="text-xs text-gray-500 dark:text-gray-400">{item.informasi.read}</small>
                        </span>
                        <span className='flex items-center'>
                          <FontAwesomeIcon icon={faHeart} className="text-orange-500 opacity-70 dark:opacity-100 mr-2"></FontAwesomeIcon>
                          <small className="text-xs text-gray-500 dark:text-gray-400">{item.informasi.like}</small>
                        </span>
                        <span className='flex items-center'>
                          <FontAwesomeIcon icon={faShare} className="text-orange-500 opacity-70 dark:opacity-100 mr-2"></FontAwesomeIcon>
                          <small className="text-xs text-gray-500 dark:text-gray-400">{item.informasi.share}</small>
                        </span>
                      </div>
                    </div>
                    <div className="w-44 h-40 overflow-hidden">
                      <img src="https://source.unsplash.com/500x500?technology" alt="Gambar berita" />
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          )
        }) : 
        <>
          <SwiperSlide>
            <div className="bg-white dark:bg-slate-800 p-5 text-left w-full group cursor-pointer">
              <Skeleton width={100} />
              <Skeleton />
              <div className="flex gap-3 mt-5">
                <div className=" w-3/5">
                  <Skeleton />
                  <div className="flex mt-5 gap-3 space-x-2">
                    <Skeleton width={50}/>
                    <Skeleton width={50}/>
                    <Skeleton width={50}/>
                    
                  </div>
                </div>
                <div className="w-44 h-40 overflow-hidden">
                  {/* <img src="https://source.unsplash.com/500x500?technology" alt="Gambar berita" /> */}
                  <Skeleton width={500} height={500}/>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white dark:bg-slate-800 p-5 text-left w-full group cursor-pointer">
              <Skeleton width={100} />
              <Skeleton />
              <div className="flex gap-3 mt-5">
                <div className=" w-3/5">
                  <Skeleton />
                  <div className="flex mt-5 gap-3 space-x-2">
                    <Skeleton width={50}/>
                    <Skeleton width={50}/>
                    <Skeleton width={50}/>
                    
                  </div>
                </div>
                <div className="w-44 h-40 overflow-hidden">
                  {/* <img src="https://source.unsplash.com/500x500?technology" alt="Gambar berita" /> */}
                  <Skeleton width={500} height={500}/>
                </div>
              </div>
            </div>
          </SwiperSlide>

          
        </>
        }
      </Swiper>


      {/* Mobile */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper lg:hidden"
      >
        {data ? data.map((item, id) => {
          return (
            <SwiperSlide className="" key={id}>
              <div className="bg-white p-5 text-left w-full dark:bg-slate-800">
                <h1 className="text-xs text-orange-500 uppercase font-semibold font-main"><span className="w-5 h-2 lg:w-8 bg-black dark:bg-white inline-block rounded-r-full mr-3"/>{item.category}</h1>
                <h1 className="text-sm font-semibold text-gray-800 mt-2 dark:text-white">{item.title}</h1>
                <div className="flex gap-3 mt-5">
                  <div className=" w-3/5">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.body}</p>
                    <div className="flex mt-5 gap-3">
                      <span className='flex items-center'>
                        <FontAwesomeIcon icon={faEye} className="text-orange-500 opacity-70 dark:opacity-100 mr-2"></FontAwesomeIcon>
                        <small className="text-xs text-gray-500 dark:text-gray-400">371</small>
                      </span>
                      <span className='flex items-center'>
                        <FontAwesomeIcon icon={faHeart} className="text-orange-500 opacity-70 dark:opacity-100 mr-2"></FontAwesomeIcon>
                        <small className="text-xs text-gray-500 dark:text-gray-400">123</small>
                      </span>
                      <span className='flex items-center'>
                        <FontAwesomeIcon icon={faShare} className="text-orange-500 opacity-70 dark:opacity-100 mr-2"></FontAwesomeIcon>
                        <small className="text-xs text-gray-500 dark:text-gray-400">12</small>
                      </span>
                    </div>
                  </div>
                  <div className="w-36 h-32 overflow-hidden">
                    <img src="https://source.unsplash.com/500x500?technology" alt="Gambar berita" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        }) : 
        <h1>Memuat...</h1>
        }
        
      </Swiper>
    </div>
  );
}
