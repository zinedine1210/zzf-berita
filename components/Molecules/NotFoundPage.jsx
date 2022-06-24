import Link from 'next/link'
import Image from 'next/image'

export default function NotFoundPage({bahasa}) {
  return (
    <div className="max-w-md text-center my-10">
        <h2 className="mb-8">
            <Image width={567} height={473} src="/images/404.webp" alt="Error" objectFit='contain' />
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">{bahasa("error.p")}</p>
        <p className="mt-4 mb-8 text-gray-400">{bahasa("error.p2")}</p>
        <Link href={"/"}><span rel="noopener noreferrer" className="cursor-pointer px-8 py-3 font-semibold rounded bg-main-gradient text-white">{bahasa("error.a")}</span></Link>
    </div>
  )
}
