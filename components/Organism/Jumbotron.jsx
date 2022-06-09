import React, { useRef, useState, Component } from "react";
import Link from "next/link"
// Import Swiper React components
import axios from "axios"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";



// import required modules
import { Pagination, Navigation, EffectFade } from "swiper";

export default class Jumbotron extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:3004/posts?_sort=informasi.like&_order=desc&_limit=5")
    .then(res => {
      this.setState({
        data: res.data
      })
    })
  }


  render() {
    const data = this.state.data
    return (
      <>
      
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          effect={"fade"}
          navigation={true}
          modules={[Pagination, Navigation, EffectFade]}
          className="mySwiper"
        >
          {data.map((item, id) => {
            return (
              <SwiperSlide key={id}>
            
                <div className="z-50 absolute left-10 bottom-10 lg:bottom-24 text-white text-left w-3/4">
                  <small className="text-xl lg:text-2xl "><span className="kotak-title" /><span className=" font-bold">{item.category}</span> | {item.upload}</small>
                  <h1 className="font-bold text-3xl underline lg:text-6xl font-main"><Link href={`/berita/${item.id}/${item.title}`}><a>{item.title}</a></Link></h1>
                </div>
                <div className="overflow-hidden w-full h-[550px] bg-auto brightness-50">
                  <img src={`https://source.unsplash.com/1400x550?${item.category}`} alt="thumbnail" className="bg-auto" />
                </div>
            
              </SwiperSlide>
            )
          })}
          
        </Swiper>
      </>
    )
  }
}

