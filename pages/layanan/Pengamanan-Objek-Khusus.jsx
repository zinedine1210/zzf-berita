import React from 'react'
import Layout from '../../components/Layouts/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'



export default function PengamananObjekKhusus() {
    const {t} = useTranslation("common")
  return (
      <Layout lang={t} title={"Pengamanan Objek Khusus"} description="Pengamanan Objek Khusus">
          <div className="container py-10">
              <div className="w-full lg:flex justify-center gap-5">
                  <div className="w-full lg:w-[730px] mb-5">
                      <h1 className="text-xl lg:text-2xl font-mono uppercase font-semibold text-center mb-5 dark:text-white">Pengamanan Objek Khusus</h1>
                      <div className='text-gray-600 text-sm space-y-5 dark:text-gray-300 leading-6'>
                        <p>Sesuai dengan perintah perundangan, Polri berkewajiban untuk melaksanakan pengamanan obyek-obyek khusus. Dasar hukumnya adalah :
1. UU No. 2 Tahun 2002 tentang Kepolisian Negara Republik Indonesia
2. Perpres nomor 52 Tahun 2010 tentang Susunan Organisasi Dan Tata Kerja
Kepolisian Negara Republik Indonesia
3. Keputusan Presiden RI No 63 Tahun 2004 tentang Pengamanan Obyek Vital Nasional
4. Perkap No 22 Tahun 2010 tentang Susunan Organisasi Dan Tata Kerja
Pada Tingkat Kepolisian Daerah
5. Perkap No 23 Tahun 2010 Tentang Susunan Organisasi Dan Tata Kerja
Pada Tingkat Kepolisian Resort Dan Sektor
6. Surat Keputusan Kapolri No.Pol : Skep/551/VIII/2003, Tanggal 12 Agustus 2003 tentang
Petunjuk Pelaksanaan Pembinaan Pengamanan Obyek Khusus
7. Surat Keputusan kapolri No.Pol : Skep/738/X/2005, Tanggal 13 Oktober 2005 tentang
Sistem Pengamanan Obyek Vital Nasional
8. Direktif Kapolri No.Pol. : R/Dir/680/IX/2004 tentang Pengamanan Obyek Vital</p>
                        <p>Kehadiran Layanan Contact Center 110 POLRI ditujukan untuk memenuhi harapan dan kebutuhan masyarakat terhadap terselenggaranya layanan keamanan publik. Dalam penyelenggaraan layanan contact center, telah disiapkan sebuah sistem aplikasi yang dapat memungkinkan pencatatan /perekaman setiap interaksi Polri & masyarakat, sehingga dimungkinkan pengendalian response kebutuhan masyarakat terhadap Polri.</p>
                        <p>Sistem tersebut direncanakan akan membuka saluran via : telepon, sms, email, fax dan media sosial yang didukung oleh jaringan Telkom Group di Indonesia. Masyarakat yang nantinya melakukan panggilan ke nomor akses 110 akan langsung terhubung ke agen yang akan memberikan layanan berupa informasi, pelaporan (kecelakaan, bencana, kerusuhan, dll) dan pengaduan (penghinaan, ancaman, tindak kekerasan dll).</p>
                        <p>Masyarakat bisa menggunakan layanan Contact Center 110 secara gratis. Namun demikian, Polri menghimbau agar layanan 110 ini tidak dibuat main-main, karena jika nantinya terjadi seperti itu, pihak Polri tentu akan melacak masyarakat yang membuat laporan bohong.</p>
                      </div>
                  </div>
                  <div className="w-full lg:w-[350px]">
                      <Image width={1250} height={2500} src="/images/16-PROGRAM-PRIORITAS-KAPOLRI.webp" alt="Program Prioritas" objectFit='contain' className='mb-5' />

                        
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