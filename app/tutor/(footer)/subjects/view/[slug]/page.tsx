import RadialProgress from "@/components/radial-progress";
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default async function TutorViewSubject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const NewOffers = [
    {
      Title: "S-ITCS111LA Introduction to Computing LAB",
      Image:
        "https://www.mooc.org/hubfs/applications-of-computer-programming.jpg",
      Description:
        "Idk description something na pwedeng ilagay nung tutor? maybe explaining what they know about this subject and such",
      Rating: 2.5,
      ExtraInfo: [
        { Day: "Mon", Time: "7PM-8PM" },
        { Day: "Tue", Time: "7PM-8PM" },
        { Day: "Wed", Time: "7PM-8PM" },
      ],
      TutorInfo: {
        Name: "keikchoco",
        Image:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzMydmdIdWtmNGJHbEJTUVRjeElTRmVVM2Y1aCJ9",
        Rank: "NEW",
        Rating: 4.5,
      },
    },
    {
      Title: "S-ITCP322 Capstone Project 1",
      Image:
        "https://di.ku.dk/Nyheder/2023/fremtidens-programmeringssprog-udvikles-i-danmark/programming_on_screen-1100x600.jpg",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolores voluptatem optio pariatur, veritatis dolore.",
      Rating: 5,
      ExtraInfo: [
        { Day: "Thu", Time: "7PM-8PM" },
        { Day: "Fri", Time: "7PM-8PM" },
        { Day: "Sat", Time: "7PM-8PM" },
        { Day: "Sun", Time: "7PM-8PM" },
      ],
      TutorInfo: {
        Name: "chrys",
        Image:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ3aVA4NGFxalFqSUNJa3h5ZjM2bjFKdU9oNCJ9",
        Rank: "NEW",
        Rating: 4.5,
      },
    },
    {
      Title:
        "S-ITCS227LA Application Development and Emerging Technologies LAB",
      Image:
        "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/10/shutterstock_577183882.jpg",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolores voluptatem optio pariatur, veritatis dolore.",
      Rating: 0,
      ExtraInfo: [
        { Day: "Mon", Time: "7PM-8PM" },
        { Day: "Wed", Time: "7PM-8PM" },
      ],
      TutorInfo: {
        Name: "yas",
        Image:
          "https://scontent.fmnl8-4.fna.fbcdn.net/v/t39.30808-6/495224537_2969928999835726_5957479116127189212_n.jpg?...",
        Rank: "NEW",
        Rating: 0.5,
      },
    },
  ];

  const Data = [
    {
      Views: 130,
      Bookings: 3,
    },
    {
      Views: 39,
      Bookings: 10,
    },
    {
      Views: 12,
      Bookings: 1,
    },
  ];

  const { slug } = await params;
  const id = typeof slug === "string" ? parseInt(slug) : 0;
  const item = NewOffers[id];
  const stats = Data[id];
  const ratio = (stats.Bookings / stats.Views) * 100;

  return (
    <div className="flex flex-col gap-6 w-10/12 text-neutral-800">
      {/* Top Navigation */}
      <div className="flex flex-row justify-between items-center">
        <Link
          href={"/tutor/subjects"}
          className="flex flex-row items-center gap-2 text-lg text-green-700 font-semibold hover:underline"
        >
          <FaArrowAltCircleLeft /> Back to Subjects
        </Link>
        <div className="flex flex-row gap-3 *:px-4 *:py-2 *:rounded-lg *:cursor-pointer *:shadow-md">
          <div className="bg-amber-200 hover:bg-amber-300">Edit</div>
          <div className="bg-red-700 text-white hover:bg-red-800">Delete</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Course Details */}
        <div className="flex flex-col gap-6 lg:w-2/3">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={item.Image}
              alt={item.Title}
              width={800}
              height={400}
              className="w-full h-72 object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">{item.Title}</h1>
            <p className="text-neutral-700">{item.Description}</p>
          </div>

          {/* Availability */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Availability</h2>
            <div className="flex flex-wrap gap-2">
              {item.ExtraInfo.map((slot, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-green-100 border border-green-300 rounded-full text-sm"
                >
                  {slot.Day} – {slot.Time}
                </span>
              ))}
            </div>
          </div>

          {/* Tutor Info */}
          <div className="flex flex-row items-center gap-4 p-4 border rounded-xl bg-neutral-100">
            <Image
              src={item.TutorInfo.Image}
              alt={item.TutorInfo.Name}
              width={70}
              height={70}
              className="rounded-full object-cover border-2 aspect-square border-green-800"
            />
            <div>
              <h3 className="font-bold">{item.TutorInfo.Name}</h3>
              <p className="text-sm text-neutral-600">
                Rank: {item.TutorInfo.Rank}
              </p>
              <p className="text-sm text-neutral-600">
                Rating: {item.TutorInfo.Rating}/5
              </p>
            </div>
          </div>
        </div>

        {/* Right: Statistics */}
        <div className="flex flex-col gap-6 lg:w-1/3 bg-neutral-50 p-6 rounded-xl shadow-md">
          <h1 className="font-bold text-xl text-center">Course Statistics</h1>
          <RadialProgress
            value={(item.Rating / 5) * 100}
            text={item.Rating}
            label="Rating"
          />

          <RadialProgress
            value={ratio}
            text={`${(Math.round(ratio * 100) / 100).toFixed(2)}%`}
            label="View → Appointment Ratio"
          />
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm text-neutral-600">
              Views: <span className="font-semibold">{stats.Views}</span>
            </p>
            <p className="text-sm text-neutral-600">
              Bookings: <span className="font-semibold">{stats.Bookings}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
