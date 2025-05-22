import { Button } from "@/components/ui/button";
import { clerkClient } from "@clerk/clerk-sdk-node";
import React from "react";

interface CardInfo {
  Title: string;
  Image: string;
  Description: string;
  Rating: Number;
  ExtraInfo: [
    {
      Day: string;
      Time: string;
    },
  ];
  TutorInfo: {
    UserId: string;
    Name: string;
    Image: string;
    Rank: string;
  };
}

export default async function Browse() {
  const Popular = [
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
      },
    },
  ];

  return (
    <div className="flex flex-col gap-10 pt-6 w-10/12 h-full">
      <section className="flex flex-col gap-4 w-full bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="font-bold text-2xl">Popular Subjects</h1>
        <div className="grid grid-cols-4 gap-2 *:bg-gradient-to-br *:text-lg *:font-semibold *:text-white *:border-green-900 *:shadow-xl *:from-green-500 *:to-green-700 *:p-4 *:border *:rounded *:truncate *:hover:to-green-600 *:cursor-pointer">
          <div>S-ITCS111LA Introduction to Computing LAB</div>
          <div>S-ITCP322 Capstone Project 1</div>
          <div>S-ITCS227LA Application Development and Emerging Technologies LAB</div>
          <div>S-ITCS111LA Introduction to Computing LAB</div>
          <div>S-ITCP322 Capstone Project 1</div>
          <div>S-ITCS227LA Application Development and Emerging Technologies LAB</div>
          <div>S-ITCS111LA Introduction to Computing LAB</div>
          <div>S-ITCP322 Capstone Project 1</div>
          
        </div>

      </section>

      <section className="flex flex-col gap-4 w-full">
        <h1 className="font-bold text-2xl">New Offers</h1>
        <div className="flex gap-4 p-1 overflow-x-auto overflow-y-visible *:min-w-80">
          {Popular &&
            Popular.map((item, i) => (
              <div
                key={i}
                className="card bg-base-100 w-80 shadow-sm rounded-xl overflow-hidden"
              >
                <figure className="h-56">
                  <img
                    src={item.Image}
                    alt="Shoes"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body bg-green-50">
                  <div className="flex gap-2 items-center">
                    <img
                      src={item.TutorInfo.Image}
                      alt=""
                      className="rounded-full h-8 aspect-square object-cover"
                    />
                    {item.TutorInfo.Name}
                    <div className="badge bg-green-700 px-2 rounded text-white font-bold ml-auto">
                      {item.TutorInfo.Rank}
                    </div>
                  </div>
                  <hr />
                  <div className="rating rating-half">
                    <div className="rating-hidden" aria-current={item.Rating == 0.0 ? "true" : "false"}></div>
                    <div className="mask mask-star-2 mask-half-1 bg-green-700" aria-label="0.5 star" aria-current={item.Rating == 0.5 ? "true" : "false"}></div>
                    <div className="mask mask-star-2 mask-half-2 bg-green-700" aria-label="1.0 star" aria-current={item.Rating == 1.0 ? "true" : "false"}></div>
                    <div className="mask mask-star-2 mask-half-1 bg-green-700" aria-label="1.5 star" aria-current={item.Rating == 1.5 ? "true" : "false"}></div>
                    <div className="mask mask-star-2 mask-half-2 bg-green-700" aria-label="2.0 star" aria-current={item.Rating == 2.0 ? "true" : "false"}></div>
                    <div className="mask mask-star-2 mask-half-1 bg-green-700" aria-label="2.5 star" aria-current={item.Rating == 2.5 ? "true" : "false"}></div>
                    <div className="mask mask-star-2 mask-half-2 bg-green-700" aria-label="3.0 star" aria-current={item.Rating == 3.0 ? "true" : "false"}></div>
                    <div className="mask mask-star-2 mask-half-1 bg-green-700" aria-label="3.5 star" aria-current={item.Rating == 3.5 ? "true" : "false"}></div>
                    <div className="mask mask-star-2 mask-half-2 bg-green-700" aria-label="4.0 star" aria-current={item.Rating == 4.0 ? "true" : "false"}></div>
                    <div className="mask mask-star-2 mask-half-1 bg-green-700" aria-label="4.5 star" aria-current={item.Rating == 4.5 ? "true" : "false"}></div>
                    <div className="mask mask-star-2 mask-half-2 bg-green-700" aria-label="5.0 star" aria-current={item.Rating == 5.0 ? "true" : "false"}></div>
                  </div>
                  <h2 className="line-clamp-2 font-bold text-lg grow-1 max-h-[3em]">
                    {item.Title}
                  </h2>
                  <p className="line-clamp-3 max-h-[4.5em]">
                    {item.Description}
                  </p>
                  <ul className="flex flex-wrap mt-auto gap-1 *:rounded-full *:shadow-md *:px-2 *:py-0.5 *w-fit-content *:text-nowrap overflow-x-auto overflow-y-visible scroll no-scrollbar *:grow-1 *:basis-0 *:text-center">
                    {item.ExtraInfo.map((info) => (
                      <li
                        className={
                          info.Day == "Mon" ? "bg-amber-300"
                          : info.Day == "Tue" ? "bg-blue-400"
                          : info.Day == "Wed" ? "bg-emerald-400"
                          : info.Day == "Thu" ? "bg-fuchsia-300"
                          : info.Day == "Fri" ? "bg-indigo-300"
                          : info.Day == "Sat" ? "bg-red-300"
                          : info.Day == "Sun" ? "bg-teal-300"
                          : "bg-neutral"
                        }
                      >
                        {info.Day} {info.Time}
                      </li>
                    ))}
                  </ul>
                  <hr />
                  <div className="flex justify-around *:shadow-md *:px-6 *:py-2 *:rounded-2xl *:font-bold">
                    <a href="#" className="bg-green-700 text-neutral-50">
                      Book Now
                    </a>
                    <a href="#" className="bg-orange-300 text-neutral-800">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
