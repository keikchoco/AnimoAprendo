import { SignedIn, SignOutButton } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'
import NavLinks from './navlinks'

async function Header() {
    const user = await currentUser()
    return (
        <SignedIn>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-neutral text-neutral-content w-full sticky top-0 z-999">
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
                                <Link href={"/"}>Chronicles</Link>
                            </div>
                        </div>
                        <div className="hidden flex-none lg:block h-10">
                            <div>
                                <ul className="menu menu-horizontal p-0 hidden lg:flex">
                                    <li><Link href="/">Home</Link></li>
                                    <li><a>Browse Subjects</a></li>
                                    <li><a>View Appointments</a></li>
                                    <li><a>Tutoring History</a></li>
                                    <li><a className='bg-gradient-to-r from-green-300 via-green-500 to-blue-400 inline-block text-transparent bg-clip-text font-bold'>Switch To Tutor</a></li>
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
                                            <a className="justify-between">
                                                Profile
                                                {/* <span className="badge">New</span> */}
                                            </a>
                                        </li>

                                        <li><SignOutButton /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <div>
                                <ul className="menu menu-horizontal p-0 hidden lg:flex">
                                    <li><Link href="/">Home</Link></li>
                                    <li><a>Browse Subjects</a></li>
                                    <li><a>View Appointments</a></li>
                                    <li><a>Tutoring History</a></li>
                                    <li><a className='bg-gradient-to-r from-green-300 via-green-500 to-blue-400 inline-block text-transparent bg-clip-text font-bold'>Switch To Tutor</a></li>
                                </ul>
                            </div>
                            <div className="flex-none">
                                {/* <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
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
                                            <a className="justify-between">
                                                Profile
                                                {/* <span className="badge">New</span> */}
                                            </a>
                                        </li>

                                        <li><SignOutButton /></li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>



            <div className="navbar bg-green-900 text-white shadow-sm sm:px-40">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">AnimoAprendo</a>
                </div>
                <div>
                    <ul className="menu menu-horizontal p-0 hidden lg:flex">
                        <li><Link href="/">Home</Link></li>
                        <li><a>Browse Subjects</a></li>
                        <li><a>View Appointments</a></li>
                        <li><a>Tutoring History</a></li>
                        <li><a className='bg-gradient-to-r from-green-300 via-green-500 to-blue-400 inline-block text-transparent bg-clip-text font-bold'>Switch To Tutor</a></li>
                    </ul>
                </div>
                <div className="flex-none">
                    {/* <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
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
                                <a className="justify-between">
                                    Profile
                                    {/* <span className="badge">New</span> */}
                                </a>
                            </li>

                            <li><SignOutButton /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </SignedIn>
    )
}

export default Header