import RatingGFX from "@/components/star-rating";
import SubjectCardTemplate from "@/components/subject-card";
import Image from "next/image";
import React from "react";

interface CardInfo {
  Title: string;
  Image: string;
  Description: string;
  Rating: number;
  ExtraInfo: { Day: string; Time: string; }[];
  TutorInfo: {
    UserId: string;
    Name: string;
    Image: string;
    Rank: string;
    Rating: number;
  };
}

export default async function Page({
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
        Rating: 4.5
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
        Rating: 4.5
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
        Rating: 0.5
      },
    },
  ];

  const { slug } = await params;
  const id = typeof slug === "string" ? parseInt(slug) : 0;
  const item = NewOffers[id];

  return (
    <div className="flex flex-col items-center w-full pt-6">
      <section className="max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold pl-4">{item.Title}</h1>
        <br />
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
              <div className="flex flex-row items-center">
                <h3 className="font-bold">Course Rating:</h3>
                {RatingGFX(item.Rating)}
              </div>
              {item.Description}
            </div>
          </div>

          <div className="min-w-48 flex flex-col grow-1 basis-0 gap-2 items-center p-4 shadow-xl bg-neutral-200 h-fit">
            <img
              src={item.TutorInfo.Image}
              alt=""
              className="rounded-full h-32 aspect-square object-cover border-green-700 border-4"
            />
            {RatingGFX(item.TutorInfo.Rating)}
            <div className="flex flex-col items-center">
              <h1 className="font-semibold">Juan Dela Cruz</h1>
              <h2 className="text-neutral-700">
                @
                <a href="#" className="hover:underline">
                  {item.TutorInfo.Name}
                </a>
              </h2>
            </div>
            <div className="badge bg-green-700 px-2 rounded text-white font-bold">
              {item.TutorInfo.Rank}
            </div>
            <div className="flex flex-col gap-2 *:shadow-md *:px-6 *:py-2 *:rounded-2xl *:font-bold mt-10 w-full *:text-center">
              <a href="" className="bg-green-700 text-neutral-50">
                Book Now
              </a>
              <a href="" className="bg-orange-300 text-neutral-800">
                View Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 w-10/12 mt-20">
        <h1 className="font-bold text-2xl">You may also like</h1>
        <div className="flex gap-4 p-1 overflow-x-auto overflow-y-visible *:min-w-80">
          {NewOffers.map((item: CardInfo, i) => {
            return SubjectCardTemplate(item, i)
          })}
        </div>
      </section>
    </div>
  );
}
