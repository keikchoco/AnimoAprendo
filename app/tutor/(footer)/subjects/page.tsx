"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { EyeIcon, PencilIcon, Trash2Icon } from "lucide-react";

export default function TutorSubjects() {
  const [activeTab, setActiveTab] = useState<"available" | "pending" | "draft">(
    "available"
  );

  const Data = {
    available: [
      {
        Image: "https://picsum.photos/300/200?random=1",
        CourseCode: "S-ITCS111LA",
        SubjectName: "Introduction to Computing LAB",
        Views: 1300,
        Bookings: 3,
        Rating: 2.5,
        Schedule: [
          { Day: "Monday", Time: "1:00 PM" },
          { Day: "Wednesday", Time: "3:00 PM" },
        ],
      },
      {
        Image: "https://picsum.photos/300/200?random=2",
        CourseCode: "S-ITCP322",
        SubjectName: "Capstone Project 1",
        Views: 3900,
        Bookings: 10,
        Rating: 4.5,
        Schedule: [{ Day: "Friday", Time: "10:00 AM" }],
      },
    ],
    pending: [
      {
        Image: "https://picsum.photos/300/200?random=4",
        CourseCode: "S-ENG101",
        SubjectName: "English for Academic Writing",
        Views: 420,
        Bookings: 1,
        Rating: 0,
        Schedule: [{ Day: "Tuesday", Time: "9:00 AM" }],
      },
    ],
    draft: [
      {
        Image: "https://picsum.photos/300/200?random=5",
        CourseCode: "S-MATH301",
        SubjectName: "Advanced Calculus (Draft)",
        Views: 0,
        Bookings: 0,
        Rating: 0,
        Schedule: [],
      },
    ],
  };

  const subjects = Data[activeTab];

  return (
    <div className="flex flex-col gap-6 w-10/12 text-neutral-800">
      {/* Header */}
      <div className="flex flex-row gap-4 flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold text-nowrap">Subject Offerings</h1>
        <Link
          href={"/tutor/subjects/create"}
          className=" md:ml-auto py-2 px-4 rounded-lg font-semibold bg-green-900 text-white hover:bg-green-800 text-nowrap"
        >
          + Create New Subject
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex flex-row gap-4 border-b border-green-900 font-semibold">
        {["available", "pending", "draft"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-3 py-1 rounded-t-lg ${
              activeTab === tab
                ? "bg-green-900 text-white border border-b-0"
                : "hover:text-green-900"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto rounded-lg shadow-md">
        <table className="table w-full">
          <thead className="bg-green-900 text-white">
            <tr className="text-center">
              <th>Preview</th>
              {activeTab == "available" && <th>Rating</th>}
              <th>Course Code</th>
              <th>Subject</th>
              {activeTab == "available" && (
                <>
                  <th>Views</th>
                  <th>Bookings</th>
                </>
              )}

              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {subjects.map((data, i) => (
              <tr
                key={i}
                className="text-center hover:bg-neutral-100 transition"
              >
                <td className="p-2">
                  <Image
                    src={data.Image}
                    alt={data.SubjectName}
                    width={80}
                    height={50}
                    className="h-14 w-24 object-cover rounded-md border"
                  />
                </td>
                {activeTab == "available" && (
                  <td className="p-2">
                    <div className="flex flex-col items-center">
                      <div className="rating relative w-20 h-4 bg-gray-200 rounded">
                        <div
                          className="absolute top-0 left-0 z-2 h-4 bg-green-800 rounded !opacity-90"
                          style={{ width: `${(data.Rating / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-neutral-700">
                        {data.Rating}
                      </span>
                    </div>
                  </td>
                )}
                <td className="p-2 font-medium">{data.CourseCode}</td>
                <td className="p-2">{data.SubjectName}</td>
                {activeTab == "available" && (
                  <>
                    <td className="p-2">{data.Views}</td>
                    <td className="p-2">{data.Bookings}</td>
                  </>
                )}

                <td className="p-2">
                  <div className="flex flex-row gap-2 justify-center *:px-3 *:py-1 *:rounded-md *:text-sm *:font-medium">
                    {activeTab !== "draft" && (
                      <Link
                        href={"/tutor/subjects/view/" + i}
                        className="bg-amber-200 hover:bg-amber-300 aspect-square flex flex-row items-center"
                      >
                        <EyeIcon size={16} />
                      </Link>
                    )}
                    <Link
                      href={"/tutor/subjects/edit/" + i}
                      className="bg-blue-200 hover:bg-blue-300 aspect-square flex flex-row items-center"
                    >
                      <PencilIcon size={16} />
                    </Link>
                    <button className="bg-red-700 text-white hover:bg-red-800 aspect-square hover:cursor-pointer">
                      <Trash2Icon size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {subjects.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center p-4 text-neutral-500">
                  No subjects in this tab yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="block lg:hidden space-y-4">
        {subjects.map((data, i) => (
          <div
            key={i}
            className="card bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={data.Image}
              alt={data.SubjectName}
              width={500}
              height={300}
              className="w-full aspect-video object-cover"
            />
            <div className="p-4 flex flex-col gap-3">
              {/* Title + Rating */}
              <div>
                <h2 className="font-bold text-lg">{data.SubjectName}</h2>
                {activeTab == "available" && (
                  <span className="flex items-center gap-1 text-sm text-gray-700">
                    <StarIcon className="size-5 text-yellow-500" />
                    {data.Rating.toFixed(1)}
                  </span>
                )}
              </div>

              {/* Schedule Pills */}
              {data.Schedule.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {data.Schedule.map((sched, idx) => (
                    <li
                      key={idx}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {sched.Day} {sched.Time}
                    </li>
                  ))}
                </ul>
              )}

              {/* Actions */}
              <div className="flex flex-row gap-2 justify-end *:px-3 *:py-1 *:rounded-md *:text-sm *:font-medium *:flex-1 *:text-center">
                <Link
                  href={"/tutor/subjects/view/" + i}
                  className="bg-amber-200 hover:bg-amber-300"
                >
                  View
                </Link>
                <Link
                  href={"/tutor/subjects/edit/" + i}
                  className="bg-blue-200 hover:bg-blue-300"
                >
                  Edit
                </Link>
                <button className="bg-red-700 text-white hover:bg-red-800">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        {subjects.length === 0 && (
          <p className="text-center text-neutral-500">
            No subjects in this tab yet.
          </p>
        )}
      </div>
    </div>
  );
}
