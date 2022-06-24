import Layout from '../../components/Layouts/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


export default function Kontak() {
    const {t} = useTranslation("common")

  return (
      <Layout lang={t} title="Kontak Kami" description={"Kontak Kami"}>
          <div className="container py-10">
              <div className="w-full lg:flex justify-center gap-5 items-center">
                  <div className="w-full lg:w-[730px]">
                       <iframe
                        title="map"
                        frameBorder={0}
                        height="400px"
                        width="100%"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7931.727475024864!2d107.167608!3d-6.281638!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa43f3f041b4f746a!2sPolres%20Metro%20Bekasi!5e0!3m2!1sid!2sid!4v1643104607477!5m2!1sid!2sid"
                        allowFullScreen/>
                  </div>
                  <div className="w-full lg:w-[350px]">
                        <h1 className="text-2xl mt-5 lg:text-4xl dark:text-white font-semibold uppercase font-mono">Kontak Kami</h1>
                      <div className='group'>
                          <span className='w-24 rounded-full h-2 bg-sky-500 dark:bg-white inline-block group-hover:w-32 group-hover:duration-300'></span>
                          <span className='inline-block rounded-full h-2 w-8 group-hover:w-10 group-hover:duration-300 group-hover:ease-in-out bg-sky-500 dark:bg-white mx-2'></span>
                          <span className='inline-block rounded-full h-2 w-4 group-hover:w-5 bg-sky-500 group-hover:duration-300 group-hover:ease-out dark:bg-white'></span>

                          <div className="flex my-5 gap-5">
                              <FontAwesomeIcon icon={faMapLocationDot} className={"bg-gray-100 rounded-full p-3 text-xl hover:text-sky-500"} />
                              <div>
                                    <h1 className="text-xl dark:text-white font-semibold font-mono">Alamat</h1>
                                    <p className='text-xs lg:text-sm dark:text-white text-gray-500  font-mono'>Karangasih, Jl. Ki Hajar Dewantara No.1, Simpangan, Kec. Cikarang Utara, Bekasi, Jawa Barat 17550</p>
                              </div>
                          </div>

                          <div className="flex my-5 gap-5">
                              <FontAwesomeIcon icon={faPhone} className={"bg-gray-100 rounded-full p-3 text-xl hover:text-sky-500"} />
                              <div>
                                    <h1 className="text-xl dark:text-white font-semibold font-mono">Telepon</h1>
                                    <p className='text-xs lg:text-sm dark:text-white text-gray-500  font-mono'>(021) 89114933</p>
                              </div>
                          </div>

                          <div className="flex my-5 gap-5">
                              <FontAwesomeIcon icon={faFacebook} className={"bg-gray-100 rounded-full p-3 text-xl hover:text-sky-500"} />
                              <div>
                                    <h1 className="text-xl dark:text-white font-semibold font-mono">Facebook</h1>
                                    <p className='text-xs lg:text-sm dark:text-white text-gray-500  font-mono'>Humas Polres Metro Bekasi</p>
                              </div>
                          </div>

                          <div className="flex my-5 gap-5">
                              <FontAwesomeIcon icon={faInstagram} className={"bg-gray-100 rounded-full p-3 text-xl hover:text-sky-500"} />
                              <div>
                                    <h1 className="text-xl dark:text-white font-semibold font-mono">Instagram</h1>
                                    <p className='text-xs lg:text-sm dark:text-white text-gray-500  font-mono'>@humaspolresmetrobekasi</p>
                              </div>
                          </div>

                          <div className="flex my-5 gap-5">
                              <FontAwesomeIcon icon={faTwitter} className={"bg-gray-100 rounded-full p-3 text-xl hover:text-sky-500"} />
                              <div>
                                    <h1 className="text-xl dark:text-white font-semibold font-mono">Twitter</h1>
                                    <p className='text-xs lg:text-sm dark:text-white text-gray-500  font-mono'>@humasmetrobks</p>
                              </div>
                          </div>

                          <div className="flex my-5 gap-5">
                              <FontAwesomeIcon icon={faYoutube} className={"bg-gray-100 rounded-full p-3 text-xl hover:text-sky-500"} />
                              <div>
                                    <h1 className="text-xl dark:text-white font-semibold font-mono">Twitter</h1>
                                    <p className='text-xs lg:text-sm dark:text-white text-gray-500  font-mono'>Polres Metro Bekasi</p>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </Layout>
  )
}

export async function getServerSideProps({locale})
{
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    }
}
