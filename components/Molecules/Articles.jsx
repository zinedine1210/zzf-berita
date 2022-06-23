import React from 'react'
import Link from 'next/link'
import ReactMarkdown from "react-markdown"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram,
    faInstagramSquare,
    faTwitter,
    faWhatsapp,
    faYoutube
} from "@fortawesome/free-brands-svg-icons"

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
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
        <article className="space-y-8 text-gray-600">
            <div className="space-y-6">
                <h1 className="text-xl lg:text-3xl font-bold md:tracking-tight md:text-5xl dark:text-white">{skeleton ? <Skeleton height={50} /> : stuff.judul}</h1>
                
                <p className='text-xs lg:text-sm text-gray-500 dark:text-gray-400 flex justify-between uppercase'><span>{skeleton ? <Skeleton count={2} /> : stuff.nama}</span> <span><FontAwesomeIcon icon={faEye} className="mr-1" />{skeleton ? "" : stuff.view}</span></p>
                {skeleton ? <Skeleton height={767} /> :
                    <div className='my-2'>
                        <Image objectFit='contain' width={767} height={512} src={gambar()} alt="Gambar berita"/>
                    </div>
                }
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
                    <div className="flex items-center md:space-x-2">
                        <p className="text-sm"><span className='text-sky-500 font-semibold'>{skeleton ? <Skeleton width={50} height={10} inline={true} /> : stuff.category_name_0}</span> • {skeleton ? "" : moment(new Date(stuff._cd.epoch_time * 1000)).local().format("DD MMMM YYYY")}</p>
                    </div>
                    <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                        {skeleton ? <Skeleton width={30} height={30} circle={true} inline={true} /> :
                            <TwitterShareButton
                                url={`${hostName}/berita/${stuff.id}/${stuff.judul}`}
                                hashtags={["#polresbekasi"]}
                                title={stuff.judul}
                            >
                            <FontAwesomeIcon icon={faTwitter} className="text-sky-500 text-2xl mx-1"/>
                            </TwitterShareButton>
                        }
                        {skeleton ? <Skeleton width={30} height={30} circle={true} inline={true} /> :
                            <FacebookShareButton
                                url={`${hostName}/berita/${stuff.id}/${stuff.judul}`}
                                quote={stuff.judul}
                                hashtag={"polresbekasi"}
                                title={stuff.judul}
                            >
                                <FontAwesomeIcon icon={faFacebook} className="text-blue-700 text-2xl mx-1" />
                            </FacebookShareButton>
                        }
                        {/* {skeleton ? <Skeleton width={30} height={30} circle={true} inline={true} /> :
                            <Link href={"/"}>
                                <span className='mx-1 cursor-pointer'><FontAwesomeIcon icon={faInstagram} className="text-blue-900 text-2xl" /></span>
                            </Link>
                        } */}

                        {skeleton ? <Skeleton width={30} height={30} circle={true} inline={true} /> :
                            <WhatsappShareButton
                                url={`${hostName}/berita/${stuff.id}/${stuff.judul}`}
                                title={stuff.judul}
                                separator=":: "
                            >
                                <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 mx-1 text-2xl"/>
                            </WhatsappShareButton>
                        }
                    </p>
                </div>
            </div>

            {/* main content */}
            <div className="text-gray-500 dark:text-gray-400">
                <section><ReactMarkdown className='leading-relaxed'>{skeleton ? <Skeleton count={100} /> : stuff.deskripsi}</ReactMarkdown></section>
            </div>



        </article>
    )
}
