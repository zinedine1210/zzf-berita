import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'

export default function BeritaVideoFirst({stuff, skeleton}) {
  return (
        <div className="w-full lg:w-2/3 bg-white relative">
            <iframe width="710" height="500" src="https://www.youtube-nocookie.com/embed/9RTLdG4ZMlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
  )
}
