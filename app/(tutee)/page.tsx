"use client";
import { Button } from "@/components/ui/button";
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
import SubjectCardTemplate from "@/components/subject-card";
import { Search } from "lucide-react";
import { redirect } from "next/navigation";
import TextType from "@/components/reactbits/texttype";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import LogoLoop from "@/components/reactbits/logoloop";
import Image from "next/image";

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

const techLogos = [
  { node: <Image src={"/images/AnimoAprendoMinimalLogo.png"} width={50} height={50} alt="logo"/>, title: "AnimoAprendo", href: "https://animoaprendo.com" },
  { node: <Image src={"/images/DLSUDLogo.png"} width={50} height={50} alt="logo"/>, title: "DLSUD", href: "https://dlsud.edu.ph" },
  {
    node: <Image src={"/images/CICSLogo.png"} width={50} height={50} alt="logo"/>,
    title: "CICS",
    href: "https://www.facebook.com/dlsud.cics",
  },
  {
    node: <Image src={"/images/COSLogo.png"} width={50} height={50} alt="logo"/>,
    title: "COS",
    href: "https://www.facebook.com/profile.php?id=61565118910503",
  },
];

export default function Browse() {
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
        Rank: 1,
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
        Rank: 1,
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

  function handleText(values: any) {
    console.log("test");
    console.log(document.getElementById("hero-title")?.attributes);
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query");
    const queryFormat = String(query).trim().replace(/ /g, "+");

    if (queryFormat) {
      redirect("/search?query=" + queryFormat);
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="w-full">
        <div
          className="hero w-full min-h-[44rem]"
          style={{
            backgroundImage: "url(/images/DLSUD-rotonda.jpg)",
          }}
        >
          <div className="hero-overlay bg-black/60"></div>
          <div className="hero-content !items-start !justify-start text-white/95 w-full">
            <div className="w-full">
              <TextType
                text={["Having trouble with a subject?", "We got you covered!"]}
                id="hero-title"
                typingSpeed={75}
                variableSpeed={{ min: 50, max: 75 }}
                pauseDuration={2000}
                cursorCharacter="_"
                className="text-2xl h-8 lg:h-16 lg:text-5xl font-semibold"
                onSentenceComplete={(sentence, i) => {
                  i == 1 &&
                    document
                      .getElementById("hero-line")
                      ?.classList.replace("opacity-0", "opacity-100");
                }}
              />
              <br />
              <p
                id="hero-line"
                className="lg:mb-3 lg:text-2xl opacity-100 transition-opacity"
              >
                Let our dedicated students and teachers help you excel!
              </p>
              <br />

              <form
                className="join w-full bg-white px-0 rounded-lg max-w-2xl overflow-hidden"
                onSubmit={handleSearch}
              >
                <div className="flex w-full items-center">
                  <label className="input validator join-item text-black/98 grow">
                    <input
                      type="text"
                      name="query"
                      placeholder="Search using a course code or a subject name"
                      className="lg:text-lg lg:font-semibold"
                    />
                  </label>
                  <div className="validator-hint hidden">
                    Enter a valid course code or subject name
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-neutral join-item bg-green-900 hover:bg-green-950 h-12 w-12 border-0 p-0"
                >
                  <Search className="" />{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="w-lvw md:w-[94vw] h-[120px] overflow-x-hidden overflow-y-clip my-2">
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={48}
          scaleOnHover
          gap={60}
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>


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
                  <Icon
                    className="grow-1 basis-0 text-4xl"
                    viewBox="0 0 24 24"
                  />
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
    </>
  );
}
