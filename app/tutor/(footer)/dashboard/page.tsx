import RatingGFX from "@/components/star-rating";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Dashboard() {
  const user = await currentUser();

  if (!user) return <div>Not signed in</div>;

  return (
    <div className="flex flex-row gap-12 w-10/12 mt-8 text-neutral-800">
      {/* Left Panels */}
      <div className="flex flex-col grow-1 basis-0 gap-4 *:px-5 *:py-4 *:border-neutral-400 *:border-2 *:rounded-2xl *:flex *:flex-col *:items-center">
        {/* Profile */}
        <div className="flex flex-col gap-2">
          <Image
            src={user.imageUrl}
            alt=""
            width={500}
            height={500}
            className="object-cover w-[80px] rounded-full border-green-800 border-4"
          />

          <h1 className="font-bold">{user.fullName}</h1>
          <h2 className="text-neutral-600">
            @
            <a href="#" className="hover:underline">
              {user.username}
            </a>
          </h2>

          <Link
            href={"/tutor/profile"}
            className="bg-green-900 text-white w-full text-center py-2 rounded-lg hover:bg-green-800"
          >
            View Profile
          </Link>
        </div>

        {/* Level Overview */}
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-xl">Level Overview</h1>
          <div className="flex flex-col gap-2 w-full *:w-full *:flex text-neutral-600">
            <div className="">
              My Level{" "}
              <span className="text-neutral-800 font-bold ml-auto">New Tutor</span>
            </div>
            <div className="">
              Rating{" "}
              <span className="ml-auto">
                {RatingGFX(5)}
              </span>
            </div>
          </div>
          <Link
            href={"#"}
            className="bg-green-900 text-white w-full text-center py-2 rounded-lg hover:bg-green-800"
          >
            View Progress
          </Link>
        </div>

        {/* Availability */}
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-xl">Availability</h1>
          <h2 className="text-neutral-600">Lorem ipsum dolor sit amet conse adipisicing elit.</h2>
          <Link
            href={"#"}
            className="bg-green-900 text-white w-full text-center py-2 rounded-lg hover:bg-green-800"
          >
            View Availability
          </Link>
        </div>
      </div>

      {/* Right Panels */}
      <div className="flex flex-col gap-6 grow-3 basis-0 text-neutral-800">
        {/* Welcome */}
        <div>
          <h1 className="text-2xl font-bold">Welcome, {user.fullName}</h1>
          <h2 className="text-neutral-600">Dashboard Description: (To Change)</h2>
        </div>
        <hr className="bg-neutral-300" />
        {/* Information */}
        <div className="flex flex-col gap-4 *:border *:px-4 *:py-2 *:rounded-xl *:flex *:flex-row *:justify-between *:items-center">
          <div>
            <div>
              <div className="font-bold">Title</div>
              <div className="">Description</div>
            </div>
            <a href="#" className="bg-green-900 text-white py-2 px-4 rounded-xl hover:bg-green-800">Button</a>
          </div>

          <div>
            <div>
              <div className="font-bold">Title</div>
              <div className="">Description</div>
            </div>
            <a href="#" className="bg-green-900 text-white py-2 px-4 rounded-xl hover:bg-green-800">Button</a>
          </div>

          <div>
            <div>
              <div className="font-bold">Title</div>
              <div className="">Description</div>
            </div>
            <a href="#" className="bg-green-900 text-white py-2 px-4 rounded-xl hover:bg-green-800">Button</a>
          </div>
        </div>

        <hr className="bg-neutral-300" />
        {/* Active Booking */}
        <div>
          <div className="flex flex-col gap-4 *:border *:px-4 *:py-2 *:rounded-xl *:flex *:flex-row *:justify-between *:items-center">
            <div>
              <div className="font-bold">Active Appointments <span className="font-normal">- 0</span></div>

              <a href="/tutor/appointments" className="bg-green-900 text-white py-2 px-4 rounded-xl hover:bg-green-800">View Appointments</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}