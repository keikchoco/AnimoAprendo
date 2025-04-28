import { SignOutButton } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

async function NavLinksTutee() {
      const user = await currentUser()
  
  return (
    <div className='flex flex-row'>
      <div className='flex items-center'>
        <ul className="menu menu-horizontal p-0 hidden lg:flex">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/browse">Browse Subjects</Link></li>
          <li><Link href="/appointments">View Appointments</Link></li>
          <li><Link href="/history">Tutoring History</Link></li>
          <li><Link href="/dashboard" className='bg-gradient-to-r from-green-300 via-green-500 to-blue-400 inline-block text-transparent bg-clip-text font-extrabold'>Switch To Tutor</Link></li>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
            <li className='border-b'><a>Welcome, {user?.username}</a></li>
            <li>
              <Link className="justify-between" href="/profile">
                Profile
                {/* <span className="badge">New</span> */}
              </Link>
            </li>

            <li><SignOutButton/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavLinksTutee