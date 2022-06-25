import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-solid-svg-icons"
import Skeleton from "react-loading-skeleton"
import moment from 'moment'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'


export default function ListPostByCategory({stuff, skeleton, bahasa}) {
    let jdl = stuff ? stuff.judul.replace(/\s+/g, '-'):""

    const gambar = () => {
      if(stuff._video0 && stuff._video0 !== ""){
        let splitData = stuff._video0.split("/")
        let imgYtb = splitData[4]
        return `https://img.youtube.com/vi/${imgYtb}/0.jpg`
        
      }else if(stuff._foto0){
        return stuff._foto0
      }else{
        return "/images/default.webp"
      }
    }

  return (
      <>
            <div className="flex gap-2 lg:gap-3 lg:card lg:card-side py-3 lg:py-3">
                {skeleton ? <Skeleton containerClassName='flex items-center w-[150px] lg:w-[300px]' className='h-[100px] lg:h-[150px]'/> :
                <div className='w-[150px] lg:w-[300px] flex items-center'>
                    <div className='shadow-xl'>
                        <Image width={300} height={200} src={skeleton ? <Skeleton /> : gambar()} alt="Gambar berita" objectFit='contain' />
                    </div>
                </div>
                }
                <div className="w-3/4">
                    <div className="flex justify-between items-center">
                        <div >
                            <small className='text-xs text-sky-500 font-semibold'><Link href={`/kategori?page=1&category=${skeleton ? "skeleton" : stuff.category_name_0}`}><a>{skeleton ? <Skeleton width={200} height={10} /> :stuff.category_name_0}</a></Link></small>
                            <small className='hidden lg:inline-block ml-2 text-xs dark:text-gray-400'>{skeleton ? "" : " | " + moment(new Date(stuff._cd.epoch_time * 1000)).local().format("DD MMMM YYYY")}</small>
                        </div>
                        <div className="flex text-gray-400 gap-1 text-xs lg:text-sm items-center">
                            {skeleton ? <Skeleton width={20}/> : <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>}
                            {skeleton ? "" : <span className='text-sm font-semibold'>{stuff.view}</span>}

                        </div>
                    </div>
                    <Link href={`/berita/${skeleton ? "#":stuff.id}/${skeleton ? "#":stuff.judul}`}><span className="cursor-pointer text-sm lg:text-[16px] font-semibold text-gray-700 dark:text-white">{skeleton ? <Skeleton /> : stuff.judul.length > 70 ? stuff.judul.substring(0, 70)+"..." : stuff.judul}</span></Link>
                    <section className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm hidden lg:block">{skeleton ? <Skeleton height={50}/> : stuff.deskripsi.length > 130 ? <ReactMarkdown>{stuff.deskripsi.substring(0, 130)}</ReactMarkdown> : <ReactMarkdown>{stuff.deskripsi}</ReactMarkdown>}</section>
                    <small className='inline-block lg:hidden text-xs dark:text-gray-400'>{skeleton ? "" : moment(new Date(stuff._cd.epoch_time * 1000)).local().format("DD MMMM YYYY")}</small>


                    <span className="hidden lg:block">
                        {skeleton ? <Skeleton width={80} height={30}/> : 
                        <Link href={`/berita/${stuff.id}/${jdl}`}>
                            <span className="cursor-pointer hidden lg:block relative w-44 mt-4 items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-sky-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-white dark:bg-slate-800 group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-sky-500 group-hover:h-full"></span>
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                {/* <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                </span>
                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                {/* <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
                                <FontAwesomeIcon icon={faEye} className="text-white"></FontAwesomeIcon>
                                </span>
                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white uppercase font-main font-semibold">{bahasa("baca")}</span>
                            </span>
                        </Link>
                        }
                    </span>
                </div>
            </div>
        
      </>
  )
}
