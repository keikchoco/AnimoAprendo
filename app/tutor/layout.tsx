import Footer from "@/components/footer";
import { SignedIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { permanentRedirect } from "next/navigation";
import NavLinksTutor from "@/components/navlinkstutor";
import { useEffect, useState } from "react";
import TutorAlerts, { CreatePopup } from "./alert";
import AlertFragment from "./alert";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  const userid = user?.id;

  if (user?.publicMetadata.role !== "tutor") {
    if (!user?.publicMetadata.role == null) {
      permanentRedirect("/");
    }
  }
  return (
    <>
      <SignedIn>
        <NavLinksTutor />
        <div className="fixed bottom-0 right-0 m-4 z-4">
          <AlertFragment />
        </div>
        {/* Page content here */}
        <div className="flex flex-col grow items-center py-6">{children}</div>
        <div className="">
          <Footer />
        </div>
      </SignedIn>
    </>
  );
}
