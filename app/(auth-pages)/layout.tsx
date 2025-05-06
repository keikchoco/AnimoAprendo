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
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen m-auto flex flex-col`}>
          <div className='flex grow p-10 bg-green-950'><div className="m-auto w-fit h-full">{children}</div></div>
        </body>
      </html>
    </>

  );
}
