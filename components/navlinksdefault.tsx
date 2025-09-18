"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-green-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-white/98 font-semibold">AnimoAprendo</span>
          </a>
        </div>
        <div className="flex lg:hidden">
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
          <SignInButton>
            <div className="text-sm/6 font-semibold text-white/98 select-none cursor-pointer">
              Login
            </div>
          </SignInButton>

          <SignUpButton>
            <div className="text-sm/6 font-semibold text-white/98 border border-black/10 px-3 py-1 rounded-lg bg-green-700 hover:bg-green-800 -my-2.5 select-none cursor-pointer">
              Sign Up
            </div>
          </SignUpButton>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-green-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="font-semibold text-white/98">AnimoAprendo</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white/96"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <SignUpButton>
                  <div className="-mx-6 block rounded-lg px-6 py-2.5 text-base/7 font-semibold text-white/98 hover:bg-gray-50 hover:text-black/98 select-none cursor-pointer">
                    Create an account
                  </div>
                </SignUpButton>
                <SignInButton>
                  <div className="-mx-6 block rounded-lg px-6 py-2.5 text-base/7 font-semibold text-white/98 hover:bg-gray-50 hover:text-black/98 select-none cursor-pointer">
                    Log in
                  </div>
                </SignInButton>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
