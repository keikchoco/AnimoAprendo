'use client'

import { createToken } from "@/lib/actions"
import { useCallback } from "react"
import { ChannelSort, ChannelFilters, ChannelOptions } from "stream-chat"
import { useCreateChatClient, Chat, ChannelList, Channel, Window, ChannelHeader, MessageList, MessageInput, Thread, DefaultStreamChatGenerics } from "stream-chat-react"
import 'stream-chat-react/dist/css/v2/index.css'

import { EmojiPicker } from "stream-chat-react/emojis"
import { init, SearchIndex} from 'emoji-mart'
import data from '@emoji-mart/data'
init({ data })

interface StreamChatProps {
    userData: {
        id: string
        name?: string
        image?: string
        email: string
        publicMetadata: any
    }
}
export default function StreamChatTutor({ userData }: StreamChatProps) {
    const tokenProvider = useCallback(async () => {
        return await createToken(userData.id)
    }, [userData.id, createToken])

    console.log(tokenProvider)
    const client = useCreateChatClient({
        userData,
        tokenOrProvider: tokenProvider,
        apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!
    })

    const sort: ChannelSort<DefaultStreamChatGenerics> = { last_message_at: -1 }
    const filters: ChannelFilters<DefaultStreamChatGenerics> = {
        type: 'messaging',
        members: { $in: [userData.id] },
        role: { $in: ['tutor'] },
    }
    const options: ChannelOptions = {
        limit: 10
    }

    if (!client) return <div>Setting up client & connection...</div>

    return (
        <Chat client={client}>
            <ChannelList 
                sort={sort}
                filters={filters}
                options={options}
            />
            <Channel EmojiPicker={EmojiPicker} emojiSearchIndex={SearchIndex}>
                <Window>
                    <ChannelHeader />
                    <MessageList />
                    <MessageInput />
                </Window>
                <Thread />
            </Channel>
        </Chat>
    )
}
