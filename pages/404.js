import Image from "next/image"

export default function Custom404() {
  return (
    <div className="flex items-center justify-center h-screen max-h-screen">
        <div className="text-center">
            <Image width={567} height={473} objectFit="contain" src={"/images/404.webp"}/>
            <h1 className="text-6xl font-semibold font-mono uppercase">Page not found</h1>
        </div>
    </div>
  )
}

