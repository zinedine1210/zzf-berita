import { useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import FollowUs from "../../components/Organism/FollowUs"
import Image from 'next/image'


export default function SKCK() {
    const [tab, setTab] = useState("1")
    const {t} = useTranslation("common")
  return (
      <Layout lang={t} title="Surat Keterangan Catatan Kepolisian" description={"Surat Keterangan Catatan Kepolisian"}>
          <div className="container py-10">
              <div className="w-full lg:flex justify-center gap-5">
                  <div className="w-full lg:w-[730px] mb-5">
                      <h1 className="text-xl lg:text-2xl font-mono uppercase font-semibold text-center mb-5 dark:text-white">Surat Keterangan Catatan Kepolisian</h1>
                      <div className='text-black dark:text-white text-sm space-y-5 leading-7'>
                        <p>Surat Keterangan Catatan Kepolisian (disingkat SKCK), sebelumnya dikenal sebagai Surat Keterangan Kelakuan Baik (disingkat SKKB) adalah surat keterangan yang diterbitkan oleh Polri yang berisikan catatan kejahatan seseorang. Dahulu, sewaktu bernama SKKB, surat ini hanya dapat diberikan yang tidak/belum pernah tercatat melakukan tindakan kejahatan hingga tanggal dikeluarkannya SKKB tersebut.</p>
                        <p>Surat Keterangan Catatan Kepolisian atau SKCK adalah surat keterangan resmi yang diterbitkan oleh POLRI melalui fungsi Intelkam kepada seseorang pemohon/warga masyarakat untuk memenuhi permohonan dari yang bersangkutan atau suatu keperluan karena adanya ketentuan yang mempersyaratkan, berdasarkan hasil penelitian biodata dan catatan Kepolisian yang ada tentang orang tersebut. (Vide Peraturan Kapolri Nomor 18 Tahun 2014)</p>
                        <p>SKCK memiliki masa berlaku sampai dengan 6 (enam) bulan sejak tanggal diterbitkan. Jika telah melewati masa berlaku dan bila dirasa perlu, SKCK dapat diperpanjang oleh yang bersangkutan.</p>
                        {/* <img src="/images/skckonline.jpeg" className='w-full' alt="SKCK Online" /> */}
                        <Link href="https://skck.polri.go.id"><a className='bg-sky-500 rounded-md py-2 px-5 uppercase font-semibold text-white inline-block text-sm'><FontAwesomeIcon icon={faFile} /> Klik Pendaftaran SKCK Online</a></Link>
                      </div>

                      <section className='mt-10'>
                        <div className='bg-gray-200 mx-auto text-center inline-block'>
                            <button onClick={() => setTab("1")} className={`${tab == "1" ? "bg-sky-500 text-white" : "text-black"} text-sm px-5 py-3 font-semibold`}>Persyaratan SKCK</button>
                            <button onClick={() => setTab("2")} className={`${tab == "2" ? "bg-sky-500 text-white" : "text-black"} text-sm px-5 py-3 font-semibold`}>Perpanjangan SKCK</button>
                            <button onClick={() => setTab("3")} className={`${tab == "3" ? "bg-sky-500 text-white" : "text-black"} text-sm px-5 py-3 font-semibold`}>Biaya SKCK</button>
                        </div>
                        <div className={`${tab == "1" ? "block" : "hidden"} mb-5`}>
                            <div className='mt-5 text-black dark:text-white text-sm'>
                                <h1>Membuat SKCK Baru</h1>
                                <ol className='list-disc ml-10'>
                                    <li>Membawa Surat Pengantar dari Kantor Kelurahan tempat domisili pemohon.</li>
                                    <li>Membawa fotocopy KTP/SIM sesuai dengan domisili yang tertera di surat pengantar dari Kantor Kelurahan.</li>
                                    <li>Membawa foto copy kartu keluarga</li>
                                    <li>Membawa fotocopy Akta Kelahiran</li>
                                    <li>Membawa Pas Foto terbaru dan berwarna ukuran 4×6 sebanyak 6 lembar.</li>
                                    <li>Mengisi Formulir Daftar Riwayat Hidup yang telah disediakan di kantor Polisi dengan jelas dan benar.</li>
                                    <li>Pengambilan Sidik Jari oleh petugas.</li>
                                </ol>
                            </div>
                        </div>

                        <div className={`${tab == "2" ? "block" : "hidden"} mb-5`}>
                            <div className='mt-5 text-black dark:text-white text-sm'>
                                <h1>Memperpanjang masa berlaku SKCK</h1>
                                <ol className='list-disc ml-10'>
                                    <li>Membawa lembar SKCK lama yang asli/legalisir (maksimal telah habis masanya selama 1 tahun)</li>
                                    <li>Membawa fotocopy KTP/SIM.</li>
                                    <li>Membawa fotocopy Kartu Keluarga.</li>
                                    <li>Membawa fotocopy Akta Kelahiran/Kenal Lahir.</li>
                                    <li>Membawa Pas Foto terbaru yang berwarna ukuran 4×6 sebanyak 3 lembar.</li>
                                    <li>Mengisi formulir perpanjangan SKCK yang disediakan di kantor Polisi.</li>
                                </ol>
                                <p>Catatan:</p>
                                <ul className="list-disc ml-10">
                                    <li>Polsek tidak menerbitkan SKCK untuk keperluan :
                                        <ul className='list-decimal ml-10'>
                                            <li>Melamar / melengkapi administrasi PNS / CPNS.</li>
                                            <li>Pembuatan visa / keperluan lain yang bersifat antar-negara.</li>
                                        </ul>
                                    </li>
                                    <li>Polsek/Polres penerbit SKCK harus sesuai dengan alamat KTP/SIM pemohon.</li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${tab == "3" ? "block" : "hidden"} mb-5`}>
                            <div className='mt-5 text-black dark:text-white text-sm'>
                                <h1>Biaya membuat SKCK</h1>
                                <p>Dasar:</p>
                                <ol className='list-disc ml-10'>
                                    <li>UU RI No.20 Tahun 1997 tentang Penerimaan Bukan Pajak (PNBP)</li>
                                    <li>UU RI No.2 Tahun 2002 tentang Kepolisian Negara Republik Indonesia</li>
                                    <li>PP RI No.50 Tahun 2010 tentang Tarif atas Jenis Penerimaan Bukan Pajak yang berlaku pada instansi Polri</li>
                                    <li>Surat Telegram Kapolri Nomor : ST/1928/VI/2010 tanggal 23 Juni 2010 tentang
Pemberlakuan PP RI No.50 Tahun 2010</li>
                                </ol>
                                <p>Biaya pembuatan SKCK adalah Rp. 10.000 (sepuluh ribu rupiah).
Biaya tersebut disetorkan kepada petugas Polri ditempat.</p>
                            </div>
                        </div>
                      </section>
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