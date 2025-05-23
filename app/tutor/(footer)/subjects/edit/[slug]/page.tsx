import RadialProgress from "@/components/radial-progress";
import RatingGFX from "@/components/star-rating";
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
        {
          Day: "Mon",
          Time: "7PM-8PM",
        },
        {
          Day: "Tue",
          Time: "7PM-8PM",
        },
        {
          Day: "Wed",
          Time: "7PM-8PM",
        },
      ],
      TutorInfo: {
        UserId: "",
        Name: "keikchoco",
        Image:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ4SlpGNlRuZ0k0dU0yMThpeFpsTzNmSDJPMiJ9",
        Rank: "NEW",
        Rating: 4.5,
      },
    },
    {
      Title: "S-ITCP322 Capstone Project 1",
      Image:
        "https://di.ku.dk/Nyheder/2023/fremtidens-programmeringssprog-udvikles-i-danmark/programming_on_screen-1100x600.jpg",
      Description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores voluptatem optio pariatur, veritatis dolore. Voluptatem nihil facilis minus illum hic eum fugit! In tenetur, modi corrupti facere ea inventore?",
      Rating: 5,
      ExtraInfo: [
        {
          Day: "Thu",
          Time: "7PM-8PM",
        },
        {
          Day: "Fri",
          Time: "7PM-8PM",
        },
        {
          Day: "Sat",
          Time: "7PM-8PM",
        },
        {
          Day: "Sun",
          Time: "7PM-8PM",
        },
      ],
      TutorInfo: {
        UserId: "",
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
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores voluptatem optio pariatur, veritatis dolore. Voluptatem nihil facilis minus illum hic eum fugit! In tenetur, modi corrupti facere ea inventore?",
      Rating: 0,
      ExtraInfo: [
        {
          Day: "Mon",
          Time: "7PM-8PM",
        },
        {
          Day: "Wed",
          Time: "7PM-8PM",
        },
      ],
      TutorInfo: {
        UserId: "",
        Name: "yas",
        Image:
          "https://scontent.fmnl8-4.fna.fbcdn.net/v/t39.30808-6/495224537_2969928999835726_5957479116127189212_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_JkSiHL_U_gQ7kNvwGHMlhl&_nc_oc=AdmOf132lrQBFYqR4RHQiLgUAVjvvobNfG-2LdYukV67TUgB2tZHadD4JvJJoo73dG8&_nc_zt=23&_nc_ht=scontent.fmnl8-4.fna&_nc_gid=B4yWQdg8bcyQhyMmEWgupQ&oh=00_AfKHXBJ7hryFB4h9IRW-Qcgt5rsTwm050yxdLTYKR9t0WQ&oe=6833689D",
        Rank: "NEW",
        Rating: 0.5,
      },
    },
  ];
  const Data = [
    {
      Image:
        "https://www.mooc.org/hubfs/applications-of-computer-programming.jpg",
      CourseCode: "S-ITCS111LA",
      SubjectName: "Introduction to Computing LAB",
      Views: 130,
      Bookings: 3,
      Rating: 2.5,
    },
    {
      Image:
        "https://di.ku.dk/Nyheder/2023/fremtidens-programmeringssprog-udvikles-i-danmark/programming_on_screen-1100x600.jpg",
      CourseCode: "S-ITCP322",
      SubjectName: "Capstone Project 1",
      Views: 39,
      Bookings: 10,
      Rating: 5,
    },
    {
      Image:
        "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/10/shutterstock_577183882.jpg",
      CourseCode: "S-ITCS227LA",
      SubjectName: "Application Development and Emerging Technologies LAB",
      Views: 12,
      Bookings: 1,
      Rating: 0,
    },
  ];

  const { slug } = await params;
  const id = typeof slug === "string" ? parseInt(slug) : 0;
  const item = NewOffers[id];
  const ratio = (Data[id].Bookings / Data[id].Views) * 100

  return (
    <div className="flex flex-col gap-4 w-10/12">
      <div className="flex flex-row justify-between">
        <Link
          href={"/tutor/subjects"}
          className="flex flex-row items-center gap-2 text-xl text-green-700 font-semibold"
        >
          <FaArrowAltCircleLeft /> Back to Subjects
        </Link>
        <div className="flex flex-row gap-2 *:shadow-lg *:px-4 *:py-2 *:rounded-xl">
          <div className="grow-1 basis-0 bg-amber-200">Edit</div>
          <div className="grow-1 basis-0 bg-red-800 text-white">Delete</div>
        </div>
      </div>

      <div>
        <section className="">
          <div className="flex flex-wrap gap-8 *:rounded-4xl *:overflow-hidden">
            <div className="min-w-xl md:min-w-2xl grow-3 basis-0">
              <figure className="h-96">
                <Image
                  src={item.Image}
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="p-8 text-2xl">
                <h1 className="text-2xl md:text-3xl font-bold">{item.Title}</h1>
                {item.Description}
              </div>
            </div>

            <div className="min-w-48 flex flex-col grow-1 basis-0 gap-5 items-center p-4 shadow-xl bg-neutral-200 h-fit">
              <h1 className="font-bold text-xl">Course Statistics</h1>
              {RadialProgress((item.Rating / 5) * 100, item.Rating, "Rating")}
              {RadialProgress(ratio, (Math.round(ratio * 100) / 100).toFixed(2) + "%", "View to Appointment Ratio")}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
