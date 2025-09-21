"use client";
import { SignOutButton, useAuth, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { Suspense } from "react";
import SwitchToTutor from "./ui/switchtotutor";
import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ProfileImageSkeleton from "./ui/profile-skeleton";
import Image from "next/image";

function NavLinksTutee() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn, isLoaded, user } = useUser();

  return (
    <header className="bg-green-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[90rem] items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-white/98 font-semibold">AnimoAprendo</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <ul className="menu menu-sm gap-3 dropdown-content rounded-box p-2  text-black z-50">
            <SwitchToTutor />
          </ul>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white/96"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-4 items-center">
          <Link href="/" className="text-sm/6 font-semibold text-white/98">
            Home
          </Link>
          <Link
            href="/browse"
            className="text-sm/6 font-semibold text-white/98"
          >
            Browse
          </Link>
          <Link
            href="/appointments"
            className="text-sm/6 font-semibold text-white/98"
          >
            Appointments
          </Link>
          <Link
            href="/history"
            className="text-sm/6 font-semibold text-white/98"
          >
            History
          </Link>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Suspense fallback={<ProfileImageSkeleton/>}>
                  {isLoaded && user ? (
                    <Image
                      width={120}
                      height={120}
                      alt="Profile Image"
                      src={user.imageUrl}
                      priority={true}
                    />
                  ) : (
                    <ProfileImageSkeleton />
                  )}
                </Suspense>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm gap-3 dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow text-black z-50"
            >
              <li className="border-b">
                <p>Welcome, {user?.username}</p>
              </li>
              <div className="border border-neutral-500 rounded-lg">
                <SwitchToTutor />
              </div>

              <li>
                <Link className="justify-between" href="/profile">
                  Profile
                  {/* <span className="badge">New</span> */}
                </Link>
              </li>

              <li>
                <SignOutButton />
              </li>
            </ul>
          </div>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-hidden bg-green-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="font-semibold text-white/98">AnimoAprendo</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white/96"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root h-full">
            <div className="-my-6 divide-y h-full divide-gray-500/10">
              <div className="py-6 flex flex-col h-full">
                <Link
                  href="/"
                  className="-mx-6 block rounded-lg px-6 py-2.5 text-base/7 font-semibold text-white/98 hover:bg-gray-50 hover:text-black/98"
                >
                  Home
                </Link>
                <Link
                  href="/browse"
                  className="-mx-6 block rounded-lg px-6 py-2.5 text-base/7 font-semibold text-white/98 hover:bg-gray-50 hover:text-black/98"
                >
                  Browse Subjects
                </Link>
                <Link
                  href="/appointments"
                  className="-mx-6 block rounded-lg px-6 py-2.5 text-base/7 font-semibold text-white/98 hover:bg-gray-50 hover:text-black/98"
                >
                  View Appointments
                </Link>
                <Link
                  href="/history"
                  className="-mx-6 block rounded-lg px-6 py-2.5 text-base/7 font-semibold text-white/98 hover:bg-gray-50 hover:text-black/98"
                >
                  Tutoring History
                </Link>
                <div className="mt-auto flex flex-col gap-4">
                  <Link
                  href="/profile"
                  className="block rounded-lg px-2 py-2.5 text-base/7 font-semibold text-white/98 hover:bg-gray-50 hover:text-black/98 bg-blue-700 text-center"
                >
                  View Profile
                </Link>
                <SignOutButton>
                  <div className="block rounded-lg px-2 py-2.5 text-base/7 font-semibold text-white/98 hover:bg-gray-50 hover:text-black/98 select-none cursor-pointer bg-red-800 text-center">
                    Logout
                  </div>
                </SignOutButton>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default NavLinksTutee;
