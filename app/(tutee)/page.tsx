import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center relative">
      <div className="object-cover w-screen h-1/2 relative">
        <Image
          src="/images/DLSUD-rotonda.jpg"
          fill={true}
          alt="DLSUD Rotunda"
          className="object-cover"
        />
      </div>
      <div className="absolute text-white w-full h-full">
        <h1 className="text-4xl font-bold">AnimoAprendo</h1>
        <p className="mt-4 text-lg">Your learning journey starts here.</p>
      </div>

      <section>
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-3xl font-semibold">Welcome to AnimoAprendo</h2>
          <p className="mt-4 text-lg">A peer-to-peer learning platform.</p>
          <Link href="/tutee/subjects" className="btn btn-primary mt-6">
            Explore Subjects
          </Link>
        </div>
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-3xl font-semibold">How It Works</h2>
          <p className="mt-4 text-lg">
            Connect with peers, share knowledge, and enhance your learning experience.
          </p>
          <div className="mt-6">
            <Link href="/tutee/how-it-works" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-3xl font-semibold">Join Our Community</h2>
          <p className="mt-4 text-lg">
            Sign up to become a part of our vibrant learning community.
          </p>
          <div className="mt-6">
            <Link href="/tutee/signup" className="btn btn-accent">
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}