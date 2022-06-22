import Image from 'next/image'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import ReactMarkdown from 'react-markdown'
import Blog from "../Organism/Blog"

export default function SatuanFungsiList({stuff, skeleton, lang, title}) {

  return (
    <section className="dark:bg-slate-800 dark:text-gray-100">
        <div className="container max-w-xl py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">


          <section className="bg-white dark:bg-slate-800">
              <div className="container py-10 mx-auto">
                  
                  <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
                      <div className="w-full lg:w-1/2">
                          <small className='text-xl lg:text-xl text-gray-500 dark:text-gray-300 uppercase mb-8 font-mono inline-block'>{skeleton ? <Skeleton height={10} width={30}/> : stuff.title}</small>
                          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">{skeleton ? <Skeleton /> : title}</h1>
                          
                          <div className="mt-2 mb-14">
                              <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                              <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                              <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                          </div>
                          <h1 className='text-sm lg:text-xl dark:text-white mb-5'>{skeleton ? <Skeleton height={10} count={2}/> : stuff.header_content}</h1>
                          <p className='text-sm lg:text-sm dark:text-gray-300 text-gray-600'>{skeleton ? <Skeleton height={8} count={10}/> : stuff.content }</p>
                      </div>

                      <div className="bg-slate-700 rounded-full w-56 h-56 mx-auto flex items-center justify-center mt-10 lg:flex lg:w-1/2 lg:bg-transparent">
                          <Image width={554} height={397} objectFit="contain" src={skeleton ? <Skeleton /> : stuff._foto0} alt="Gambar logo" />
                      </div>
                  </div>
              </div>
          </section>
        
        </div>

        <section className='bg-main-gradient text-white py-10 w-full'>
          <div className="container">
            <h1 className='text-white font-bold font-mono text-2xl lg:text-4xl uppercase'>{lang("job")}</h1>
            <p className='text-white font-thin font-mono text-xl lg:text-xl uppercase'>{title}</p>
          </div>
        </section>

        <div className="container mt-10">
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <Image src="https://source.unsplash.com/360x480?police" width={360} height={480} alt="Gambar polisi" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
            </div>
            <div>
              <section className="mt-3 text-lg dark:text-gray-400"><ReactMarkdown className='lineHeight'>{skeleton ? <Skeleton count={5} height={5}/> : stuff.job_description }</ReactMarkdown></section>
              {/* {stuff.job_description} */}
            </div>
          </div>

          <div className="w-full mt-20">
              <h1 className="title uppercase inline-block mb-5">Kegiatan {skeleton ? <Skeleton /> : stuff.title}</h1>
              <Blog kolom={4} total={20} tag={skeleton ? "" : stuff.id}/>
          </div>
        </div>



    </section>
  )
}
