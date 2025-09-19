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
import { permanentRedirect } from "next/navigation";
import NavLinksDefault from "@/components/navlinksdefault";

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

  if (user?.publicMetadata.role !== "tutee") {
    if (!user?.publicMetadata.role == null) {
      permanentRedirect("/");
    }
  }
  return (
    <>
      <SignedOut>
        <NavLinksDefault />
        {/* Page content here */}
        <div className="flex flex-col grow items-center pt-0">
          {children}
        </div>
        <div className="">
          <Footer />
        </div>
      </SignedOut>

      <SignedIn>
        <NavLinksTutee />
        {/* Page content here */}
        <div className="flex flex-col grow items-center w-screen pt-0">
          {/* {!user?.publicMetadata.completeProfile && (
                <div className="bg-amber-200 w-screen px-4 py-2 font-semibold text-lg text-center">
                  Complete your profile to get the best experience with
                  AnimoAprendo{" "}
                  <Link
                    href={"/tutee/completeprofile"}
                    className="shadow-lg rounded-lg px-2 py-1 bg-neutral-100 hover:bg-neutral-200"
                  >
                    Take me there
                  </Link>
                </div>
              )} */}
          {children}
        </div>
        <div className="">
          <Footer />
        </div>
      </SignedIn>
    </>
  );
}
