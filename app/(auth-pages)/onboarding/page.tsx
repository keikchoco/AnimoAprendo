"use client";
import { finishOnboarding } from "@/app/actions";
import Stepper, { Step } from "@/components/reactbits/stepper";
import {
  Button,
  Field,
  Label,
  Radio,
  RadioGroup,
  Select,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";
import { redirect, RedirectType, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { PacmanLoader, SyncLoader } from "react-spinners";

type Colleges = {
  name: string;
  abbreviation: string;
  departments: {
    name: string;
    yearLevel: number[];
  }[];
};

const colleges: Colleges[] = [
  {
    name: "College of Information and Computer Studies",
    abbreviation: "CICS",
    departments: [
      {
        name: "Information Technology",
        yearLevel: [5, 5, 5, 5],
      },
      {
        name: "Computer Science",
        yearLevel: [5, 5, 5, 5],
      },
    ],
  },
  {
    name: "College of Science",
    abbreviation: "COS",
    departments: [
      { name: "Biology", yearLevel: [3, 3, 3] },
      { name: "Medical Biology", yearLevel: [3, 4, 5] },
      { name: "Applied Mathematics", yearLevel: [2, 1] },
    ],
  },
];

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [stepTitle, setStepTitle] = useState<ReactNode>(
    <>Let's personalize your account!</>
  );
  const [disableStepIndicators, setDisableStepIndicators] = useState(false);
  const [nextButtonState, setNextButtonState] = useState(false);
  const [accountType, setAccountType] = useState<string>("student");
  const [studentRole, setStudentRole] = useState<string>("tutee");
  const [college, setCollege] = useState<Colleges["abbreviation"]>("");
  const [department, setDepartment] =
    useState<Colleges["departments"][0]["name"]>("");
  const [yearLevel, setYearLevel] = useState<number>(1);
  const [section, setSection] = useState<number>(1);
  const [confirmation, setConfirmation] = useState("no");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setNextButtonState(false);
    if (step == 1) {
      setNextButtonState(true);
    }

    if (step == 2 && accountType == "student") {
      if (college && department) {
        setNextButtonState(true);
      }
    }

    if (step == 3 || (step == 2 && accountType == "teacher")) {
      if (confirmation == "yes") {
        setNextButtonState(true);
      }
    }
  }, [step, department, confirmation]);

  function handleSubmit() {
    console.log("All steps completed, submitting data");
    setDisableStepIndicators(true);
    setStepTitle(
      <div className="flex flex-col gap-4 mb-6">
        Completing Profile <PacmanLoader size={12} />{" "}
        <Link
          href={"/"}
          className={`inline-flex items-center gap-2 rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-inner shadow-black/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-black data-hover:bg-green-700 data-open:bg-green-700 ${complete ? "" : "hidden"}`}
        >
          Complete Profile
        </Link>
      </div>
    );

    finishOnboarding({
      accountType,
      studentRole,
      college,
      department,
      section,
      yearLevel,
    }).then((response) => {
      console.log(response?.success);
      if (response?.success) {
        setTimeout(() => {
          console.log("redirecting");
          setComplete(true);
          window.location.reload();
        }, 3000);
      } else {
        window.location.reload();
      }
    });
  }

  return (
    <div className="bg-radial from-green-400 to-green-800 h-full w-full">
      <Stepper
        initialStep={1}
        onStepChange={setStep}
        onFinalStepCompleted={handleSubmit}
        backButtonText="Previous"
        nextButtonText="Next"
        stepCircleContainerClassName="bg-white/95"
        stepTitle={stepTitle}
        disableStepIndicators={disableStepIndicators}
        nextButtonState={nextButtonState}
      >
        {/* Student or Teacher */}
        <Step>
          <div className="w-full px-4 flex flex-col gap-3">
            <div className="relative w-full">
              <h1 className="text-sm/6 font-medium text-black">Are you a:</h1>
              <RadioGroup
                value={accountType}
                onChange={setAccountType}
                aria-label="Server size"
                className="flex flex-row rounded-xl overflow-hidden w-full *:not-last:border-r-1"
                defaultValue={"student"}
              >
                <Radio
                  value="student"
                  className="group w-full relative flex flex-row justify-center cursor-pointer bg-black/5 px-4 py-2 text-black transition focus:not-data-focus:outline-none data-checked:bg-green-500/90 data-focus:outline data-focus:outline-black"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm/6">
                      <p className="font-semibold text-black text-center select-none">
                        Student
                      </p>
                    </div>
                  </div>
                </Radio>
                <Radio
                  value="teacher"
                  className="group w-full relative flex flex-row justify-center cursor-pointer bg-black/5 px-4 py-2 text-black transition focus:not-data-focus:outline-none data-checked:bg-green-500/90 data-focus:outline data-focus:outline-black"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm/6">
                      <p className="font-semibold text-black text-center select-none">
                        Teacher
                      </p>
                    </div>
                  </div>
                </Radio>
              </RadioGroup>
            </div>

            {accountType == "student" && (
              <div className="relative w-full">
                <h1 className="text-sm/6 font-medium text-black">
                  What are you here for?
                </h1>
                <RadioGroup
                  value={studentRole}
                  onChange={setStudentRole}
                  aria-label="Server size"
                  className="flex flex-row rounded-xl overflow-hidden w-full *:not-last:border-r-1"
                  defaultValue={"tutee"}
                >
                  <Radio
                    value="tutee"
                    className="group w-full relative flex flex-row justify-center cursor-pointer bg-black/5 px-4 py-2 text-black transition focus:not-data-focus:outline-none data-checked:bg-green-500/90 data-focus:outline data-focus:outline-black"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm/6">
                        <p className="font-semibold text-black text-center select-none">
                          To learn
                        </p>
                      </div>
                    </div>
                  </Radio>
                  <Radio
                    value="tutor"
                    className="group w-full relative flex flex-row justify-center cursor-pointer bg-black/5 px-4 py-2 text-black transition focus:not-data-focus:outline-none data-checked:bg-green-500/90 data-focus:outline data-focus:outline-black"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm/6">
                        <p className="font-semibold text-black text-center select-none">
                          To teach
                        </p>
                      </div>
                    </div>
                  </Radio>
                </RadioGroup>
              </div>
            )}
          </div>
        </Step>

        {/* Course Information */}
        {accountType == "student" && (
          <Step>
            <h1 className="font-bold text-lg">Course Information</h1>
            <br />

            <div className="w-full max-w-md px-4 flex flex-col gap-3">
              <Field>
                <Label className="text-sm/6 font-medium text-black">
                  College
                </Label>
                <div className="relative">
                  <Select
                    className={clsx(
                      "mt-1 block w-full appearance-none rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-black",
                      "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25",
                      // Make the text of each option black on Windows
                      "*:text-black"
                    )}
                    value={college}
                    onChange={(e) => {
                      setCollege(e.target.value);
                      setDepartment("");
                      setYearLevel(1);
                      setSection(1);
                    }}
                    id="form-college"
                  >
                    <option value="" disabled>
                      -- Select a College --
                    </option>
                    {colleges.map((data, i) => (
                      <option key={i} value={data.abbreviation}>
                        {data.name}
                      </option>
                    ))}
                  </Select>
                  <ChevronDownIcon
                    className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60"
                    aria-hidden="true"
                  />
                </div>
              </Field>
            </div>

            {college && (
              <div className="w-full max-w-md px-4">
                <Field>
                  <Label className="text-sm/6 font-medium text-black">
                    Department
                  </Label>
                  <div className="relative">
                    <Select
                      className={clsx(
                        "mt-1 block w-full appearance-none rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-black",
                        "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25",
                        // Make the text of each option black on Windows
                        "*:text-black"
                      )}
                      value={department}
                      onChange={(e) => {
                        setDepartment(e.target.value);
                        setYearLevel(1);
                        setSection(1);
                      }}
                      id="form-department"
                    >
                      <option value="" disabled>
                        -- Select a Department --
                      </option>
                      {colleges
                        .find((data) => data.abbreviation === college)
                        ?.departments.map((data, i) => (
                          <option key={i} value={data.name}>
                            {data.name}
                          </option>
                        ))}
                    </Select>
                    <ChevronDownIcon
                      className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60"
                      aria-hidden="true"
                    />
                  </div>
                </Field>
              </div>
            )}

            {department && (
              <div className="w-full px-4">
                <div className="relative w-fit">
                  <h1 className="text-sm/6 font-medium text-black">
                    Year Level
                  </h1>
                  <RadioGroup
                    value={yearLevel}
                    onChange={(e) => {
                      setYearLevel(e);
                      setSection(1);
                    }}
                    aria-label="Server size"
                    className="flex flex-row rounded-xl overflow-hidden w-fit *:not-last:border-r-1"
                    defaultValue={1}
                  >
                    {colleges
                      .find((data) => data.abbreviation === college)
                      ?.departments.find((data) => data.name === department)
                      ?.yearLevel.map((data, i) => (
                        <Radio
                          key={i + 1}
                          value={i + 1}
                          className="group relative flex cursor-pointer bg-black/5 px-4 py-2 text-black transition focus:not-data-focus:outline-none data-checked:bg-green-500/90 data-focus:outline data-focus:outline-black"
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-sm/6">
                              <p className="font-semibold text-black text-center select-none">
                                {i + 1}
                              </p>
                            </div>
                          </div>
                        </Radio>
                      ))}
                  </RadioGroup>
                </div>
              </div>
            )}

            {department && yearLevel && (
              <div className="w-full px-4">
                <div className="relative w-fit">
                  <h1 className="text-sm/6 font-medium text-black">Section</h1>
                  <RadioGroup
                    value={section}
                    onChange={setSection}
                    aria-label="Server size"
                    className="flex flex-row rounded-xl overflow-hidden w-fit *:not-last:border-r-1"
                    defaultValue={1}
                  >
                    {Array.from(
                      {
                        length:
                          colleges
                            .find((data) => data.abbreviation === college)
                            ?.departments.find(
                              (data) => data.name === department
                            )?.yearLevel[yearLevel - 1] || 1,
                      },
                      (_, i) => (
                        <Radio
                          key={i + 1}
                          value={i + 1}
                          className="group relative flex cursor-pointer bg-black/5 px-4 py-2 text-black transition focus:not-data-focus:outline-none data-checked:bg-green-500/90 data-focus:outline data-focus:outline-black"
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-sm/6">
                              <p className="font-semibold text-black text-center select-none">
                                {i + 1}
                              </p>
                            </div>
                          </div>
                        </Radio>
                      )
                    )}
                  </RadioGroup>
                </div>
              </div>
            )}
          </Step>
        )}

        {/* Confirmation */}
        <Step>
          <div className="w-full px-4 flex flex-col gap-3">
            <div className="relative w-full">
              <h1 className="text-sm/6 font-medium text-black">
                Are you sure you provided the correct information?
              </h1>
              <RadioGroup
                value={confirmation}
                onChange={setConfirmation}
                aria-label="Server size"
                className="flex flex-row rounded-xl overflow-hidden w-full *:not-last:border-r-1"
                defaultValue={"no"}
              >
                <Radio
                  value="yes"
                  className="group w-full relative flex flex-row justify-center cursor-pointer bg-black/5 px-4 py-2 text-black transition focus:not-data-focus:outline-none data-checked:bg-green-500/90 data-focus:outline data-focus:outline-black"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm/6">
                      <p className="font-semibold text-black text-center select-none">
                        Yes
                      </p>
                    </div>
                  </div>
                </Radio>
                <Radio
                  value="no"
                  className="group w-full relative flex flex-row justify-center cursor-pointer bg-black/5 px-4 py-2 text-black transition focus:not-data-focus:outline-none data-checked:bg-green-500/90 data-focus:outline data-focus:outline-black"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm/6">
                      <p className="font-semibold text-black text-center select-none">
                        No
                      </p>
                    </div>
                  </div>
                </Radio>
              </RadioGroup>
            </div>
          </div>
        </Step>
      </Stepper>
    </div>
  );
}
