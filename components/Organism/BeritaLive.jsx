import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import axios from 'axios';
import BeritaLiveListRight from '../Molecules/BeritaLiveListRight';
import BeritaLiveListLeft from '../Molecules/BeritaLiveListLeft';


export default function BeritaLive({total}) {
    const [data, setData] = useState(null)
    const [data2, setData2] = useState(null)
    const [active, setActive] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            axios.get(`http://localhost:3004/posts?_order=desc&_sort=informasi.like&_limit=${total}&_page=1`)
            .then(res => {
                setData(res.data)
            })

            axios.get(`http://localhost:3004/posts?_order=desc&_sort=informasi.read&_limit=${total}&category=Internasional`)
            .then(res => {
                setData2(res.data)
            })

        }, 8000);
    })

    const setMount = (category) => {
            axios.get(`http://localhost:3004/posts?_order=desc&_sort=informasi.read&_limit=${total}&category=${category}`)
            .then(res => {
                setData2(res.data)
            })
    }

    const setPage = (page) => {
            axios.get(`http://localhost:3004/posts?_order=desc&_sort=informasi.like&_limit=${total}&_page=${page}`)
            .then(res => {
                setData(res.data)
            })
    }

  return (
      <div className="w-full">
          <section className="px-5 py-10 bg-white dark:bg-gray-800 text-gray-100 rounded-lg shadow-lg">
            <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
                <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
                    <div className="flex flex-col space-y-8 md:space-y-12">

                        {data ?
                        data.map((item, id) => {
                            return <BeritaLiveListLeft stuff={item} key={id} skeleton={false}/>
                        }) :
                        [...Array(total).keys()].map(item => {
                            return <BeritaLiveListLeft stuff={null} key={item} skeleton={true} />
                        })
                        }
                        
                    </div>
                    <div className="flex flex-col w-full space-y-2">
                        <div className="flex w-full h-1 bg-opacity-10 bg-orange-500 dark:bg-violet-400">
                            <div className="w-1/2 h-full bg-orange-500 dark:bg-violet-400"></div>
                        </div>
                        <button onClick={() => setPage(active == 1 ? 2 : 1)} className="flex items-center justify-between w-full">
                            <span className="text-xs font-bold tracking-wider uppercase dark:text-gray-300 text-gray-700">See more exclusives</span>
                            <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent text-violet-400">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" style={{backgroundImage: "url('https://source.unsplash.com/random/239x319');"}}>
                    <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 border-orange-400 dark:border-violet-400 text-gray-100">paris, france</span>
                    <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group via-transparent flex-grow-1 bg-gradient-to-b from-gray-900 to-gray-900">
                        <span className="flex items-center mb-4 space-x-2 text-white dark:text-violet-400">
                            <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-orange-500 dark:bg-violet-400">
                                <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-orange-500 dark:bg-violet-400"></span>
                            </span>
                            <span className="text-sm font-bold">Live</span>
                        </span>
                        <h1 rel="noopener noreferrer" href="#" className="font-serif text-2xl font-semibold group-hover:underline text-gray-100">Morbi mattis justo est, ac consectetur dui eleifend vitae. Donec venenatis?</h1>
                    </a>
                </div>
                <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                    <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-violet-400">
                        <button type="button" onClick={() => setMount("Internasional")} className="pb-5 text-xs font-bold uppercase border-b-2 border-orange-400 dark:border-violet-400 text-gray-700 dark:text-gray-300">Internasional</button>
                        <button type="button" onClick={() => setMount("Nasional")} className="pb-5 text-xs font-bold uppercase border-b-2 border-transparent text-gray-400">Nasional</button>
                    </div>


                    {data ? 
                    data.map((item, id) => {
                        return <BeritaLiveListRight stuff={item} key={id} skeleton={false}/>
                    })
                    :
                    [...Array(total).keys()].map(item => {
                        return <BeritaLiveListRight stuff={null} skeleton={true} key={item} />
                    })
                    }
                </div>
            </div>
        </section>
      </div>
  )
}
