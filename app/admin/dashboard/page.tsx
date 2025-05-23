"use client";
import RadialProgress from "@/components/radial-progress";
import RatingGFX from "@/components/star-rating";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const OnlineOnstiteData = {
  labels: ["Online", "Onsite"],
  datasets: [
    {
      label: "Online/Onsite Ratio",
      data: [12, 19],
      backgroundColor: ["rgba(0, 255, 0, 0.5)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(0, 255, 0, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const SubjectOffersData = {
  labels: ["S-ITCS111LA", "S-ITCP322", "S-ITCS227LA"],
  datasets: [
    {
      label: "Offers per Subject",
      data: [14, 9, 5],
      backgroundColor: ["rgba(0, 255, 0, 0.5)", "rgba(54, 162, 235, 0.2)", "rgba(0, 100, 0, 0.5)"],
      borderColor: ["rgba(0, 255, 0, 1)", "rgba(54, 162, 235, 1)", "rgba(0, 100, 0, 1)"],
      borderWidth: 1,
    },
  ],
};

const ActiveAppointments = [
  {
    Tutor: "chrys",
    Tutee: "keikchoco",
    Subject: "S-ITCS111LA",
    Mode: "Online",
    Time: "7-8AM"
  },
  {
    Tutor: "chrys",
    Tutee: "yas",
    Subject: "S-ITCP322",
    Mode: "Onsite",
    Time: "7-8AM"
  },
  {
    Tutor: "yas",
    Tutee: "keikchoco",
    Subject: "S-ITCS227LA",
    Mode: "Online",
    Time: "9-10AM"
  }
]

const Rankings = [
  {
    Name: "Christian Peñano",
    Rating: 5,
    CompletedBookings: 23,
    CompletedHours: 30
  },
  {
    Name: "Jeremiah Nueno",
    Rating: 4.5,
    CompletedBookings: 10,
    CompletedHours: 12
  },
  {
    Name: "Yasmin Abad",
    Rating: 3.5,
    CompletedBookings: 3,
    CompletedHours: 5
  }
]
export default function AdminDashboard() {
  return (
    // <div className=" flex flex-col gap-25">
    //   <div className="flex flex-col items-center gap-4 bg-green-50 p-8 border-2 border-green-900 rounded-2xl">
    //     <div className="flex flex-row gap-4">
    //         {/* Progress */}
    //         {RadialProgress(35, "35/100", "Stats 1")}
    //         {RadialProgress(100, "100/100", "Stats 2")}
    //         {RadialProgress(70, "70/100", "Stats 3")}
    //         <div className="w-48 h-48"><Doughnut data={OnlineOnstiteData}/></div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-row gap-4 w-10/12 justify-center m-auto">
      <div className="grow flex flex-col gap-4">
        <div className="flex flex-row gap-4 *:grow *:basis-0">
          <div className="flex flex-col items-center gap-4 bg-neutral-50 p-8 border-2 border-neutral-600 rounded-2xl">
            <h1 className="font-semibold text-xl">Offers per Subject</h1>
            <div className="w-48 h-48">
              <Doughnut data={SubjectOffersData} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 bg-neutral-50 p-8 border-2 border-neutral-600 rounded-2xl">
            <h1 className="font-semibold text-xl">Online/Onsite Ratio</h1>
            <div className="w-48 h-48">
              <Doughnut data={OnlineOnstiteData} />
            </div>
          </div>
        </div>

        <div className="border-2 rounded-2xl p-4 border-neutral-600">
          <h1 className="font-bold text-2xl">Appointments Today</h1>
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>Tutor</th>
                <th>Tutee</th>
                <th>Subject</th>
                <th>Mode</th>
                <th>Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ActiveAppointments.map((item, i) => (
                <tr key={i}>
                  <td>{item.Tutor}</td>
                  <td>{item.Tutee}</td>
                  <td>{item.Subject}</td>
                  <td>{item.Mode}</td>
                  <td>{item.Time}</td>
                  <td className="font-extrabold">{">"}</td>
                </tr>
              ))}                       
            </tbody>
          </table>
        </div>

        <div className="border-2 rounded-2xl p-4 border-neutral-600">
          <h1 className="font-bold text-2xl">Rankings</h1>
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Completed Booking</th>
                <th>Completed Hours</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Rankings.map((item, i) => (
                <tr key={i}>
                  <td>{item.Name}</td>
                  <td>{RatingGFX(item.Rating)}</td>
                  <td>{item.CompletedBookings}</td>
                  <td>{item.CompletedHours}</td>
                  <td className="font-extrabold">{">"}</td>
                </tr>
              ))}                       
            </tbody>
          </table>
        </div>

      </div>

      <div className="flex flex-col gap-4 *:flex *:flex-col *:gap-4 *:bg-neutral-50 *:border *:border-neutral-600 *:rounded-xl *:p-8">
        <div>
          <h1 className="font-bold text-2xl">Total Number of Users</h1>
          <span className="font-semibold text-xl">1,000</span>
        </div>

        <div>
          <h1 className="font-bold text-2xl">Total Subjects Offered</h1>
          <span className="font-semibold text-xl">1,000</span>
        </div>

        <div>
          <h1 className="font-bold text-2xl">Number of Active Bookings</h1>
          <span className="font-semibold text-xl">1,000</span>
        </div>

      </div>
    </div>
  );
}
