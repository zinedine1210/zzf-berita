import Layout from '../../components/Layouts/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import FollowUs from "../../components/Organism/FollowUs"



export default function IzinKeramaian() {
    const {t} = useTranslation("common")
  return (
      <Layout lang={t} title={"Izin Keramaian"} description={"Izin Keramaian"}>
          <div className="container py-10">
              <div className="w-full lg:flex justify-center gap-5">
                  <div className="w-full lg:w-[730px] mb-5">
                      <h1 className="text-xl lg:text-2xl font-mono uppercase font-semibold text-center mb-5 dark:text-white">Izin Keramaian</h1>
                    
                      <div className='text-black dark:text-white text-sm space-y-5 leading-6'>
                        <p>Izin keramaian dimaksudkan untuk menjaga suasana yang kondusif bagi semua pihak. Kelancaran suatu acara keramaian pasti harus didukung dengan persiapan pengamanan yang pas. Pemberian izin dipertimbangkan dengan resiko-resiko yang mungkin timbul, kesiapan kuantitas personil, sarana dan prasarana Polri untuk antisipasinya.</p>
                        <h1 className=' text-xl font-semibold'>Jenis Keramaian dan Persyaratan</h1>
                        <hr />
                        <section>
                            <h1 className='text-xl font-semibold mb-5'>Izin Keramaian</h1>
                            <p className='font-semibold'>Dasar:</p>
                            <p>Juklap Kapolri No. Pol / 02 / XII / 95 tentang perizinan dan pemberitahuan kegiatan masyarakat.
                                Dalam hal ini kegiatan yang dimaksud adalah:
                            </p>
                            <ul className='list-disc inline-block ml-10'>
                                <li>Pentas musik band / dangdut</li>
                                <li>Wayang Kulit</li>
                                <li>Ketoprak</li>
                                <li>Dan Pertunjukan lain</li>
                            </ul>

                            <p className='font-semibold'>Persyaratan:</p>
                            <p>Izin keramaian yang mendatangkan massa 300 – 500 orang (Kecil)</p>
                            <ul className='list-disc inline-block ml-10'>
                                <li>Surat keterangan dari kelurahan setempat</li>
                                <li>Fotocopy Kartu Tanda Penduduk ( KTP ) yang punya Hajad sebanyak 1 (satu) Lembar</li>
                                <li>Fotocopy Kartu Keluarga ( KK ) yang punya hajad sebanyak 1 ( satu ) lembar</li>
                            </ul>
                            <p>Izin keramaian yang mendatangkan massa lebih dari 1000 orang (Besar)</p>
                            <ul className='list-disc ml-10'>
                                <li>Surat Permohonan Izin Keramaian</li>
                                <li>Proposal kegiatan</li>
                                <li>Identitas penyelenggara / Penanggung Jawab</li>
                                <li>Izin Tempat berlangsungnya kegiatan</li>
                            </ul>
                            <hr className='mt-10'/>
                        </section>

                        <section>
                            <h1 className='text-xl font-semibold'>Izin Keramaian dengan kembang api</h1>
                            <p className='font-semibold'>Dasar:</p>
                            <p>KUHP pasal 510 tentang Keramaian Umum.
                                Petunjuk pelaksanaan kapolri No.Pol : Juklak / 29 / VII / 1991 Tgl 23 juli1991 tentang Pengawasan , Pengendalian dan Pengamanan bahan Peledak Non Organik ABRI.
                                Petunjuk lapangan Kapolri no. Pol : Juklap / 02 / XII / 1995 / Tentang Perijinan dan Pemberitahuan Kegiatan Masyarakat.
                            </p>

                            <p className='font-semibold'>Persyaratan:</p>
                            <p>Surat Permohonan dari Pemohon tentang pelaksanaan Pesta Kembang Api, yang mencakup:</p>
                            <ul className='list-disc inline-block ml-10'>
                                <li>Pesta Kembang api tersebut digunakan dalam acara apa</li>
                                <li>Jumlah dan Jenis Kembang api</li>
                                <li>Waktu / Durasi Penyalaan Kembang Api</li>
                                <li>Identitas Penyala Kembang Api</li>
                                <li>Identitas Penanggung jawab Kegiatan</li>
                                <li>Ijin Tempat Pelaksanaan Pesta Kembang Api</li>
                                <li>Rekomendasi dari Polsek setempat</li>
                            </ul>
                            <p>Surat ijin Impor ( asal – usul kembang api ) yang didatangkan untuk kegiatan tersebut.</p>
                            <hr className='mt-10'/>
                        </section>

                        <section>
                            <h1 className='text-xl font-semibold'>PERIJINAN PENYAMPAIAN PENDAPAT DI MUKA UMUM</h1>
                            <p className='font-semibold'>Dasar:</p>
                            <p>Undang – Undang No. 9 Th 1998 tentang Kemerdekaan Menyampaikan Pendapat di Muka Umum
                                Bentuk Penyampaian pendapat di muka umum :
                            </p>
                            <ul className='list-disc inline-block ml-10'>
                                <li>Unjuk rasa / Demonstrasi</li>
                                <li>Pawai</li>
                                <li>Rapat Umum</li>
                                <li>Mimbar Bebas</li>
                            </ul>

                            <p className='font-semibold'>Ketentuan:</p>
                            <p>Penyampaian Pendapat di Muka Umum disampaikan di tempat terbuka dan tidak membawa yang dapat membahayakan keselamatan umum.
Pembatalan pelaksanaan penyampaian pendapat di muka umum disampaikan secara tertulis selambat–selambatnya 24 jam sebelum pelaksanaan. <br />Setelah menerima pemberitahuan tentang kegiatan penyamapain pendapat di Muka Umum Polri wajib:</p>
                            <ul className='list-disc ml-10 inline-block'>
                                <li>Memberikan surat tanda terima pemberitahuan</li>
                                <li>Melakukan koordinasi dengan penanggung jawab penyampaian pendapat di Muka Umum</li>
                                <li>Melakukan koordinasi dengan pimpinan, instansi / lembaga yang menjadi tujuan penyampaian pendapat</li>
                                <li>Mempersiapakan pengamanan tempat lokasi dan route yang dilalui.</li>
                                <li>Bertanggung Jawab untuk melindungi para peserta penyampaian pendapat di muka umum</li>
                                <li>Bertanggung jawab untuk menyelenggarakan Pengamanan.</li>
                            </ul>
                            <p>Sanksi – sanksi yang diperoleh apabila tidak sesuai dengan ketentuan antara lain:</p>
                            <ul className='list-disc ml-10 inline-block'>
                                <li>Dibubarkan bila tidak memenuhi dengan ketentuan</li>
                                <li>Perbuatan melanggar hukum di kenakan sanksi hukuman sesuai dengan ketentuan Perundang–undangan yang berlaku.</li>
                                <li>Penanggung Jawab melakukan tindak pidana, di pidana sesuai dengan ketentuan Perundang–undangan yang berlaku ditambah sepertiga dari pidana pokok.</li>
                                <li>Mempersiapakan pengamanan tempat lokasi dan route yang dilalui.</li>
                                <li>Barang siapa dengan kekerasan / ancaman dalam penyampaian pendapat di muka umum dipidana penjara paling lama 1 ( satu ) Tahun.</li>
                            </ul>



                            <p className='font-semibold'>Persyaratan:</p>

                            <ul className='list-disc inline-block ml-10'>
                                <li>Maksud dan tujuan</li>
                                <li>Lokasi dan rute</li>
                                <li>Waktu dan lama Pelaksanaan</li>
                                <li>Bentuk</li>
                                <li>Penanggung jawab/Korlap</li>
                                <li>Nama dan alamat organisasi, kelompok dan perorangan</li>
                                <li>Alat peraga yang digunakan</li>
                                <li>Jumlah peserta</li>
                            </ul>


                            <hr />
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