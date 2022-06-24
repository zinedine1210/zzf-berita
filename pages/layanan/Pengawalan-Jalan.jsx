import Layout from '../../components/Layouts/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import FollowUs from "../../components/Organism/FollowUs"



export default function PengawalanJalan() {
    const {t} = useTranslation("common")
  return (
      <Layout lang={t} title={"Pengawalan Jalan"} description={"Pengawalan Jalan"}>
          <div className="container py-10">
              <div className="w-full lg:flex justify-center gap-5">
                  <div className="w-full lg:w-[730px] mb-5">
                      <h1 className="text-xl lg:text-2xl font-mono uppercase font-semibold text-center mb-5 dark:text-white">Pengawalan Jalan</h1>
                      <div className='text-black text-sm space-y-5 dark:text-white leading-6'>
                        <p>Pada dasarnya menggunakan sarana dan prasana jalan untuk keperluan berlalu lintas adalah hak asasi setiap orang. Semua orang mempunyai hak yang sama untuk menggunakan jalan untuk berlalu lintas. Tidak ada seorang pun mempunyai hak untuk diutamakan, kecuali didasarkan pada peraturan perundang-undangan yang berlaku. Peraturan perundang-undangan yang ada memberikan peluang bagi orang tertentu atau kendaraan yang digunakan bagi keperluan tertentu mendapatkan prioritas menggunakan jalan untuk berlalu lintas. Hak utama itu diatur dalam Peraturan Pemerintah (PP) Nomor 43 Tahun 1993.</p>
                        <p>Dalam Pasal 65 ayat 1 disebutkan, pemakai jalan wajib mendahulukan sesuai urutan prioritas sebagai berikut:</p>
                            <ul className="list-disc ml-10">
                                <li>Kendaraan pemadam kebakaran yang sedang melaksanakan tugas</li>
                                <li>Ambulans yang mengangkut orang sakit</li>
                                <li>Kendaraan untuk memberi pertolongan pada kecelakaan lalu lintas</li>
                                <li>Kendaraan Kepala Negara (Presiden dan Wakil Presiden) atau Pemerintah Asing yang menjadi tamu negara</li>
                                <li>Iring-iringan pengantar jenazah</li>
                                <li>Konvoi, pawai atau kendaraan orang cacat</li>
                                <li>Kendaraan yang penggunaannya untuk keperluan khusus atau mengangkut barang-barang khusus.</li>
                            </ul>
                        <p>Semua kendaraan tersebut di atas wajib didahulukan dalam berlalu lintas. Kendaraan yang mendapatkan prioritas tersebut, berdasarkan ayat 2 Pasal 65 PP diatas harus disertai dengan peng-awalan petugas yang berwenang atau dilengkapi dengan isyarat atau tanda-tanda lain.</p>
                        <p>Dalam ayat 3 ditegaskan lagi, petugas yang berwenang melakukan pengamanan apabila mengetahui adanya pemakai jalan yang diprioritaskan tersebut.</p>
                        <p>Dalam ayat 4 ditambahkan, perintah atau larangan yang dinyatakan dengan alat pemberi isyarat lalu-lintas tentang isyarat berhenti tidak diberlakukan kepada kendaraan-kendaraan sebagaimana dimaksud dalam ayat 1 huruf “a” sampai dengan “e”.</p>
                        <hr className='mt-5'/>

                    <FollowUs bahasa={t} instagram={true} facebook={true} youtube={true} twitter={true}/>
                    <div className='text-center mx-auto'>
                      <Image width={300} height={500} src="/images/presisi-logo-239x300.webp" alt="Program Prioritas" objectFit='contain' className='mb-5' />

                    </div>    <section>
                            <h1 className='font-semibold text-xl'>Kewenangan Pengawalan Jalan oleh Polri</h1>
                            <p>Esensi dari pengawalan tidak lain memang memberikan pengamanan, baik terhadap kendaraan yang dikawal, maupun pengguna jalan lain yang berada di sekitar kendaraan yang dikawal. Karena menyangkut pengamanan, pihak yang paling berwenang adalah POLRI. Karena pengamanan adalah bagian dari tugas pokok Polri.</p>

                            <p>Dalam Pasal 14 ayat 1 huruf “a” UU Nomor 2 tahun 2002 tentang Kepolisian Negara Republik Indonesia disebutkan, dalam melaksanakan tugas pokoknya, Polri bertugas melaksanakan pengaturan, penjagaan, pengawalan, dan patroli terhadap kegiatan masyarakat dan pemerintah sesuai kebutuhan.</p>

                            <hr className='mt-5'/>
                        </section>

                        <section>
                            <h1 className='font-semibold text-xl'>Konsekuensi Pengguna Jalan Lainnya</h1>
                            <p>Bila terdapat tindakan pengawalan jalan, maka menjadi kewajiban kepada pengguna jalan lain untuk memberikan prioritas kepada kendaraan yang dikawal.</p>

                            <p>Dalam Pasal 34 ayat 1 PP Nomor 43 Tahun 1993 ditegaskan bahwa dalam keadaan tertentu petugas Kepolisian Negara Republik Indonesia dapat melakukan tindakan:</p>

                            <ul className='list-disc ml-10'>
                                <li>Memberhentikan arus lalu lintas dan/atau pemakai jalan tertentu</li>
                                <li>Memerintahkan pemakai jalan untuk jalan terus</li>
                                <li>Mempercepat arus lalu lintas</li>
                                <li>Memperlambat arus lalu lintas</li>
                                <li>Mengubah arah arus lalu lintas</li>
                            </ul>

                            <p>Dalam Pasal 34 Ayat 2 PP Nomor 43 Tahun 1993 juga ditekankan, pemakai jalan wajib mematuhi perintah yang diberikan oleh petugas polisi. Pada ayat 2 dipertegas lagi, perintah yang diberikan oleh petugas polisi sebagaimana dimaksud dalam ayat 1, wajib didahulukan daripada perintah yang diberikan oleh alat pemberi isyarat lalu lintas.</p>

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