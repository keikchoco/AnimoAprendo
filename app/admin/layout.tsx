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
import { permanentRedirect } from 'next/navigation';
import NavLinksAdmin from '@/components/navlinksadmin';


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

  if (user?.publicMetadata.isAdmin !== true) {
    permanentRedirect('/')
  }
  
  return (
    <>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen max-w-screen overflow-hidden m-auto flex flex-col`}>
          <SignedIn>
            {/* Container */}
            <div className='flex flex-row w-full min-h-screen'>
              {/* Navbar */}
              <div>
                <NavLinksAdmin />
              </div>

              {/* Page Content */}
              <div className='w-auto'>
                <div className='flex flex-wrap gap-2 p-5'>
                  {children}
                </div>
              </div>
            </div>
            
          </SignedIn>
        </body>
      </html>
    </>

  );
}
