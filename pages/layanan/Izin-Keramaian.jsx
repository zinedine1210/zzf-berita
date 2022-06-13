import React from 'react'
import Layout from '../../components/Layouts/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function IzinKeramaian() {
    const {t} = useTranslation("common")
  return (
      <Layout lang={t} title={"Izin Keramaian"} description={"Izin Keramaian"}>
          <div className="container py-10">
              <div className="w-full lg:flex justify-center gap-5">
                  <div className="w-full lg:w-[730px] mb-5">
                      <h1 className="text-xl lg:text-2xl font-mono uppercase font-semibold text-center mb-5 dark:text-white">Izin Keramaian</h1>
                    
                      <div className='text-gray-600 text-sm space-y-5 dark:text-gray-300 leading-6'>
                        <p>Izin keramaian dimaksudkan untuk menjaga suasana yang kondusif bagi semua pihak. Kelancaran suatu acara keramaian pasti harus didukung dengan persiapan pengamanan yang pas. Pemberian izin dipertimbangkan dengan resiko-resiko yang mungkin timbul, kesiapan kuantitas personil, sarana dan prasarana Polri untuk antisipasinya.</p>
                        <h1 className='text-black text-xl font-semibold'>Jenis Keramaian dan Persyaratan</h1>
                        <hr />
                        <h3 className='text-xl'>Izin Keramaian</h3>
                        <h1 className='font-semibold'>Dasar:</h1>
                        <p>Juklap Kapolri No. Pol / 02 / XII / 95 tentang perizinan dan pemberitahuan kegiatan masyarakat.
Dalam hal ini kegiatan yang dimaksud adalah:
Pentas musik band / dangdut
Wayang Kulit
Ketoprak
Dan pertunjukan lain</p>

                        <h1 className='font-semibold'>Persyaratan:</h1>
                        <p>Izin keramaian yang mendatangkan massa 300 – 500 orang (Kecil)
Surat Keterangan dari kelurahan Setempat
Fotocopy Kartu Tanda Penduduk ( KTP ) yang punya Hajad sebanyak 1 (satu) Lembar
Fotocopy Kartu Keluarga ( KK ) yang punya hajad sebanyak 1 ( satu ) lembar
Izin keramaian yang mendatangkan massa lebih dari 1000 orang (Besar)
Surat Permohonan Izin Keramaian
Proposal kegiatan
Identitas penyelenggara / Penanggung Jawab
Izin Tempat berlangsungnya kegiatan</p>
<hr />
<h1>DLL</h1>
                        
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