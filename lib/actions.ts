'use server'

import { StreamChat } from 'stream-chat'

const serverClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_API_KEY!, process.env.STREAM_API_SECRET)
// export async function createToken(userId: string, role: String): Promise<string> {
//     // Add custom claims to the token payload
//     const token = serverClient.createToken(userId)
//     return JSON.stringify({ token, role })
// }

export async function createToken(userId: string): Promise<string> {
    return serverClient.createToken(userId)
}