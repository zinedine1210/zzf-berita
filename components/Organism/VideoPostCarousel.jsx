import React, {Component} from 'react';
import Link from "next/link"
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"  
// import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCirclePlay, faPlay } from "@fortawesome/free-solid-svg-icons"




const thumbs = ["https://source.unsplash.com/95x70?economy", "https://source.unsplash.com/95x70?national", "https://source.unsplash.com/95x70?international"];


const postSlider = [
    {
        image: "https://source.unsplash.com/1460x1000?economy",
        title: 'Japan’s virus success has puzzled the world. Is its luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        link:"https://www.youtube.com/watch?v=KWxENcTAe1A"
    },
    {
        image: "https://source.unsplash.com/1460x1000?international",
        title: 'Japan’s virus success has puzzled the world. Is its luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        link:"https://www.youtube.com/watch?v=OrBnP6DyukE"
    },
    {
        image: "https://source.unsplash.com/1460x1000?national",
        title: 'Copa America: Luis Suarez from devastated US America',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        link:"https://www.youtube.com/watch?v=-HyqafzN8ic"
    }
];

function SampleNextArrow(props) {
    const {className, onClick} = props;
    return (
        <div onClick={onClick} className={`${className} text-sky-500 text-4xl font-bold bg-gray-200 w-10 h-10 text-center hover:scale-75 hover:duration-200 hover:ease-out rounded-full float-right absolute top-5 right-0`}>
            <FontAwesomeIcon icon={faAngleRight}/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const {className, onClick} = props;
    return (
        <div onClick={onClick} className={`${className} text-sky-500 text-4xl font-bold bg-gray-200 w-10 h-10 text-center hover:scale-75 hover:duration-200 hover:ease-out rounded-full float-left absolute top-5 left-0`}>
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
            videoId: 'https://www.youtube.com/watch?v=_9DROSpYeZc'
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    modalHandler = (value, link) => {
        console.log(link);
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
            slidesToShow: 2,
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
                            {postSlider.slice(0, 9).map((item, i) => (
                                <div key={i} className="bg-black ">
                                    <div className="">
                                        <img src={item.image} alt="thumb"/>
                                    </div>
                                    <div className="absolute bottom-10 left-5 lg:left-10 text-white">
                                        <h1 className='text-xs lg:text-xl '><span className='kotak-title'></span><span className='text-sky-500 font-main font-semibold'>{item.category}</span> | 14 mei 2020</h1>
                                        <h4 className='lg:text-5xl text-sm font-semibold'><Link className="play_btn"
                                                    href={`/berita/${item.id}/${item.title}`}>{item.title}</Link></h4>
                                        <div className="space-10"/>
                                        <p className="post-p text-xs lg:text-xl">{item.body}</p>
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
                            {thumbs.map((item, i) => (
                                <div key={i} className="">
                                    <img src={item} alt="" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                


            </div>
        );
    }
}

export default VideoPostCarousel;