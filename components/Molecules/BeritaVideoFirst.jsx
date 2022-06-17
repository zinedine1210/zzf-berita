import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'

export default function BeritaVideoFirst({stuff, skeleton}) {
  return (
        <div className="w-full lg:w-[730px] bg-white relative">
          {skeleton ? <Skeleton height={500} width={730}/> :
            <iframe width="730" height="500" className='w-full h-[300px] lg:w-[730px] lg:h-[500px]' src={skeleton ? "" : stuff.url} title={stuff.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          }
            
        </div>
  )
}
