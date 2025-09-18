"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import RatingGFX from "@/components/star-rating";
import SubjectCardTemplate from "@/components/subject-card";
import { useQueryState } from "nuqs";
import { Search } from "lucide-react";

interface CardInfo {
  Title: string;
  Image: string;
  Description: string;
  Rating: number;
  ExtraInfo: { Day: string; Time: string }[];
  TutorInfo: {
    UserId: string;
    Name: string;
    Image: string;
    Rank: number;
    Rating: number;
  };
  Reviews: {
    Image: string;
    Name: string;
    Username: string;
    Rating: number;
    Comment: string;
  }[];
}

export default function Browse() {
  const [search, setSearch] = useQueryState("query", { defaultValue: "" });

  useEffect(() => {
    console.log("Search query:", search);
  }, [search]);

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
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ3aVA4NGFxalFqSUNJa3h5ZjM2bjFKdU9oNCJ9",
        Rank: 1,
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
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ3aVA4NGFxalFqSUNJa3h5ZjM2bjFKdU9oNCJ9",
        Rank: 10,
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
        Rank: 20,
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
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ3aVA4NGFxalFqSUNJa3h5ZjM2bjFKdU9oNCJ9",
        Rank: 30,
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
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ3aVA4NGFxalFqSUNJa3h5ZjM2bjFKdU9oNCJ9",
        Rank: 40,
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
    }
  ];

  return (
    <div className="flex flex-col gap-6 pt-6 w-9/12 h-full">
      <div className="flex flex-col gap-4">
        <form
          className="join w-full bg-white px-0 rounded-lg overflow-hidden border-1"
          action={"/search"}
        >
          <div className="flex w-full items-center">
            <label className="input validator join-item text-black/98 grow">
              <input
                type="text"
                name="query"
                placeholder="Search using a course code or a subject name"
                className="text-lg font-semibold"
                defaultValue={search}
              />
            </label>
            <div className="validator-hint hidden">
              Enter a valid course code or subject name
            </div>
          </div>
          <button className="btn btn-neutral join-item bg-green-950 h-12 w-12 border-0 p-0">
            <Search className="text-white" />{" "}
          </button>
        </form>
        <h1 className="font-normal text-2xl">
          Results for <strong>{search}</strong>
        </h1>
      </div>
      <hr className="border-t border-gray-300" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {NewOffers.map((item: CardInfo, i) => {
            return SubjectCardTemplate(item, i);
          })}
        </div>
    </div>
  );
}
