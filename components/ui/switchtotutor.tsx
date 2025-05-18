'use client'

import Link from "next/link"
import { permanentRedirect } from "next/navigation";

export default function SwitchToTutor() {
    const updateMetadata = async () => {
        const response = await fetch('/api/update-metadata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ role: 'tutor' }),
        });

        const data = await response.json();
        if (data.success) {
            console.log('Metadata updated successfully');
            permanentRedirect('/tutor/dashboard');
        } else {
            console.error('Failed to update metadata:', data.error);
        }
    };

    return (
        <li><Link href="/dashboard" onNavigate={(e) => {
            console.log('Switching to tutor')
            updateMetadata()
            e.preventDefault()
        }} className='bg-gradient-to-r from-green-300 via-green-500 to-blue-400 inline-block text-transparent bg-clip-text font-extrabold'>Switch To Tutor</Link></li>
    )
}