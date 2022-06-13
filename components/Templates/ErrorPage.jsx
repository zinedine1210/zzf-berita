import React from 'react'
import Layout from "../Layouts/Layout"
import Archive from "../Organism/Archive"
import FollowUs from '../Organism/FollowUs'
import WidgetTab from '../Organism/WidgetTab'
import MostShared from "../Organism/MostShared"
import NotFoundPage from "../Molecules/NotFoundPage"
import Box from "../Molecules/Box"

export default function ErrorPage({bahasa}) {
  return (
      <Layout title={"Halaman Tidak Ditemukan"} description="Halaman Tidak Ditemukan" lang={bahasa}>
        <section className="lg:flex items-center h-full lg:p-16 text-gray-500 dark:text-gray-400">
            <div className="container lg:flex flex-col items-center justify-center lg:px-24 mx-auto my-8">
                <NotFoundPage bahasa={bahasa}/>
                
                <div className="lg:flex gap-5 justify-center">
                    <div className='lg:w-[730px] w-full'>
                    </div>
                    <div className='w-full lg:w-[350px]'>
                        <FollowUs instagram={true} facebook={true} youtube={true} twitter={true} vimeo={true} telegram={true}/>

                        <WidgetTab bahasa={bahasa("widgettab", {returnObjects:true})} total={5}/>
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow lg my-5">
                            <MostShared title={bahasa("bagikan")} total={5}/>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    </Layout>
  )
}
