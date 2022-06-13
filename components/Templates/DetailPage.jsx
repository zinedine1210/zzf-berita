import React, {useState, useEffect} from 'react'
import FollowUs from "../Organism/FollowUs"
import BeritaByKategori from "../Organism/BeritaByKategori"
import WidgetTab from "../Organism/WidgetTab"
import WidgetKategori from '../Organism/WidgetKategori'


export default function DetailPage({title, bahasa, category, page, categoryId}) {

  return (
    <main className="w-full">
        <div className='lg:flex gap-5 py-5'>
            <div className='w-full lg:w-[730px] mb-5 lg:mb-0'>
                <BeritaByKategori total={6} pagination={true} category={category} page={page} title={title} categoryId={categoryId}/>
            </div>
            <div className="w-full lg:w-[350px]">
                <FollowUs instagram={true} facebook={true} youtube={true} twitter={true} vimeo={true} telegram={true}/>

                <div className="bg-white rounded-lg shadow-lg my-5 dark:bg-slate-800">
                    <WidgetTab bahasa={bahasa("widgettab", {returnObjects:true})} total={8}/>
                </div>

                
                <WidgetKategori bahasa={bahasa} title={bahasa("kategori")}/>

                
            </div>
        </div>
    </main>
  )
}
