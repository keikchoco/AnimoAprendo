import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-amber-200 w-screen px-4 py-2 font-semibold text-lg text-center">
        Complete your profile to get the best experience with AnimoAprendo{" "}
        <Link
          href={"/tutee/completeprofile"}
          className="shadow-lg rounded-lg px-2 py-1 bg-neutral-100 hover:bg-neutral-200"
        >
          Take me there
        </Link>
      </div>

      <div className="flex flex-col items-center relative w-fit h-80">
        <div className="w-screen h-full relative">
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

      <div className="mt-8 max-w-8/12 items-center">
        <div className="flex flex-row gap-8">
          <Image
            src={"/images/AnimoAprendoGreenTransparent.png"}
            alt=""
            height={500}
            width={500}
            className="grow basis-0 h-60 aspect-square object-contain"
          />
          <div className="grow basis-0 flex flex-col justify-between">
            <h1 className="font-bold text-2xl">About Us</h1>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              impedit, dolores doloribus repellendus nisi inventore repudiandae!
              Aut corporis culpa eaque repellat soluta corrupti alias, accusamus
              esse cupiditate, facilis minima iste.
            </div>
            <Link
              href={"/tutee/browse"}
              className="bg-green-900 text-white text-center py-2 rounded-xl shadow-xl hover:bg-green-950"
            >
              Browse Subjects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
