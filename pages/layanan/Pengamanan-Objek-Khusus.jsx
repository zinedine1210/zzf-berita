import Layout from '../../components/Layouts/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import FollowUs from "../../components/Organism/FollowUs"



export default function PengamananObjekKhusus() {
    const {t} = useTranslation("common")
  return (
      <Layout lang={t} title={"Pengamanan Objek Khusus"} description="Pengamanan Objek Khusus">
          <div className="container py-10">
              <div className="w-full lg:flex justify-center gap-5">
                  <div className="w-full lg:w-[730px] mb-5">
                      <h1 className="text-xl lg:text-2xl font-mono uppercase font-semibold text-center mb-5 dark:text-white">Pengamanan Objek Khusus</h1>
                      <div className='text-black dark:text-white text-sm space-y-5  leading-6'>
                        <section>
                            <p>Sesuai dengan perintah perundangan, Polri berkewajiban untuk melaksanakan pengamanan obyek-obyek khusus. Dasar hukumnya adalah :</p>
                            <ul className="list-decimal ml-10">
                                <li>UU No. 2 Tahun 2002 tentang Kepolisian Negara Republik Indonesia</li>
                                <li>Perpres nomor 52 Tahun 2010 tentang Susunan Organisasi Dan Tata Kerja
                                    Kepolisian Negara Republik Indonesia</li>
                                <li>Keputusan Presiden RI No 63 Tahun 2004 tentang Pengamanan Obyek Vital Nasional</li>
                                <li>Perkap No 22 Tahun 2010 tentang Susunan Organisasi Dan Tata Kerja
                                    Pada Tingkat Kepolisian Daerah</li>
                                <li>Perkap No 23 Tahun 2010 Tentang Susunan Organisasi Dan Tata Kerja
                                    Pada Tingkat Kepolisian Resort Dan Sektor</li>
                                <li>Surat Keputusan Kapolri No.Pol : Skep/551/VIII/2003, Tanggal 12 Agustus 2003 tentang
                                    Petunjuk Pelaksanaan Pembinaan Pengamanan Obyek Khusus</li>
                                <li>Surat Keputusan kapolri No.Pol : Skep/738/X/2005, Tanggal 13 Oktober 2005 tentang
                                    Sistem Pengamanan Obyek Vital Nasional</li>
                                <li>Direktif Kapolri No.Pol. : R/Dir/680/IX/2004 tentang Pengamanan Obyek Vital</li>
                            </ul>   

                            <p>Obyek khusus adalah obyek yang karena kedudukan dan kepentingannya memerlukan perhatian dan tindakan pengamanan.</p>

                        </section>

                        <section>
                            <p className='font-semibold'>Objek khusus meliputi:</p>
                            <ul className="list-disc ml-10">
                                <li><span className='font-semibold'>Obyek Vital</span>, yaitu kawasan, tempat, bangunan dan usaha yg menyangkut harkat hidup orang banyak, kepentingan dan atau sumber pendapatan besar negara yg memiliki potensi kerawanan dan dapat menggoyahkan stabilitas ekonomi, politik dan keamanan bila terjadi gangguan keamanan</li>
                                <li><span className='font-semibold'>Objek Wisata</span>, yaitu tempat-tempat dan atau kegiatan-kegiatan tertentu yang dikunjungi orang sehubungan dengan nilai-nilai sosial budaya atau kondisi alamnya.</li>
                                <li><span className='font-semibold'>Obyek Khusus Tertentu</span>, seperti :
                                    <ul className='list-decimal ml-10'>
                                        <li>Kantor bank/lembaga keuangan</li>
                                        <li>Rumah sakit</li>
                                        <li>Lembaga permasyarakatan</li>
                                        <li>Terminal</li>
                                        <li>Pasar Tradisional</li>
                                        <li>Hotel</li>
                                        <li>Rumah Ibadah</li>
                                        <li>Kantor media massa</li>
                                        <li>Mal</li>
                                        <li>DLL</li>
                                    </ul>
                                </li>
                                <li><span className='font-semibold'>Obyek Vital Nasional</span> adalah kawasan/lokasi, bangunan/instalasi dan/atau usaha yg menyangkut hajat hidup orang banyak, kepentingan negara dan/atau sumber pendapatan negara yg bersifat strategis. Status obyek vital nasional harus ditetapkan berdasarkan keputusan menteri dan/atau kepala lembaga pemerintah non departemen. (Kepres Nomor 63 Tahun 2004 Pasal 3 )</li>
                            </ul>
                        </section>
                        
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