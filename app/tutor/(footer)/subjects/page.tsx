import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TutorSubjects() {
  const Data = [
    {
      Image:
        "https://picsum.photos/300/200?random=1",
      CourseCode: "S-ITCS111LA",
      SubjectName: "Introduction to Computing LAB",
      Views: 1300,
      Bookings: 3,
      Rating: 2.5,
    },
    {
      Image:
        "https://picsum.photos/300/200?random=2",
      CourseCode: "S-ITCP322",
      SubjectName: "Capstone Project 1",
      Views: 3900,
      Bookings: 10,
      Rating: 4.5,
    },
    {
      Image:
        "https://picsum.photos/300/200?random=3",
      CourseCode: "S-ITCS227LA",
      SubjectName:
        "Application Development and Emerging Technologies LAB",
      Views: 120,
      Bookings: 0,
      Rating: 0.5,
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-10/12 text-neutral-800">
      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Subject Offerings</h1>
        <Link
          href={"/tutor/subjects/create"}
          className="ml-auto py-2 px-4 rounded-lg font-semibold bg-green-900 text-white hover:bg-green-800"
        >
          + Create New Subject
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex flex-row gap-4 border-b border-green-900 font-semibold">
        <Link
          href={"#"}
          className="px-3 py-1 border border-b-0 rounded-t-lg bg-green-900 text-white"
        >
          Available
        </Link>
        <Link href={"#"} className="px-3 py-1 hover:text-green-900">
          Pending
        </Link>
        <Link href={"#"} className="px-3 py-1 hover:text-green-900">
          Draft
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="table w-full">
          <thead className="bg-green-900 text-white">
            <tr className="text-center">
              <th>Preview</th>
              <th>Rating</th>
              <th>Course Code</th>
              <th>Subject</th>
              <th>Views</th>
              <th>Bookings</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {Data.map((data, i) => (
              <tr
                key={i}
                className="text-center hover:bg-neutral-100 transition"
              >
                {/* Image */}
                <td className="p-2">
                  <Image
                    src={data.Image}
                    alt={data.SubjectName}
                    width={80}
                    height={50}
                    className="h-14 w-24 object-cover rounded-md border"
                  />
                </td>

                {/* Rating */}
                <td className="p-2">
                  <div className="flex flex-col items-center">
                    <div className="rating">
                      <div
                        className="mask mask-star-2 bg-green-700"
                        style={{
                          width: `${(data.Rating / 5) * 100}%`,
                          clipPath: "inset(0 0 0 0)",
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-neutral-700">
                      {data.Rating}
                    </span>
                  </div>
                </td>

                <td className="p-2 font-medium">{data.CourseCode}</td>
                <td className="p-2">{data.SubjectName}</td>
                <td className="p-2">{data.Views}</td>
                <td className="p-2">{data.Bookings}</td>

                {/* Actions */}
                <td className="p-2">
                  <div className="flex flex-row gap-2 justify-center *:px-3 *:py-1 *:rounded-md *:text-sm *:font-medium">
                    <Link
                      href={"/tutor/subjects/view/" + i}
                      className="bg-amber-200 hover:bg-amber-300"
                    >
                      View
                    </Link>
                    <Link
                      href={"/tutor/subjects/edit/" + i}
                      className="bg-neutral-200 hover:bg-neutral-300"
                    >
                      Edit
                    </Link>
                    <button className="bg-red-700 text-white hover:bg-red-800">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
