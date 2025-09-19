"use client";
import Stepper, { Step } from "@/components/reactbits/stepper";
import Link from "next/link";
import { PiWarning, PiWarningBold } from "react-icons/pi";

export default function NotFound() {
  return (
    <div className="bg-radial from-green-400 to-green-800 h-full w-full flex flex-col items-center justify-center">
      <Stepper
        initialStep={1}
        stepCircleContainerClassName="bg-white/95"
        disableStepIndicators={true}
        footerClassName="hidden"
      >
        <Step>
          <div className="flex flex-col items-center gap-8 mb-6">
            <PiWarningBold className="text-red-700 size-10" />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-center font-bold text-2xl">Aw dang it..</h1>
              <p className="text-lg text-center">
                I swear we tried very hard to dig this up, but it looks like
                this page doesn't exist.
              </p>
            </div>
            <Link
              href={"/"}
              className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all rounded-2xl shadow font-bold px-4 py-3"
            >
              Go to homepage
            </Link>
          </div>
        </Step>
      </Stepper>
    </div>
  );
}
