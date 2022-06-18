import React from 'react'
import Layout from '../../components/Layouts/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function SPKT() {
    const {t} = useTranslation("common")
  return (
      <Layout lang={t} title={"Sentra Pelayanan Kepolisian Terpadu"} description="Sentra Pelayanan Kepolisian Terpadu">
          <div className="container py-10">
              <div className="w-full lg:flex justify-center gap-5">
                  <div className="w-full lg:w-[730px] mb-5">
                      <h1 className="text-xl lg:text-2xl font-mono uppercase font-semibold text-center mb-5 dark:text-white">Sentra Pelayanan Kepolisian Terpadu (SPKT)</h1>
                      <div className='text-gray-600 text-sm space-y-5 dark:text-gray-300 leading-6'>
                        <p>Sentra Pelayanan Kepolisian Terpadu
(SPKT)
SPKT bertugas memberikan pelayanan kepolisian kepada masyarakat, dalam bentuk penerimaan dan penanganan pertama laporan/pengaduan, pelayanan bantuan/pertolongan kepolisian, bersama fungsi terkait mendatangi TKP untuk melaksanakan kegiatan pengamanan dan olah TKP sesuai etentuan hukum dan peraturan yang berlaku.

</p>
                        <p>Kehadiran Layanan Contact Center 110 POLRI ditujukan untuk memenuhi harapan dan kebutuhan masyarakat terhadap terselenggaranya layanan keamanan publik. Dalam penyelenggaraan layanan contact center, telah disiapkan sebuah sistem aplikasi yang dapat memungkinkan pencatatan /perekaman setiap interaksi Polri & masyarakat, sehingga dimungkinkan pengendalian response kebutuhan masyarakat terhadap Polri.</p>
                        <p>Sistem tersebut direncanakan akan membuka saluran via : telepon, sms, email, fax dan media sosial yang didukung oleh jaringan Telkom Group di Indonesia. Masyarakat yang nantinya melakukan panggilan ke nomor akses 110 akan langsung terhubung ke agen yang akan memberikan layanan berupa informasi, pelaporan (kecelakaan, bencana, kerusuhan, dll) dan pengaduan (penghinaan, ancaman, tindak kekerasan dll).</p>
                        <p>Masyarakat bisa menggunakan layanan Contact Center 110 secara gratis. Namun demikian, Polri menghimbau agar layanan 110 ini tidak dibuat main-main, karena jika nantinya terjadi seperti itu, pihak Polri tentu akan melacak masyarakat yang membuat laporan bohong.</p>
                      </div>
                  </div>
                  <div className="w-full lg:w-[350px]">
                      <img src="/images/16-PROGRAM-PRIORITAS-KAPOLRI.webp" alt="Program Prioritas" className='mb-5' />
                        
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