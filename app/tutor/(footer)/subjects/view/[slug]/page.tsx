import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default async function TutorViewSubject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const id = typeof slug === "string" ? parseInt(slug) : 0;
  //   const item = NewOffers[id];

  return (
    <div className="w-10/12">
      <div className="flex flex-row justify-between">
        <Link href={"/tutor/subjects"} className="flex flex-row items-center gap-2 text-xl text-green-700 font-semibold"><FaArrowAltCircleLeft/> Back to Subjects</Link>
        <div className="flex flex-row gap-2 *:shadow-lg *:px-4">
            <div className="bg-amber-200">Edit</div>
            <div className="bg-red-800 text-white">Delete</div>
        </div>
      </div>
    </div>
  );
}
