import React, {useState, useEffect} from 'react'
import FollowUs from "../Organism/FollowUs"
import BeritaByKategori from "../Organism/BeritaByKategori"
import MostShared from "../Organism/MostShared"
import WidgetKategori from '../Organism/WidgetKategori'
import Link from 'next/link'
import Box from "../Molecules/Box"


export default function DetailPage({title, folder, bahasa, category, page}) {

  return (
    <main className="w-full">
        <div className='lg:flex gap-5 my-5'>
            <div className='w-full lg:w-3/4'>
                <Box title={bahasa(title)}>
                    <div className="text-sm breadcrumbs mb-5">
                        <ul>
                            <li className='dark:text-white'>
                                <Link href={`/`}>
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                        Home
                                    </a>
                                </Link>
                            </li> 
                            <li className='dark:text-white'>
                                <Link href={`/kategori`}>
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                        Kategori
                                    </a>
                                </Link>
                            </li>
                            {folder ? 
                            <li className='dark:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                {folder}
                            </li>
                            : ""}
                            <li className='dark:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                {title}
                            </li>
                        </ul>
                    </div>

                    <BeritaByKategori total={6} pagination={true} category={category} page={page}/>


                </Box>
            </div>
            <div className="w-full lg:w-1/4">
                <FollowUs instagram={true} facebook={true} youtube={true} twitter={true} vimeo={true} telegram={true}/>

                <div className="bg-white rounded-lg shadow-lg my-5 dark:bg-slate-800">
                    <MostShared title={bahasa("bagikan")} total={5}/>
                </div>

                
                <WidgetKategori bahasa={bahasa}/>

                
            </div>
        </div>
    </main>
  )
}
