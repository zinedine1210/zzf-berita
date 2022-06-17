import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

export default function SearchTop({bahasa}) {
    const router = useRouter()
    const [keyword, setKeyword] = useState("")



    const searchAction = (e) => {
        e.preventDefault()
        router.push(`/search?page=1&keyword=${keyword}`)
        setKeyword("")
    }


  return (
      <div className='hidden w-full' id='search'>
        <form onSubmit={searchAction} className='w-full flex items-center justify-between mt-2 bg-sky-500 dark:text-white'>
            <input type="search" onChange={(e) => setKeyword(e.target.value)} className='w-full py-2 focus:outline-none px-5 dark:text-sky-500 bg-white' placeholder={bahasa("cari")}/>
            <button type='submit' aria-label='searchbutton' className="bg-transparent"><FontAwesomeIcon icon={faSearch} className="px-5 flex items-center justify-center text-white text-2xl lg:text-xl bg-transparent" /></button>
        </form>
    </div>
  )
}
