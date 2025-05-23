import Image from "next/image";
import RatingGFX from "./star-rating";
import { Key } from "react";

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

export default function SubjectCardTemplate(item: CardInfo, i: Key) {
  return (
    <div
      key={i}
      className="card bg-base-100 w-80 shadow-sm rounded-xl overflow-hidden"
    >
      <figure className="h-56">
        <Image
          src={item.Image}
          alt=""
          width={500}
          height={500}
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
        {RatingGFX(item.Rating)}
        <h2 className="line-clamp-2 font-bold text-lg grow-1 max-h-[3em]">
          {item.Title}
        </h2>
        <p className="line-clamp-3 max-h-[4.5em]">{item.Description}</p>
        <ul className="flex flex-wrap mt-auto gap-1 *:rounded-full *:shadow-md *:px-2 *:py-0.5 *w-fit-content *:text-nowrap overflow-x-auto overflow-y-visible scroll no-scrollbar *:grow-1 *:basis-0 *:text-center">
          {item.ExtraInfo.map((info, i) => (
            <li
              key={i}
              className={
                info.Day == "Mon"
                  ? "bg-amber-300"
                  : info.Day == "Tue"
                    ? "bg-blue-400"
                    : info.Day == "Wed"
                      ? "bg-emerald-400"
                      : info.Day == "Thu"
                        ? "bg-fuchsia-300"
                        : info.Day == "Fri"
                          ? "bg-indigo-300"
                          : info.Day == "Sat"
                            ? "bg-red-300"
                            : info.Day == "Sun"
                              ? "bg-teal-300"
                              : "bg-neutral"
              }
            >
              {info.Day} {info.Time}
            </li>
          ))}
        </ul>
        <hr />
        <div className="flex justify-around *:shadow-md *:px-6 *:py-2 *:rounded-2xl *:font-bold">
          <a href="" className="bg-green-700 text-neutral-50">
            Book Now
          </a>
          <a
            href={"/tutee/browse/" + i.toString()}
            className="bg-orange-300 text-neutral-800"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
