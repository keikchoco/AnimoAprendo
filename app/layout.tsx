import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import NavLinks from '@/components/navlinkstutee'
import Link from 'next/link'
import NavLinksTutee from '@/components/navlinkstutee'
import { headers } from "next/headers";
import { usePathname } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AnimoAprendo',
  description: 'Peer to peer learning platform',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const user = await currentUser()
  // const client = await clerkClient()
  // if (user) {
  //   const response = await client.users.updateUserMetadata(user.id, {
  //     publicMetadata: { role: 'tutee' },
  //   })
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen m-auto flex flex-col`}>
          <SignedOut>
            <div className='flex grow p-10 bg-green-950'>{children}</div>
          </SignedOut>
          <SignedIn>
            <div className="drawer">
              <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Navbar */}
                <div className="navbar bg-green-900 text-white w-full sticky top-0 z-999 md:px20 lg:px-32">
                  <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                    </label>
                  </div>
                  <div className="mx-2 flex-1 px-2">
                    <div className="flex gap-5 items-center text-lg font-semibold">
                      <Link href={"/"}>AnimoAprendo</Link>
                    </div>
                  </div>
                  <div className="hidden flex-none lg:block h-10">
                    {/* <div>{pathname}</div> */}
                    <NavLinksTutee />
                  </div>
                </div>

              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  <NavLinksTutee />
                </ul>
              </div>
            </div>
            {/* Page content here */}
            <div className="flex flex-col grow items-center gap-5 w-full p-6">
              {children}
            </div>
            <div className="">
              <Footer />
            </div>
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  )
}