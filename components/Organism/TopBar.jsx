import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import WidgetTranding from "../../components/Organism/WidgetTranding"
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import moment from 'moment'

export default function TopBar({bahasa}) {
    const date = moment().format("DD MMMM YYYY")
  return (
      <div className='w-full hidden lg:block py-1'>
          <div className="flex items-center justify-between gap-5">
              <div className='text-xs space-x-3 flex '>
                  <h1 className='bg-main-gradient text-white font-semibold text-sm flex justify-center items-center px-3'>Trending</h1>
                  <WidgetTranding title="Tranding" total={5}/>
              </div>

              <div className='flex items-center justify-between w-56 text-gray-600 dark:text-white'>
                  <p className='text-sm font-semibold font-mono'>{date}</p>
                  <p>|</p>
                  <div className='flex space-x-2'>
                      <Link href={"https://twitter.com/HumasMetroBks"}><FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:scale-105 hover:duration-300 hover:ease-in-out text-gray-600 dark:text-white"/></Link>
                      <Link href={"https://www.youtube.com/channel/UCw9bCQBDq7C--dah4EBzpww"}><FontAwesomeIcon icon={faYoutube} className="cursor-pointer hover:scale-105 hover:duration-300 hover:ease-in-out text-gray-600 dark:text-white"/></Link>
                      <Link href={"https://www.instagram.com/humaspolresmetrobekasi"}><FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:scale-105 hover:duration-300 hover:ease-in-out text-gray-600 dark:text-white"/></Link>
                      <Link href={"https://web.facebook.com/aktualindonesia"}><FontAwesomeIcon icon={faFacebook} className="cursor-pointer hover:scale-105 hover:duration-300 hover:ease-in-out text-gray-600 dark:text-white"/></Link>
                  </div>
              </div>
          </div>
      </div>
  )
}
