import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center relative w-fit h-1/2">
        <div className="w-screen h-72 relative">
          <Image
            src="/images/DLSUD-rotonda.jpg"
            fill={true}
            alt="DLSUD Rotunda"
            className="object-cover"
          />
        </div>
        <div className="absolute w-full h-full bg-black/50">
          <div className="absolute text-white w-fit h-fit top-1/2 left-1/2 -translate-1/2">
            <h1 className="text-4xl font-bold">AnimoAprendo</h1>
            <p className="mt-4 text-lg">Your learning journey starts here.</p>
          </div>
        </div>
      </div>

    </>

  )
}