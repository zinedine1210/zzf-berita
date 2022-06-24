import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import moment from "moment"
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

export default function List({stuff, skeleton}) {

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
      <div className='mb-2 lg:mb-8 flex lg:block gap-3 items-center justify-center'>
            <div className="w-1/3 lg:w-full">
              {skeleton ? <Skeleton className='h-[80px] lg:h-[120px]'/> :
              <div className='bg-gray-100 shadow-md w-full'>
                <Image src={skeleton ? "/images/default.webp" : gambar()} alt="Gambar berita" width={300} height={200} objectFit="contain" />

              </div>
              }
            </div>
            <div className='w-2/3 lg:w-full'>
              <p className="text-sm lg:mt-5 mb-2 lg:text-xs"><span className='text-sky-500 font-main font-bold text-xs'>{skeleton ? <Skeleton inline={true} width={50} height={10}/> : stuff.category_name_0}</span> {skeleton ? <Skeleton inline={true} width={50} height={10} /> : " / " + moment(new Date(stuff._cd.epoch_time*1000)).local().format("DD MMMM YYYY")}</p>
              <Link href={`/berita/${skeleton ? "skeleton" : stuff.id}/${skeleton ? "skeleton" : stuff.judul}`}><h1 className="text-sm font-semibold dark:text-white cursor-pointer">{skeleton ? <Skeleton height={20} count={2}/> : stuff.judul.length > 50 ? <ReactMarkdown>{stuff.judul.substring(0, 50)+"..."}</ReactMarkdown> : <ReactMarkdown>{stuff.judul}</ReactMarkdown>}</h1></Link>
              <section className='text-xs text-gray-500 dark:text-gray-400 mt-2'>{skeleton ? <Skeleton count={3} height={10}/> : stuff.deskripsi.length > 80 ? <ReactMarkdown>{stuff.deskripsi.substring(0, 80)+"..."}</ReactMarkdown> : <ReactMarkdown>{stuff.deskripsi}</ReactMarkdown>}</section>
            </div>
        </div>
  )
}
