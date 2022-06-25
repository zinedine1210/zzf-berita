import ReactMarkdown from "react-markdown"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faLine,
    faTelegram,
    faTwitter,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";
import {
    FacebookShareButton,
    LineShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton
  } from "react-share";


  
import { hostName } from '../../repositories/Repository'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function Articles({ stuff, skeleton }) {

    const gambar = () => {
        if (stuff._video0 && stuff._video0 !== "") {
            let splitData = stuff._video0.split("/")
            let imgYtb = splitData[4]
            return `https://img.youtube.com/vi/${imgYtb}/0.jpg`
            
        } else if (stuff._foto0) {
            return stuff._foto0
        } else {
            return "/images/default.webp"
        }
    }


    return (
        <article className="space-y-3 text-gray-600">
            <div className="space-y-2">
                <h1 className="text-xl lg:text-3xl font-bold md:tracking-tight md:text-5xl dark:text-white">{skeleton ? <Skeleton height={50} /> : stuff.judul}</h1>
                
                <p className='text-xs lg:text-sm text-gray-600 dark:text-gray-300 flex justify-between'>
                    <div>
                        <span className="text-light hidden lg:inline-block">Penulis</span>
                        <span className="uppercase font-semibold ml-1">{skeleton ? <Skeleton width={100} height={10} /> : stuff.nama}</span>
                        
                    </div>
                    <span className="text-sm font-semibold"><FontAwesomeIcon icon={faEye} className="mr-1" />{skeleton ? "" : stuff.view}</span></p>
                    {skeleton ? <Skeleton height={767} /> :
                        <div className='my-2'>
                            <Image objectFit='contain' width={767} height={512} src={gambar()} alt="Gambar berita"/>
                        </div>
                    }
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600 dark:text-gray-300">
                    <div className="flex items-center md:space-x-2">
                        <Link href={`/kategori?page=1&category=${skeleton ? "#":stuff.category_name_0}`}
                        ><span className="cursor-pointer text-xs lg:text-xl text-sky-500 font-semibold">{skeleton ? <Skeleton width={50} height={10} inline={true} /> : stuff.category_name_0}</span></Link>
                        <span className="mx-1 text-xs">{skeleton ? <Skeleton width={50} height={10}/> :" - " + moment(new Date(stuff._cd.epoch_time * 1000)).local().format("DD MMMM YYYY, HH:mm")}</span>
                        
                    </div>
                    <p className="flex-shrink-0 mt-3 text-sm md:mt-0 items-center flex">
                        <span className="text-sm font-light uppercase mr-2 hidden lg:inline-block">Bagikan</span>
                        {skeleton ? <Skeleton width={30} height={30} circle={true} inline={true} /> :
                            <TelegramShareButton
                                url={`${hostName}/berita/${stuff.id}/${stuff.judul.split(" ").join("-")}`}
                                title={stuff.judul}
                            >
                            <FontAwesomeIcon icon={faTelegram} className="text-blue-500 text-xl lg:text-2xl mx-1"/>
                            </TelegramShareButton>
                        }
                        {skeleton ? <Skeleton width={30} height={30} circle={true} inline={true} /> :
                            <TwitterShareButton
                                url={`${hostName}/berita/${stuff.id}/${stuff.judul.split(" ").join("-")}`}
                                hashtags={["#polresbekasi"]}
                                title={stuff.judul}
                            >
                            <FontAwesomeIcon icon={faTwitter} className="text-sky-500 text-xl lg:text-2xl mx-1"/>
                            </TwitterShareButton>
                        }
                        {skeleton ? <Skeleton width={30} height={30} circle={true} inline={true} /> :
                            <LineShareButton
                                url={`${hostName}/berita/${stuff.id}/${stuff.judul.split(" ").join("-")}`}
                                title={stuff.judul}
                            >
                                <FontAwesomeIcon icon={faLine} className="text-green-500 mx-1 text-xl lg:text-2xl"/>
                            </LineShareButton>
                        }
                        {skeleton ? <Skeleton width={30} height={30} circle={true} inline={true} /> :
                            <FacebookShareButton
                                url={`${hostName}/berita/${stuff.id}/${stuff.judul.split(" ").join("-")}`}
                                quote={stuff.judul}
                                hashtag={"polresbekasi"}
                                title={stuff.judul}
                            >
                                <FontAwesomeIcon icon={faFacebook} className="text-blue-700 text-xl lg:text-2xl mx-1" />
                            </FacebookShareButton>
                        }

                        {skeleton ? <Skeleton width={30} height={30} circle={true} inline={true} /> :
                            <WhatsappShareButton
                                url={`${hostName}/berita/${stuff.id}/${stuff.judul.split(" ").join("-")}`}
                                title={stuff.judul}
                                separator=":: "
                            >
                                <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 mx-1 text-xl lg:text-2xl"/>
                            </WhatsappShareButton>
                        }

                        
                    </p>
                </div>
            </div>

            {/* main content */}
            <div className="text-gray-600 dark:text-gray-300">
                <section><ReactMarkdown className='leading-relaxed reactmarkdown'>{skeleton ? <Skeleton count={100} /> : stuff.deskripsi}</ReactMarkdown></section>
            </div>



        </article>
    )
}
