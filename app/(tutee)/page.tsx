import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold">Welcome to AnimoAprendo!</h1>
      <p className="mt-4 text-lg">Your learning journey starts here.</p>
      <Link href="/browse" className="mt-6 btn btn-primary">
        Browse Subjects
      </Link>
    </div>
  )
}