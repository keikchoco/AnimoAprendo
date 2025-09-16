import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from 'next/server';

// This handler listens for POST requests from Clerk webhooks
export async function POST(req: NextRequest) {
    try {
        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db("main");

        // Parse the incoming JSON payload
        const data = await req.json();

        // Remove "user_" prefix from the id using regex if present
        const userId = data.data.id.replace(/^user_/, "");
        console.log(userId)

        // Update the user data in the "users" collection
        const userData = await db.collection("users").updateOne(
            { _id: userId },
            { $set: { ...data.data } },
            { upsert: true }
        );

        // Log the event or process user creation
        console.log('Received Clerk webhook:', userData);

        // Respond with 200 OK
        return NextResponse.json({ success: true, userData, data }, { status: 200 });
    } catch (error) {
        console.error('Error handling Clerk webhook:', error);
        return NextResponse.json({ success: false, error }, { status: 400 });
    }
}