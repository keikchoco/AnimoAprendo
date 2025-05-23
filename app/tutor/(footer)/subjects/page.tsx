import { Item } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import React from "react";

export default function TutorSubjects() {
  const Data = [
    {
      Image:
        "https://www.mooc.org/hubfs/applications-of-computer-programming.jpg",
      CourseCode: "S-ITCS111LA",
      SubjectName: "Introduction to Computing LAB",
      Views: "1.3k",
      Bookings: "3",
      Rating: 2.5,
    },
    {
      Image:
        "https://di.ku.dk/Nyheder/2023/fremtidens-programmeringssprog-udvikles-i-danmark/programming_on_screen-1100x600.jpg",
      CourseCode: "S-ITCP322",
      SubjectName: "Capstone Project 1",
      Views: "3.9k",
      Bookings: "10",
      Rating: 4.5,
    },
    {
      Image:
        "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/10/shutterstock_577183882.jpg",
      CourseCode: "S-ITCS227LA",
      SubjectName: "Application Development and Emerging Technologies LAB",
      Views: "120",
      Bookings: "0",
      Rating: 0.5,
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-10/12">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold">Subjects</h1>
        <Link
          href={"#"}
          className="ml-auto py-2 px-4 rounded-2xl font-semibold bg-green-900 text-white"
        >
          Create New Subject
        </Link>
      </div>

      <div className="flex flex-row gap-4 border-b border-green-900 *:px-2 font-semibold">
        <Link
          href={"#"}
          className="ml-2 border border-b-0 rounded-t-lg bg-green-900 text-white"
        >
          Available
        </Link>
        <Link href={"#"}>Pending</Link>
        <Link href={"#"}>Draft</Link>
      </div>

      <table className="table">
        {/* head */}
        <thead className="">
          <tr className="text-center">
            <th></th>
            <th>Rating</th>
            <th>Course Code</th>
            <th>Subject</th>
            <th>Views</th>
            <th>Pending</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="odd:bg-neutral-100">
          {Data.map((data, i) => {
            return (
              <tr
                key={i}
                className="*:border-x *:border-neutral-300 text-center hover:bg-neutral-200"
              >
                <td>
                  <img
                    src={data.Image}
                    alt=""
                    className="h-12 w-20 object-cover"
                  />
                </td>
                <td className="">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <div className="rating">
                      <div
                        className="mask mask-star bg-green-700"
                        aria-label="1 star"
                        aria-current="true"
                      ></div>
                    </div>
                    <span>{data.Rating}</span>
                  </div>
                </td>
                <td>{data.CourseCode}</td>
                <td>{data.SubjectName}</td>
                <td>{data.Views}</td>
                <td>{data.Bookings}</td>
                <th>
                  <div className="flex flex-row gap-2 justify-between *:p-2 *:shadow-lg *:grow-1 *:basis-0 *:rounded-xl *:cursor-pointer">
                    <Link href={"/tutor/subjects/view/" + i} className="bg-amber-200 hover:bg-amber-300">View</Link>
                    <div className="bg-neutral-200 hover:bg-neutral-300">
                      Edit
                    </div>
                    <div className="bg-red-800 hover:bg-red-900 text-white">
                      Delete
                    </div>
                    {/* <Link href={"/tutor/edit/subjects/" + i}>View Details</Link> */}
                  </div>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
