"use client";
import Stepper, { Step } from "@/components/reactbits/stepper";
import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

export default function Onboarding() {
  const [name, setName] = useState<string>("");

  return (
    <div className="bg-radial from-green-400 to-green-800 h-full w-full overflow-x-hidden">
      <Stepper
        initialStep={1}
        onStepChange={(step) => {
          console.log(step);
        }}
        onFinalStepCompleted={() => console.log("All steps completed!")}
        backButtonText="Previous"
        nextButtonText="Next"
        stepCircleContainerClassName="bg-white/95"
        stepTitle="Let's personalize your account!"
      >
        <Step>
          <h1 className="font-bold text-lg">Course Information</h1>
          <br />
          <div className="w-full px-4">
            <Field>
              <Label className="text-sm/6 font-medium text-black">Name</Label>
              <Input
                className={clsx(
                  "mt-1 block w-full rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-black",
                  "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 outline-black/10 data-focus:outline-black/25"
                )}
              />
            </Field>
          </div>
        </Step>
        <Step>
          <h2>Step 2</h2>
          <img
            style={{
              height: "100px",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center -70px",
              borderRadius: "15px",
              marginTop: "1em",
            }}
            src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894"
          />
          <p>Custom step content!</p>
        </Step>
        <Step>
          <h2>How about an input?</h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name?"
          />
        </Step>
        <Step>
          <h2>Final Step</h2>
          <p>You made it!</p>
        </Step>
      </Stepper>
    </div>
  );
}
