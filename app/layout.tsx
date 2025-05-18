import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Link from 'next/link'
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { currentUser } from '@clerk/nextjs/server';
import AdminNavBR from '@/components/admin-nav-br';

export const metadata: Metadata = {
  title: 'AnimoAprendo',
  description: 'Peer to peer learning platform',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await currentUser();

  return (
    <ClerkProvider>
      {user?.publicMetadata.isAdmin == true ? <AdminNavBR /> : null}
      
      {children}
    </ClerkProvider>
  )
}