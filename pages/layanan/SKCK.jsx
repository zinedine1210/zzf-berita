import React, { useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'



export default function SKCK() {
    const [tab, setTab] = useState("1")
    const {t} = useTranslation("common")
  return (
      <Layout lang={t} title="Surat Keterangan Catatan Kepolisian" description={"Surat Keterangan Catatan Kepolisian"}>
          <div className="container py-10">
              <div className="w-full lg:flex justify-center gap-5">
                  <div className="w-full lg:w-[730px] mb-5">
                      <h1 className="text-xl lg:text-2xl font-mono uppercase font-semibold text-center mb-5 dark:text-white">Surat Keterangan Catatan Kepolisian</h1>
                      <div className='text-gray-600 text-sm space-y-5 dark:text-gray-300 leading-7'>
                        <p>Surat Keterangan Catatan Kepolisian (disingkat SKCK), sebelumnya dikenal sebagai Surat Keterangan Kelakuan Baik (disingkat SKKB) adalah surat keterangan yang diterbitkan oleh Polri yang berisikan catatan kejahatan seseorang. Dahulu, sewaktu bernama SKKB, surat ini hanya dapat diberikan yang tidak/belum pernah tercatat melakukan tindakan kejahatan hingga tanggal dikeluarkannya SKKB tersebut.</p>
                        <p>Surat Keterangan Catatan Kepolisian atau SKCK adalah surat keterangan resmi yang diterbitkan oleh POLRI melalui fungsi Intelkam kepada seseorang pemohon/warga masyarakat untuk memenuhi permohonan dari yang bersangkutan atau suatu keperluan karena adanya ketentuan yang mempersyaratkan, berdasarkan hasil penelitian biodata dan catatan Kepolisian yang ada tentang orang tersebut. (Vide Peraturan Kapolri Nomor 18 Tahun 2014)</p>
                        <p>SKCK memiliki masa berlaku sampai dengan 6 (enam) bulan sejak tanggal diterbitkan. Jika telah melewati masa berlaku dan bila dirasa perlu, SKCK dapat diperpanjang oleh yang bersangkutan.</p>
                        <img src="/images/skckonline.jpeg" className='w-full' alt="SKCK Online" />
                        <Link href="https://skck.polri.go.id"><a className='bg-sky-500 rounded-md py-2 px-5 uppercase font-semibold text-white inline-block text-sm'><FontAwesomeIcon icon={faFile} /> Klik Pendaftaran SKCK Online</a></Link>
                      </div>
                  </div>
                  <div className="w-full lg:w-[350px]">
                      <img src="/images/16-PROGRAM-PRIORITAS-KAPOLRI (1).jpg" alt="Program Prioritas" className='mb-5' />
                        <div className='bg-gray-200 space-x-3 mx-auto text-center'>
                            <button onClick={() => setTab("1")} className={`${tab == "1" ? "bg-sky-500 text-white" : "text-black"} text-sm px-2 py-2 font-semibold`}>Persyaratan</button>
                            <button onClick={() => setTab("2")} className={`${tab == "2" ? "bg-sky-500 text-white" : "text-black"} text-sm px-2 py-2 font-semibold`}>Perpanjangan</button>
                            <button onClick={() => setTab("3")} className={`${tab == "3" ? "bg-sky-500 text-white" : "text-black"} text-sm px-2 py-2 font-semibold`}>Biaya SKCK</button>
                        </div>
                        <div className={`${tab == "1" ? "block" : "hidden"} mb-5`}>
                            <div className='mt-5 text-gray-500 text-sm'>
                                <h1>Membuat SKCK Baru</h1>
                                <ol>
                                    <li>Membawa Surat Pengantar dari Kantor Kelurahan tempat domisili pemohon.</li>
                                    <li>Membawa fotocopy KTP/SIM sesuai dengan domisili yang tertera di surat pengantar dari Kantor Kelurahan.</li>
                                    <li>Membawa foto copy kartu keluarga</li>
                                    <li>Membawa fotocopy Akta Kelahiran</li>
                                </ol>
                            </div>
                        </div>

                        <div className={`${tab == "2" ? "block" : "hidden"} mb-5`}>
                            <div className='mt-5 text-gray-500 text-sm'>
                                <h1>Memperpanjang SKCK</h1>
                                <ol>
                                    <li>Membawa Surat Pengantar dari Kantor Kelurahan tempat domisili pemohon.</li>
                                    <li>Membawa fotocopy KTP/SIM sesuai dengan domisili yang tertera di surat pengantar dari Kantor Kelurahan.</li>
                                    <li>Membawa foto copy kartu keluarga</li>
                                    <li>Membawa fotocopy Akta Kelahiran</li>
                                </ol>
                            </div>
                        </div>

                        <div className={`${tab == "3" ? "block" : "hidden"} mb-5`}>
                            <div className='mt-5 text-gray-500 text-sm'>
                                <h1>Biaya membuat SKCK</h1>
                                <ol>
                                    <li>Membawa Surat Pengantar dari Kantor Kelurahan tempat domisili pemohon.</li>
                                    <li>Membawa fotocopy KTP/SIM sesuai dengan domisili yang tertera di surat pengantar dari Kantor Kelurahan.</li>
                                    <li>Membawa foto copy kartu keluarga</li>
                                    <li>Membawa fotocopy Akta Kelahiran</li>
                                </ol>
                            </div>
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