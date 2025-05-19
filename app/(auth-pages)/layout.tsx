import { ClerkProvider } from '@clerk/nextjs';
import { Geist, Geist_Mono } from 'next/font/google'


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
  return (
    <>
      <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen h-full m-auto flex flex-col bg-radial from-green-600 to-green-950`}>
            {children}
          </body>
        </html>
    </>

  );
}
