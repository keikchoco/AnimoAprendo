"use client";

import { updateMetadata } from "@/app/actions";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";

export default function SwitchToTutee() {
  const { user } = useUser();
  const userId = user?.id;

  async function handleClick() {
    const res = await updateMetadata({ userId, role: "tutee" });

    if(res.success) {
        permanentRedirect("/")
    }
  }

  return (
    <li>
      <Link
        href="/"
        onNavigate={(e) => {
          console.log("Switching to tutee");
          handleClick();
          e.preventDefault();
        }}
        className="bg-gradient-to-r from-green-300 via-green-500 to-blue-400 inline-block text-transparent bg-clip-text font-extrabold"
      >
        Switch To Tutee
      </Link>
    </li>
  );
}
