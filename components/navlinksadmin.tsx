import { SignOutButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'
import SwitchToTutor from './ui/switchtotutor'

async function NavLinksAdmin() {
  const user = await currentUser()
  return (
    <div className='flex flex-row'>
      <div className='flex items-center'>
        <ul className="menu menu-horizontal p-0 hidden lg:flex">
          <li><Link href="/tutee/home">Home</Link></li>
          <li><Link href="/tutee/browse">Subjects</Link></li>
          <li><Link href="/tutee/appointments">Appointments</Link></li>
          <li><Link href="/tutee/history">Users</Link></li>
        </ul>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user?.imageUrl} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow text-black z-50">
            <li className='border-b'><a>Welcome, {user?.username}</a></li>
            <li>
              <Link className="justify-between" href="/tutee/profile">
                Profile
                {/* <span className="badge">New</span> */}
              </Link>
            </li>

            <li><SignOutButton /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavLinksAdmin