import { NextRequest, NextResponse } from 'next/server';

// This handler listens for POST requests from Clerk webhooks
export async function POST(req: NextRequest) {
    try {
        // Parse the incoming JSON payload
        const data = await req.json();

        // TODO: Add your logic to handle the webhook event here
        // For example, log the event or process user creation
        console.log('Received Clerk webhook:', data);

        // Respond with 200 OK
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error handling Clerk webhook:', error);
        return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
    }
}