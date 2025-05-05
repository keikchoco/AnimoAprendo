import { currentUser } from '@clerk/nextjs/server'
import { permanentRedirect } from 'next/navigation'
import React from 'react'

export default async function Home() {
    const user = await currentUser()
    console.log('user', user)

    if (user?.publicMetadata.role === 'tutor') {
        permanentRedirect('/')
    } else if (user?.publicMetadata.role === 'tutee') {
        permanentRedirect('/dashboard')
    } else if (user?.publicMetadata.role === 'admin') {
        permanentRedirect('/admin')
    }
    return <></>
}