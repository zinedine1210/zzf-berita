import React from 'react'
import Layout from '../../components/Layouts/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function PengawalanJalan() {
    const {t} = useTranslation("common")
  return (
      <Layout lang={t} title={"Pengawalan Jalan"} description={"Pengawalan Jalan"}>
          <div className="container py-10">
              <div className="w-full lg:flex justify-center gap-5">
                  <div className="w-full lg:w-[730px] mb-5">
                      <h1 className="text-xl lg:text-2xl font-mono uppercase font-semibold text-center mb-5 dark:text-white">Pengawalan Jalan</h1>
                      <div className='text-gray-600 text-sm space-y-5 dark:text-gray-300 leading-6'>
                        <p>Pada dasarnya menggunakan sarana dan prasana jalan untuk keperluan berlalu lintas adalah hak asasi setiap orang. Semua orang mempunyai hak yang sama untuk menggunakan jalan untuk berlalu lintas. Tidak ada seorang pun mempunyai hak untuk diutamakan, kecuali didasarkan pada peraturan perundang-undangan yang berlaku. Peraturan perundang-undangan yang ada memberikan peluang bagi orang tertentu atau kendaraan yang digunakan bagi keperluan tertentu mendapatkan prioritas menggunakan jalan untuk berlalu lintas. Hak utama itu diatur dalam Peraturan Pemerintah (PP) Nomor 43 Tahun 1993.</p>
                        <p>Dalam Pasal 65 ayat 1 disebutkan, pemakai jalan wajib mendahulukan sesuai urutan prioritas sebagai berikut:

Kendaraan pemadam kebakaran yang sedang melaksanakan tugas
Ambulans yang mengangkut orang sakit
Kendaraan untuk memberi pertolongan pada kecelakaan lalu lintas
Kendaraan Kepala Negara (Presiden dan Wakil Presiden) atau Pemerintah Asing yang menjadi tamu negara
Iring-iringan pengantar jenazah
Konvoi, pawai atau kendaraan orang cacat
Kendaraan yang penggunaannya untuk keperluan khusus atau mengangkut barang-barang khusus.</p>
                        <hr />
                        <h1 className="text-xl font-semibold">Kewenangan Pengawalan Jalan oleh Polri</h1>
                        <p>Esensi dari pengawalan tidak lain memang memberikan pengamanan, baik terhadap kendaraan yang dikawal, maupun pengguna jalan lain yang berada di sekitar kendaraan yang dikawal. Karena menyangkut pengamanan, pihak yang paling berwenang adalah POLRI. Karena pengamanan adalah bagian dari tugas pokok Polri.

Dalam Pasal 14 ayat 1 huruf “a” UU Nomor 2 tahun 2002 tentang Kepolisian Negara Republik Indonesia disebutkan, dalam melaksanakan tugas pokoknya, Polri bertugas melaksanakan pengaturan, penjagaan, pengawalan, dan patroli terhadap kegiatan masyarakat dan pemerintah sesuai kebutuhan.</p>
                      </div>
                  </div>
                  <div className="w-full lg:w-[350px]">
                      <img src="/images/16-PROGRAM-PRIORITAS-KAPOLRI (1).jpg" alt="Program Prioritas" className='mb-5' />
                        
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