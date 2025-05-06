import { SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-green-900 text-white flex items-center flex-col text-center *:flex *:flex-col *:items-center gap-7 sm:flex-row sm:justify-around p-10">
                <aside>
                    <Image
                        src="/images/AnimoAprendoWhiteTransparent.png"
                        width={100}
                        height={100}
                        alt="logo"
                        className="rounded-full mb-2"
                        />
                    <p>
                        AnimoAprendo.
                        <br />
                        © 2025 - All right reserved
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </>
    )
}

export default Footer