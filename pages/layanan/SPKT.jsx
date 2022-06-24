import FollowUs from "../../components/Organism/FollowUs"
import Layout from '../../components/Layouts/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'



export default function SPKT() {
    const {t} = useTranslation("common")
  return (
      <Layout lang={t} title={"Sentra Pelayanan Kepolisian Terpadu"} description="Sentra Pelayanan Kepolisian Terpadu">
          <div className="container py-10">
              <div className="w-full lg:flex justify-center gap-5">
                  <div className="w-full lg:w-[730px] mb-5">
                      <h1 className="text-xl lg:text-2xl font-mono uppercase font-semibold text-center mb-5 dark:text-white">Sentra Pelayanan Kepolisian Terpadu (SPKT)</h1>
                      <div className='text-black dark:text-white text-sm space-y-5 leading-6'>
                        <p>Sentra Pelayanan Kepolisian Terpadu
                        (SPKT) bertugas memberikan pelayanan kepolisian kepada masyarakat, dalam bentuk penerimaan dan penanganan pertama laporan/pengaduan, pelayanan bantuan/pertolongan kepolisian, bersama fungsi terkait mendatangi TKP untuk melaksanakan kegiatan pengamanan dan olah TKP sesuai etentuan hukum dan peraturan yang berlaku.</p>

                        <p className='font-semibold'>SPKT dapat melayani:</p>
                        <ul className="list-disc ml-10">
                            <li>Laporan Polisi (LP)</li>
                            <li>Surat tanda terima laporan polisi (STTPLP)</li>
                            <li>Surat Pemberitahuan Perkembangan Hasil Penyidikan (SP2HP)</li>
                            <li>Surat Keterangan Tanda Lapor Kehilangan (SKTLK)</li>
                            <li>Surat Keterangan Catatan Kepolisian (SKCK)</li>
                            <li>Surat Tanda Terima Pemberitahuan (STTP)</li>
                            <li>Surat Keterangan Lapor Diri (SKLD)</li>
                            <li>Surat Ijin Keramaian</li>
                            <li>Surat Rekomendasi Ijin Usaha Jasa Pengamatan</li>
                            <li>Surat Ijin Mengemudi (SIM)</li>
                            <li>Surat Tanda Nomor Kendaraan Bermotor (STNK)</li>
                        </ul>

                        <p className='font-semibold'>Fungsi SPKT lainnya:</p>
                        <ul className="list-disc ml-10">
                            <li>Pengkoordinasian dan pemberian bantuan serta pertolongan, anatara laian penanganan tempat kejadian perkara ( TKP ) meliputi tindakan pertama di TKP ( TPTKP ) dan pengolahan TKP, turjawali (pengaturan jalan dan pengawalan lalu-lintas), dan pengamanan;</li>
                            <li>Pelayanan masyarakat antara lain melalui telepon, pesan singkat, faksimili, internet (jejaring sosial), dan surat;</li>
                            <li>Penyajian informasi umum yang berkaitan dengan kepentingan masyarakat sesuai dengan ketentuan peraturan perundang-undangan.</li>
                        </ul>

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