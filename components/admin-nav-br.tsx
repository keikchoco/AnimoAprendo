'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiStudent } from "react-icons/pi";


export default function AdminNavBR() {
    const pathname = usePathname();
    const pathParts = pathname.split('/');
    const isAdminPath = pathParts[1] === 'admin';

    return (
        <>
            {!isAdminPath ?
                <Link className="absolute bottom-5 right-5 bg-gray-100 hover:bg-gray-300 z-1000 p-4 rounded-full aspect-square" href="/admin/dashboard">
                    <MdOutlineAdminPanelSettings className='text-2xl' />
                </Link> :
                <Link className="absolute bottom-5 right-5 bg-gray-100 hover:bg-gray-300 z-1000 p-4 rounded-full aspect-square" href="/tutee/home">
                    <PiStudent className='text-2xl' />
                </Link>
            }
        </>
    )
}