import { Button } from "@/components/ui/button";
import { clerkClient } from "@clerk/clerk-sdk-node";
import {
  TbCircleDashedNumber1,
  TbCircleDashedNumber2,
  TbCircleDashedNumber3,
  TbCircleDashedNumber4,
  TbCircleDashedNumber5,
  TbCircleDashedNumber6,
  TbCircleDashedNumber7,
  TbCircleDashedNumber8,
} from "react-icons/tb";

import React from "react";
import Image from "next/image";
import RatingGFX from "@/components/star-rating";
import SubjectCardTemplate from "@/components/subject-card";

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
  Reviews: {Image: string, Name: string, Username: string, Rating: number, Comment: string}[];
}

export default async function Browse() {
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
          Name: "Jeremiah Nueno",
          Username: "keikchoco",
          Image:
            "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ4SlpGNlRuZ0k0dU0yMThpeFpsTzNmSDJPMiJ9",
          Rank: "NEW",
          Rating: 4.5,
        },
        Reviews: [
          {
            Image:
              "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ3aVA4NGFxalFqSUNJa3h5ZjM2bjFKdU9oNCJ9",
            Name: "Christian Peñano",
            Username: "chrys",
            Rating: 5.0,
            Comment: "Best learning experience!",
          },
        ],
      },
      {
        Title: "S-ITCP322 Capstone Project 1",
        Image:
          "https://di.ku.dk/Nyheder/2023/fremtidens-programmeringssprog-udvikles-i-danmark/programming_on_screen-1100x600.jpg",
        Description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores voluptatem optio pariatur, veritatis dolore. Voluptatem nihil facilis minus illum hic eum fugit! In tenetur, modi corrupti facere ea inventore?",
        Rating: 5.0,
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
          Name: "Christian Peñano",
          Username: "chrys",
          Image:
            "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ3aVA4NGFxalFqSUNJa3h5ZjM2bjFKdU9oNCJ9",
          Rank: "NEW",
          Rating: 4.5,
        },
        Reviews: [
          {
            Image:
              "https://scontent.fmnl8-4.fna.fbcdn.net/v/t39.30808-6/495224537_2969928999835726_5957479116127189212_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_JkSiHL_U_gQ7kNvwGHMlhl&_nc_oc=AdmOf132lrQBFYqR4RHQiLgUAVjvvobNfG-2LdYukV67TUgB2tZHadD4JvJJoo73dG8&_nc_zt=23&_nc_ht=scontent.fmnl8-4.fna&_nc_gid=B4yWQdg8bcyQhyMmEWgupQ&oh=00_AfKHXBJ7hryFB4h9IRW-Qcgt5rsTwm050yxdLTYKR9t0WQ&oe=6833689D",
            Name: "Yasmin Abad",
            Username: "yas",
            Rating: 5.0,
            Comment: "Wonderful!",
          },
          {
            Image:
              "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ4SlpGNlRuZ0k0dU0yMThpeFpsTzNmSDJPMiJ9",
            Name: "Jeremiah Nueno",
            Username: "keikchoco",
            Rating: 4.5,
            Comment:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium maiores porro tenetur consequuntur. Nemo sed, ducimus fugiat suscipit temporibus necessitatibus earum maiores cumque. Ad quaerat nihil velit corrupti in!",
          },
        ],
      },
      {
        Title:
          "S-ITCS227LA Application Development and Emerging Technologies LAB",
        Image:
          "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/10/shutterstock_577183882.jpg",
        Description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores voluptatem optio pariatur, veritatis dolore. Voluptatem nihil facilis minus illum hic eum fugit! In tenetur, modi corrupti facere ea inventore?",
        Rating: 0.0,
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
          Name: "Yasmin Abad",
          Username: "yas",
          Image:
            "https://scontent.fmnl8-4.fna.fbcdn.net/v/t39.30808-6/495224537_2969928999835726_5957479116127189212_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_JkSiHL_U_gQ7kNvwGHMlhl&_nc_oc=AdmOf132lrQBFYqR4RHQiLgUAVjvvobNfG-2LdYukV67TUgB2tZHadD4JvJJoo73dG8&_nc_zt=23&_nc_ht=scontent.fmnl8-4.fna&_nc_gid=B4yWQdg8bcyQhyMmEWgupQ&oh=00_AfKHXBJ7hryFB4h9IRW-Qcgt5rsTwm050yxdLTYKR9t0WQ&oe=6833689D",
          Rank: "NEW",
          Rating: 0.5,
        },
        Reviews: [
          {
            Image:
              "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ3aVA4NGFxalFqSUNJa3h5ZjM2bjFKdU9oNCJ9",
            Name: "Christian Peñano",
            Username: "chrys",
            Rating: 0.5,
            Comment: "Don't Recommend",
          },
        ],
      },
    ];

  const Popular = [
    "S-ITCS111LA Introduction to Computing LAB",
    "S-ITCP322 Capstone Project 1",
    "S-ITCS227LA Application Development and Emerging Technologies LAB",
    "S-ITCS111LA Introduction to Computing LAB",
    "S-ITCP322 Capstone Project 1",
    "S-ITCS227LA Application Development and Emerging Technologies LAB",
    "S-ITCS111LA Introduction to Computing LAB",
    "S-ITCP322 Capstone Project 1",
  ];
  
  return (
    <div className="flex flex-col gap-10 pt-6 w-10/12 h-full">
      <section className="flex flex-col gap-4 w-full bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="font-bold text-2xl">Popular Subjects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 *:bg-gradient-to-br *:text-lg *:font-semibold *:text-white *:border-green-900 *:shadow-xl *:from-green-500 *:to-green-700 *:p-4 *:border *:rounded *:hover:to-green-600 *:cursor-pointer">
          {Popular.map((item, i) => {
            const icons = [
              TbCircleDashedNumber1,
              TbCircleDashedNumber2,
              TbCircleDashedNumber3,
              TbCircleDashedNumber4,
              TbCircleDashedNumber5,
              TbCircleDashedNumber6,
              TbCircleDashedNumber7,
              TbCircleDashedNumber8,
            ];
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-center gap-2">
                <Icon className="grow-1 basis-0 text-4xl" viewBox="0 0 24 24" />
                <span className="grow-10 basis-0 truncate">{item}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col gap-4 w-full">
        <h1 className="font-bold text-2xl">New Offers</h1>
        <div className="flex gap-4 p-1 overflow-x-auto overflow-y-visible *:min-w-80">
          {NewOffers.map((item: CardInfo, i) => {
            return SubjectCardTemplate(item, i);
          })}
        </div>
      </section>
    </div>
  );
}
