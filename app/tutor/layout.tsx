import Footer from '@/components/footer';
import NavLinksTutee from '@/components/navlinkstutee';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from '@clerk/nextjs'
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google'
import { currentUser } from '@clerk/nextjs/server'
import NavLinksTutor from '@/components/navlinkstutor';
import { permanentRedirect } from 'next/navigation';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  const userid = user?.id;

  if (user?.publicMetadata.role !== 'tutor') {
        permanentRedirect('/')
  }
  return (
    <>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen m-auto flex flex-col`}>
          <SignedOut>
            <div className='flex grow p-10 bg-green-950'>{children}</div>
          </SignedOut>
          <SignedIn>
            <div className="drawer z-50">
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
                    <NavLinksTutor />
                  </div>
                </div>

              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  <NavLinksTutor />

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
    </>

  );
}
