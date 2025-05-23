import { SignOutButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'
import SwitchToTutor from './ui/switchtotutor'

async function NavLinksTutee() {
  const user = await currentUser()
  return (
    <div className='flex flex-row'>
      <div className='flex items-center'>
        <ul className="menu menu-horizontal p-0 hidden lg:flex">
          <li><Link href="/tutee/home">Home</Link></li>
          <li><Link href="/tutee/browse">Browse Subjects</Link></li>
          <li><Link href="/tutee/appointments">View Appointments</Link></li>
          <li><Link href="/tutee/history">Tutoring History</Link></li>
          
        </ul>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <Link className="btn btn-ghost btn-circle" href='/tutor/chat'>
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M13 8H7"/><path d="M17 12H7"/></svg>
              <span className="badge badge-md indicator-item font-bolder leading-0 align-top bg-none">0</span>
            </div>
          </Link>
        </div>
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
            className="menu menu-sm gap-3 dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow text-black z-50">
            <li className='border-b'><a>Welcome, {user?.username}</a></li>
            <SwitchToTutor />
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

export default NavLinksTutee