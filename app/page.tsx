import { currentUser } from '@clerk/nextjs/server'
import { permanentRedirect } from 'next/navigation'
import React from 'react'

export default async function Home() {
    const user = await currentUser()

    if (user?.publicMetadata.role === 'tutee') {
        permanentRedirect('/tutee/home')
    } else if (user?.publicMetadata.role === 'tutor') {
        permanentRedirect('/tutor/dashboard')
    } else if (user?.publicMetadata.role === 'admin') {
        permanentRedirect('/admin/dashboard')
    } else {
        permanentRedirect('/tutee/home')
    }

    return (
        <html lang="en">
        <head>
        </head>
        <body>
            <div>Test</div>
        </body>
        </html>
    )
}