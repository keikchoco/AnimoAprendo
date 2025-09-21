"use client"

import { useState } from "react"
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { SignInButton, SignUpButton } from "@clerk/nextjs"

export default function NavLinksGuest() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-green-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[90rem] items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-white font-bold text-lg">AnimoAprendo</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop buttons */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-4 items-center">
          <SignInButton mode="modal">
            <div className="text-sm font-semibold text-white hover:text-gray-200 select-none cursor-pointer">
              Login
            </div>
          </SignInButton>

          <SignUpButton mode="modal">
            <div className="text-sm font-semibold text-white px-4 py-2 rounded-lg bg-green-700 hover:bg-green-800 border border-white/20 select-none cursor-pointer">
              Sign Up
            </div>
          </SignUpButton>
        </PopoverGroup>
      </nav>

      {/* Mobile drawer */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-green-900 p-6 sm:ring-1 sm:ring-gray-900/10">
          {/* Top header */}
          <div className="flex items-center justify-between">
            <a href="/" className="text-lg font-bold text-white">
              AnimoAprendo
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Auth actions */}
          <div className="mt-6 flow-root">
            <div className="flex flex-col gap-4">
              <SignUpButton mode="modal">
                <div className="block rounded-lg px-4 py-3 text-base font-semibold text-center text-white bg-green-700 hover:bg-green-800 cursor-pointer">
                  Create an Account
                </div>
              </SignUpButton>
              <SignInButton mode="modal">
                <div className="block rounded-lg px-4 py-3 text-base font-semibold text-center text-green-900 bg-white hover:bg-gray-100 cursor-pointer">
                  Login
                </div>
              </SignInButton>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
