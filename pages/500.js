import Image from "next/image"

export default function Custom500() {
  return (
    <div className="flex items-center justify-center h-screen max-h-screen">
        <div className="text-center">
            <Image width={567} height={473} objectFit="contain" src={"/images/500.webp"}/>
            <h1 className="text-6xl font-semibold font-mono uppercase">Internal Server Error</h1>
        </div>
    </div>
  )
}
