import Link from "next/link";
import React from "react";

const AdminSubjects = () => {
  return (
    <div className="w-10/12 m-auto mt-8">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-2xl">Subjects</h1>
        <Link href={"/admin/subjects/create"} className="py-2 px-4 bg-green-800 text-white rounded-xl hover:bg-green-900">Create Subject</Link>
      </div>
      <br />
      <hr className="bg-neutral-600" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Subject</th>
              <th>No. of Tutors</th>
              <th>No. of Active Bookings</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover:bg-neutral-200">
              <td>S-ITCS111LA</td>
              <td>4</td>
              <td>2</td>
              <td>
                <div className="bg-red-800 text-white px-4 py-2 rounded-xl text-center font-bold">
                  Delete
                </div>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover:bg-neutral-200">
              <td>S-ITCP322</td>
              <td>10</td>
              <td>3</td>
              <td>
                <div className="bg-red-800 text-white px-4 py-2 rounded-xl text-center font-bold">
                  Delete
                </div>
              </td>
            </tr>
            {/* row 3 */}
            <tr className="hover:bg-neutral-200">
              <td>S-ITCS227LA</td>
              <td>5</td>
              <td>1</td>
              <td>
                <div className="bg-red-800 text-white px-4 py-2 rounded-xl text-center font-bold">
                  Delete
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSubjects;
