
import { faEye } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Skeleton from 'react-loading-skeleton'
import Image from 'next/image'

export default function SkyScraperList({stuff, skeleton, number}) {
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
      <div className="hero">
            <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : stuff.judul}`}>
            <div className="hero-content flex-row border-t-2 border-orange-200 border-b-1 dark:border-white">
                <div className="w-[150px] lg:w-[150px] shadow-lg rounded-lg">{
                    skeleton ? <Skeleton height={80} width={150}/> : 
                    <div className='relative'>
                      <Image width={300} height={200} src={gambar()} alt="Gambar berita" objectFit='contain' />
                      <span className='absolute z-50 flex items-center justify-center left-0 top-0 w-8 h-8 text-white rounded-full bg-main-gradient font-semibold text-sm'>{number + 2}</span>
                    </div>
                }
                </div>
                <div className='w-1/2 group cursor-pointer'>
                    <h1 className="font-semibold text-xs group-hover:underline dark:text-white">{skeleton ? <Skeleton count={3} height={15} width={150}/> :stuff.judul.length > 70 ? <ReactMarkdown >{stuff.judul.substring(0, 70) + "..."}</ReactMarkdown> : <ReactMarkdown>{stuff.judul}</ReactMarkdown>}</h1>
                    <div className="flex mt-5 gap-3">
                        {skeleton ? <Skeleton width={25}/> :
                        <span className='flex items-center'>
                            <FontAwesomeIcon icon={faEye} className="text-sky-500 opacity-70 dark:opacity-100 mr-1"></FontAwesomeIcon>
                            <small className="text-xs text-gray-500 dark:text-gray-400">{stuff.view}</small>
                        </span>
                        }
                    </div>
                </div>
            </div>
            </Link>
        </div>
  )
}
