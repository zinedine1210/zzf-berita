import Layout from '../../components/Layouts/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import FollowUs from "../../components/Organism/FollowUs"

export default function CallCenter() {
    const {t} = useTranslation("common")
  return (
      <Layout lang={t} title={"Call Center"} description="Call Center">
          <div className="container py-10">
              <div className="w-full lg:flex justify-center gap-5">
                  <div className="w-full lg:w-[730px] mb-5">
                      <h1 className="text-xl lg:text-2xl font-mono uppercase font-semibold text-center mb-5 dark:text-white">Call Center Polri 110</h1>
                      <div className='text-black dark:text-white text-sm space-y-5 leading-6'>
                        <p>Dalam rangka lebih cepat memberikan pelayanan kepada masyarakat, Polri telah bekerjasama dengan PT Telekomunikasi Indonesia (Telkom) untuk melaksanakan Layanan Contact Center 110</p>
                        <p>Kehadiran Layanan Contact Center 110 POLRI ditujukan untuk memenuhi harapan dan kebutuhan masyarakat terhadap terselenggaranya layanan keamanan publik. Dalam penyelenggaraan layanan contact center, telah disiapkan sebuah sistem aplikasi yang dapat memungkinkan pencatatan /perekaman setiap interaksi Polri & masyarakat, sehingga dimungkinkan pengendalian response kebutuhan masyarakat terhadap Polri.</p>
                        <p>Sistem tersebut direncanakan akan membuka saluran via : telepon, sms, email, fax dan media sosial yang didukung oleh jaringan Telkom Group di Indonesia. Masyarakat yang nantinya melakukan panggilan ke nomor akses 110 akan langsung terhubung ke agen yang akan memberikan layanan berupa informasi, pelaporan (kecelakaan, bencana, kerusuhan, dll) dan pengaduan (penghinaan, ancaman, tindak kekerasan dll).</p>
                        <p>Masyarakat bisa menggunakan layanan Contact Center 110 secara gratis. Namun demikian, Polri menghimbau agar layanan 110 ini tidak dibuat main-main, karena jika nantinya terjadi seperti itu, pihak Polri tentu akan melacak masyarakat yang membuat laporan bohong.</p>
                      </div>
                  </div>
                  <div className="w-full lg:w-[350px]">
                    <FollowUs bahasa={t} instagram={true} facebook={true} youtube={true} twitter={true}/>
                    <div className='text-center mx-auto'>
                      <Image width={300} height={500} src="/images/presisi-logo-239x300.webp" alt="Program Prioritas" objectFit='contain' className='mb-5' />

                    </div>

                        
                  </div>
              </div>
          </div>
      </Layout>
  )
}

export async function getServerSideProps({locale}){
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    }
}