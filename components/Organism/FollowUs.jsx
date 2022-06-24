import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {

} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTelegram, faTwitter, faVimeo, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function FollowUs({instagram, twitter, youtube, telegram, facebook, vimeo, bahasa}) {
  return (
      <div className="w-full mb-5">
          <h1 className="title">{bahasa("follow")}</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">

              {facebook ? 
                <a href='https://web.facebook.com/aktualindonesia/' target="_blank" className="w-full focus:bg-blue-800 group text-white bg-blue-900 rounded-lg shadow-lg flex p-3 justify-between lg:p-2 items-center">
                    <div>
                        <h1 className='text-2xl lg:text-sm font-bold font-main'>15.563</h1>
                        <p className='text-sm lg:text-xs text-white'>Fans</p>
                    </div>
                    <FontAwesomeIcon icon={faFacebook} className="text-3xl lg:text-xl text-white group-hover:scale-125 group-hover:duration-300 group-hover:ease-in-out"/>
                </a>
              : ""}

              {twitter ? 
                <a href='https://twitter.com/HumasMetroBks' target={"_blank"} className="w-full text-white focus:bg-sky-400 group bg-sky-500 rounded-lg shadow-lg flex p-3 justify-between lg:p-2 items-center">
                    <div>
                        <h1 className='text-2xl lg:text-sm font-bold font-main'>672</h1>
                        <p className='text-sm lg:text-xs text-white'>Followers</p>
                    </div>
                    <FontAwesomeIcon icon={faTwitter} className="text-3xl lg:text-xl text-white group-hover:scale-125 group-hover:duration-300 group-hover:ease-in-out"/>
                </a>
              
              : ""}


                {youtube ? 
                <a href='https://www.youtube.com/channel/UCw9bCQBDq7C--dah4EBzpww' target={"_blank"} className="w-full text-white group focus:bg-red-500 bg-red-600 rounded-lg shadow-lg flex p-3 justify-between lg:p-2 items-center">
                    <div>
                        <h1 className='text-2xl lg:text-sm font-bold font-main'>1.540</h1>
                        <p className='text-sm lg:text-xs text-white'>Subscribers</p>
                    </div>
                    <FontAwesomeIcon icon={faYoutube} className="text-3xl lg:text-xl text-white group-hover:scale-125 group-hover:duration-300 group-hover:ease-in-out"/>
                </a>
                
                : ""}

                {instagram ? 
                
                <a href='https://www.instagram.com/humaspolresmetrobekasi/' target={"_blank"} className="w-full text-white group focus:bg-purple-700 bg-purple-800 rounded-lg shadow-lg flex p-3 justify-between lg:p-2 items-center">
                    <div>
                        <h1 className='text-2xl lg:text-sm font-bold font-main'>20.900</h1>
                        <p className='text-sm lg:text-xs text-white'>Followers</p>
                    </div>
                    <FontAwesomeIcon icon={faInstagram} className="text-3xl lg:text-xl text-white group-hover:scale-125 group-hover:duration-300 group-hover:ease-in-out"/>
                </a>
                
                : ""}


                {vimeo ? 
                
                <a href='' target={"_blank"} className="w-full text-white bg-green-700 group focus:bg-green-600 rounded-lg shadow-lg flex p-3 justify-between lg:p-2 items-center">
                    <div>
                        <h1 className='text-2xl lg:text-sm font-bold font-main'>20.000</h1>
                        <p className='text-sm lg:text-xs text-white'>Followers</p>
                    </div>
                    <FontAwesomeIcon icon={faVimeo} className="text-3xl lg:text-xl text-white group-hover:scale-125 group-hover:duration-300 group-hover:ease-in-out"/>
                </a>
                
                : ""}

                {telegram ? 
                <a href='' target={"_blank"} className="w-full text-white bg-blue-700 group focus:bg-blue-600 rounded-lg shadow-lg flex p-3 justify-between lg:p-2 items-center">
                    <div>
                        <h1 className='text-2xl lg:text-sm font-bold font-main'>20.000</h1>
                        <p className='text-sm lg:text-xs text-white'>Followers</p>
                    </div>
                    <FontAwesomeIcon icon={faTelegram} className="text-3xl lg:text-xl text-white group-hover:scale-125 group-hover:duration-300 group-hover:ease-in-out"/>
                </a>
                
                : ""}
                
          </div>
      </div>
  )
}
