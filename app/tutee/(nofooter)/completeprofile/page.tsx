"use client";

import { Key, useState } from "react";

export default function CompelteProfile() {
  const [college, setCollege] = useState("");
  const [yearLevel, setYearLevel] = useState("0");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [specialization, setSpecialization] = useState("");

  const handleSetCollege = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCollege(event.target.value);
  };
  const handleSetYearLevel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYearLevel(event.target.value);
  };
  const handleSetDepartment = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartment(event.target.value);
  };
  const handleSetSpecialization = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSpecialization(event.target.value);
  };
  const handleSetSemester = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSemester(event.target.value);
  };

  const CollegeData = {
    CICS: {
      Departments: ["Information Technology", "Computer Science"],
      Specialization: {
        "Information Technology": ["Networking", "Web Development"],
        "Computer Science": ["Game Development", "Inteligent Systems"],
      },
      Subjects: {
        "Information Technology": {
          "1": {
            "First Semester": [
              "S-ITCS112LA FUNDAMENTALS OF PROGRAMMING LAB",
              "S-ITCS112 FUNDAMENTALS OF PROGRAMMING LEC",
              "S-ITCS111LA INTRODUCTION TO COMPUTING LAB",
              "S-ITCS111 INTRODUCTION TO COMPUTING LEC",
              "G-MATH100 MATHEMATICS IN THE MODERN WORLD",
              "G-SOSC001 MGA BABASAHIN HINGGIL SA KASAYSAYAN NG PILIPINAS",
              "D-REED001 OUR CHRISTIAN FAITH AND LASALLIAN IDENTITY",
              "G-PHED001 PHYSICAL FITNESS AND SELF-TESTING ACTIVITIES",
              "D-SEPR000 STUDENT ENGAGEMENT PROGRAM",
              "G-NSTP001 TOWARDS ONE GOAL: SOCIAL TRANSFORMATION",
              "G-PSYC101 UNDERSTANDING THE SELF",
            ],
            "Second Semester": [
              "G-NSTP002 COMMUNITY SERVICE BY FOCUS PROGRAMS: HEALTH, EDUCATION, LIVELIHOOOD, PASTORAL AND SELF GOVERNANCE",
              "G-FILI101 DISKURSO SA FILIPINO",
              "G-ENGL101 ENGLISH FOR PURPOSIVE COMMUNICATION",
              "S-SCEN001TP ENVIRONMENTAL SCIENCE",
              "S-ITPC121LA FUNDAMENTALS OF DATABASE SYSTEMS LAB",
              "S-ITPC121 FUNDAMENTALS OF DATABASE SYSTEMS LEC",
              "G-PHED002 INDIVIDUAL-DUAL SPORTS/DANCE",
              "S-ITCS123LA INTERMEDIATE PROGRAMMING LAB",
              "S-ITCS123 INTERMEDIATE PROGRAMMING LEC",
              "D-REED002 CHRISTIAN DISCIPLESHIP IN THE MODERN WORLD",
            ],
          },
          "2": {
            "First Semester": [],
            "Second Semester": [],
          },
          "3": {
            "Web Development": {
              "First Semester": [
                "S-ITCS318LA INFORMATION ASSURANCE AND SECURITY 1 LAB",
                "S-ITCS318 INFORMATION ASSURANCE AND SECURITY 1 LEC",
                "S-ITPC316LA INTEGRATIVE PROGRAMMING TECHNOLOGIES 1 LAB",
                "S-ITPC316 INTEGRATIVE PROGRAMMING TECHNOLOGIES 1 LEC",
                "S-ITPE002 IT PROFESSIONAL ELECTIVE LEC",
                "S-ITPE002LA IT PROFESSIONAL ELECTIVE LAB",
                "S-ITWB312LA MOBILE ENTERPRISE SYSTEMS LAB",
                "S-ITWB312 MOBILE ENTERPRISE SYSTEMS LEC",
                "S-ITPC315LA NETWORKING 2 LAB",
                "S-ITPC315 NETWORKING 2 LEC",
                "S-ITWB311LA WEB DEVELOPMENT LAB",
                "S-ITWB311 WEB DEVELOPMENT LEC",
                "G-SOSC005 CONTEMPORARY WORLD",
              ],
              "Second Semester": [
                "S-ITCP322 CAPSTONE PROJECT 1",
                "D-ENGL003 ENGLISH IN THE WORKPLACE",
                "S-ITPC327LA INFORMATION ASSURANCE SECURITY 2 LAB",
                "S-ITPC327 INFORMATION ASSURANCE SECURITY 2 LEC",
                "G-SOSC002 KURSONG RIZAL",
                "S-ITWB323LA MULTIMEDIA SYSTEMS LAB",
                "S-ITWB323 MULTIMEDIA SYSTEMS LEC",
                "S-ITCS329 SOCIAL ISSUES AND PROFESSIONAL PRACTICE",
                "S-ITPC328LA SYSTEM INTEGRATION AND ARCHITECTURE 1 LAB",
                "S-ITPC328 SYSTEM INTEGRATION AND ARCHITECTURE 1 LEC",
              ],
            },
            Networking: {
              "First Semester": [],
              "Second Semester": [],
            },
          },
          "4": {
            "Web Development": {
              "First Semester": [],
              "Second Semester": [],
            },
            Networking: {
              "First Semester": [],
              "Second Semester": [],
            },
          },
        },
      },
    },
  };
  return (
    <form className="flex flex-col items-center w-6/12 bg-neutral-100 p-5 mt-4 rounded-xl shadow-xl border gap-4 *:w-10/12 *:items-center">
      {/* College */}
      <div className="flex flex-row *:grow *:basis-0">
        <legend className="">College: </legend>
        <select
          defaultValue="Select a College"
          className="border rounded py-2 bg-white text-black"
          onChange={handleSetCollege}
        >
          <option disabled={true}>Select a College</option>
          <option>CICS</option>
          <option>COS</option>
        </select>
      </div>

      {/* Department */}
      <div className="flex flex-row *:grow *:basis-0">
        <legend className="">Department: </legend>
        <select
          defaultValue="Select a Department"
          className={`border rounded py-2 ${college ? "bg-white text-black" : "bg-neutral-200 text-neutral-400"}`}
          disabled={college == "" ? true : false}
          onChange={handleSetDepartment}
        >
          <option disabled={true}>Select a Department</option>
          <option>Information Technology</option>
          <option>Computer Science</option>
        </select>
      </div>

      {/* Year */}
      <div className="flex flex-row *:grow *:basis-0">
        <legend className="">Year Level: </legend>
        <select
          defaultValue="Select Year Level"
          className={`border rounded py-2 ${department ? "bg-white text-black" : "bg-neutral-200 text-neutral-400"}`}
          disabled={department == "" ? true : false}
          onChange={handleSetYearLevel}
        >
          <option disabled={true}>Select Year Level</option>
          <option value={1}>First Year</option>
          <option value={2}>Second Year</option>
          <option value={3}>Third Year</option>
          <option value={4}>Fourth Year</option>
        </select>
      </div>

      {/* Semester */}
      <div className="flex flex-row *:grow *:basis-0">
        <legend className="">Semester: </legend>
        <select
          defaultValue="Select Semester"
          className={`border rounded py-2 ${department ? "bg-white text-black" : "bg-neutral-200 text-neutral-400"}`}
          disabled={department == "" ? true : false}
          onChange={handleSetSemester}
        >
          <option disabled={true}>Select Semester</option>
          <option>First Semester</option>
          <option>Second Semester</option>
        </select>
      </div>

      {/* Specialization */}
      <div
        className={`flex-row *:grow *:basis-0 ${parseInt(yearLevel) <= 2 ? "hidden" : "flex"}`}
      >
        <legend className="">Specialization: </legend>
        <select
          defaultValue="Select a Specialization"
          className="border rounded py-2 bg-white text-black"
          onChange={handleSetSpecialization}
        >
          <option disabled={true}>Select a Specialization</option>
          {college in CollegeData && department
            ? (
                CollegeData[college as keyof typeof CollegeData].Specialization[
                  department as keyof (typeof CollegeData)["CICS"]["Specialization"]
                ] || []
              ).map((spec: string) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))
            : null}
        </select>
      </div>

      {/* Subjects */}
      <div
        className={`flex-col *:grow *:basis-0 ${yearLevel == "0" ? "hidden" : "flex"}`}
      >
        <legend className="mr-auto">Subjects: </legend>
        <div className="w-full">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {yearLevel == "0"
                ? null
                : parseInt(yearLevel) <= 2
                  ? semester == ""
                    ? null
                    : (
                        (CollegeData as any)[college]?.Subjects?.[department]?.[
                          yearLevel
                        ]?.[semester] || []
                      ).map((item: string, i: number) => (
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <td>{item}</td>
                        </tr>
                      ))
                  : semester == "" || specialization == ""
                    ? null
                    : (
                        (CollegeData as any)[college]?.Subjects?.[department]?.[
                          yearLevel
                        ]?.[specialization]?.[semester] || []
                      ).map((subject: string, idx: number) => (
                        <tr key={idx}>
                          <th>{idx + 1}</th>
                          <td>{subject}</td>
                        </tr>
                      ))}
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
}
