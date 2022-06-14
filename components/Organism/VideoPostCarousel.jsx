import React, {Component} from 'react';
import Link from "next/link"
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"
import {connect} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCirclePlay, faPlay } from "@fortawesome/free-solid-svg-icons"
import CollectionBerita from '../../repositories/CollectionBerita';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import { setDataAll, setDataSlideUtama} from '../../store/actions';
import ReactMarkdown from 'react-markdown';
import lodash from "lodash"


async function getSlideData(props){
    if(props.dataSlideUtama.length !== 0){
        return props.dataSlideUtama
    }else{
        const Response = await CollectionBerita.getDataBerita({start:0, count:20, flag:"Headline News", img:"t"})
        let allData = props.dataAll
        if(Response){
            props.setDataSlideUtama(Response['data'])
            // props.setDataAll(lodash.unionBy(allData, Response['data'], "id"))
            return Response['data']
        }

    }
}

function SampleNextArrow(props) {
    const {className, onClick} = props;
    return (
        <div onClick={onClick} className={`${className} z-20 text-sky-500 text-4xl font-bold bg-gray-200 w-10 h-10 text-center hover:scale-75 hover:duration-200 hover:ease-out rounded-full float-right absolute top-5 right-0`}>
            <FontAwesomeIcon icon={faAngleRight}/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const {className, onClick} = props;
    return (
        <div onClick={onClick} className={`${className} z-20 text-sky-500 text-4xl font-bold bg-gray-200 w-10 h-10 text-center hover:scale-75 hover:duration-200 hover:ease-out rounded-full float-left absolute top-5 left-0`}>
            <FontAwesomeIcon icon={faAngleLeft}/>
        </div>
    );
}

class VideoPostCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            vModal: false,
            videoId: 'https://www.youtube.com/watch?v=_9DROSpYeZc',
            postSlider: []
        };
    }

    componentDidMount() {
        getSlideData(this.props).then(res => {
            this.setState({postSlider:res})
        })
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    modalHandler = (value, link) => {
        this.setState({
            vModal: value,
            videoId: link
        })
    };

    render() {
        const {className} = this.props;
        const {nav1, nav2, vModal, videoId} = this.state;

        const navSettings = {
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            slidesToShow: 6,
            swipeToSlide: true,
            focusOnSelect: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 8,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                    }
                },
            ]
        };

        return (
            <div className={` ${className}`}>
                <div className="w-full">
                    <div className="slider_demo2">
                        <Slider
                            asNavFor={nav2}
                            arrows={false}
                            fade={true}
                            ref={slider => (this.slider1 = slider)}
                        >
                            {this.state.postSlider.slice(0, 20).map((item, i) => (
                                <div key={i} className="bg-black ">
                                    <div className="">
                                        <img src={item._foto0} alt="thumb" className=''/>
                                    </div>
                                    <div className="absolute bottom-10 left-5 lg:left-10 text-white">
                                        <h1 className='text-xs lg:text-xl '><span className='kotak-title'></span><span className='text-sky-500 font-main font-semibold'>{item ? item.category_name_0 : <Skeleton />}</span> | {moment(new Date(item._cd.epoch_time * 1000)).local().format("DD MMMM YYYY")}</h1>
                                        <Link href={`/berita/${item.id}/${item.judul}`}><h4 className='lg:text-2xl text-sm font-semibold cursor-pointer'>{item.judul}</h4></Link>
                                        <div className="space-10"/>
                                        <p className="post-p text-xs lg:text-sm">{item.deskripsi.length > 200 ? <ReactMarkdown>{item.deskripsi.substring(0,200)+"..."}</ReactMarkdown> : <ReactMarkdown>{item.deskripsi}</ReactMarkdown>}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="relative">
                        <Slider
                            ref={slider => (this.slider2 = slider)}
                            asNavFor={nav1}
                            {...navSettings}
                            className=""
                        >
                            {this.state.postSlider.map((item, i) => (
                                <div key={i} className="">
                                    <img src={item._foto0} alt={item._foto0} className="w-[100px]" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                


            </div>
        );
    }
}

const MapStateToProps = state => {
    return {
        dataAll: state.meta.dataAll,
        dataSlideUtama: state.meta.dataSlideUtama
    }
}

export default connect(MapStateToProps, {setDataAll, setDataSlideUtama})(VideoPostCarousel);