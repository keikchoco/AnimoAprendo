'use client'
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
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import React, { useRef } from "react";
import SubjectCardTemplate from "@/components/subject-card";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

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

  const NewOffers: CardInfo[] = [
    {
      Title: "Web Development Basics",
      Image: "https://picsum.photos/300/200?random=1",
      Description: "Learn HTML, CSS, and JavaScript from scratch.",
      Rating: 4.5,
      ExtraInfo: [{ Day: "Mon", Time: "10:00 AM" }],
      TutorInfo: {
        UserId: "T1",
        Name: "John Doe",
        Image: "https://i.pravatar.cc/100?img=1",
        Rank: 1,
        Rating: 4.7,
      },
      Reviews: [
        {
          Image: "https://i.pravatar.cc/100?img=11",
          Name: "Alice",
          Username: "@alice",
          Rating: 5,
          Comment: "Great intro to web development!",
        },
      ],
    },
    {
      Title: "Data Structures & Algorithms",
      Image: "https://picsum.photos/300/200?random=2",
      Description: "Master problem-solving with DSA in Java.",
      Rating: 4.8,
      ExtraInfo: [{ Day: "Wed", Time: "2:00 PM" }],
      TutorInfo: {
        UserId: "T2",
        Name: "Jane Smith",
        Image: "https://i.pravatar.cc/100?img=2",
        Rank: 2,
        Rating: 4.9,
      },
      Reviews: [
        {
          Image: "https://i.pravatar.cc/100?img=12",
          Name: "Bob",
          Username: "@bob",
          Rating: 5,
          Comment: "Challenging but rewarding!",
        },
      ],
    },
    {
      Title: "Database Management Systems",
      Image: "https://picsum.photos/300/200?random=3",
      Description: "Learn MySQL, MongoDB, and database design.",
      Rating: 4.6,
      ExtraInfo: [{ Day: "Fri", Time: "4:00 PM" }],
      TutorInfo: {
        UserId: "T3",
        Name: "Michael Lee",
        Image: "https://i.pravatar.cc/100?img=3",
        Rank: 3,
        Rating: 4.6,
      },
      Reviews: [
        {
          Image: "https://i.pravatar.cc/100?img=13",
          Name: "Charlie",
          Username: "@charlie",
          Rating: 4,
          Comment: "Well structured lessons!",
        },
      ],
    },
  ];

  const TrendingTutors = [
    {
      id: "TT1",
      name: "Sarah Kim",
      subject: "UI/UX Design",
      rating: 4.9,
      image: "https://i.pravatar.cc/100?img=4",
    },
    {
      id: "TT2",
      name: "David Park",
      subject: "Cybersecurity",
      rating: 4.8,
      image: "https://i.pravatar.cc/100?img=5",
    },
    {
      id: "TT3",
      name: "Emma Wilson",
      subject: "Mobile App Development",
      rating: 4.7,
      image: "https://i.pravatar.cc/100?img=6",
    },
  ];

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

  return (
    <div className="flex flex-col gap-10 pt-6 w-10/12 h-full m-auto">
      {/* Popular Subjects */}
      <section className="flex flex-col gap-4 w-full bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl text-green-900">🔥 Popular Subjects</h1>
          <button className="btn btn-outline text-white border-white hover:bg-white hover:text-green-900 rounded-lg">
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          {Popular.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-gradient-to-br from-green-500 to-green-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <Icon className="text-3xl shrink-0" />
                <span className="line-clamp-2">{item}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* New Offers */}
      <section className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl text-green-900">🆕 New Offers</h1>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="btn btn-outline text-white border-white hover:bg-white hover:text-green-900 rounded-lg"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="btn btn-outline text-white border-white hover:bg-white hover:text-green-900 rounded-lg"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-6 p-2 overflow-x-auto overflow-y-visible scrollbar-hide scroll-smooth"
        >
          {NewOffers.map((item: CardInfo, i) => SubjectCardTemplate(item, i))}
        </div>
      </section>

      {/* Trending Tutors */}
      <section className="flex flex-col gap-4 w-full bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl text-green-900">🌟 Trending Tutors</h1>
          <button className="btn btn-outline text-white border-white hover:bg-white hover:text-green-900 rounded-lg">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TrendingTutors.map((tutor) => (
            <div
              key={tutor.id}
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-20 h-20 rounded-full border-4 border-green-700"
              />
              <h2 className="font-bold text-lg text-green-900">{tutor.name}</h2>
              <p className="text-sm text-green-800">{tutor.subject}</p>
              <div className="flex items-center gap-1">
                <Star className="text-yellow-500 fill-yellow-500" size={18} />
                <span className="font-semibold text-green-900">{tutor.rating}</span>
              </div>
              <button className="btn btn-outline text-white border-white hover:bg-white hover:text-green-900 rounded-lg">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
