import Footer from "@/components/footer";
import NavLinksTutee from "@/components/navlinkstutee";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { currentUser } from "@clerk/nextjs/server";
import NavLinksTutor from "@/components/navlinkstutor";
import { permanentRedirect } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  const userid = user?.id;

  if (user?.publicMetadata.role !== "tutor") {
    permanentRedirect("/");
  }
  return (
    <>
      <SignedOut>
        <div className="flex grow p-10 bg-green-950">{children}</div>
      </SignedOut>
      <SignedIn>
        <NavLinksTutor />
        {/* Page content here */}
        <div className="flex flex-col grow items-center w-full py-6">
          {children}
        </div>
        <div className="">
          <Footer />
        </div>
      </SignedIn>
    </>
  );
}
