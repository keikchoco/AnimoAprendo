import clientPromise from "@/lib/mongodb";
import { clerkClient } from "@clerk/nextjs/server";
import { stat } from "fs";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// This handler listens for POST requests from Clerk webhooks
export async function POST(req: NextRequest) {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("main");

    // Parse the incoming JSON payload
    const data = await req.json();

    if (data.type === "user.created") {
      const client = await clerkClient();
      const user = client.users.updateUserMetadata(data.data.id, { publicMetadata: {onboarded: false} });
      // Remove "user_" prefix from the id using regex if present
      const userId = data.data.id.replace(/^user_/, "");

      // Insert the user data into the "users" collection
      const userDB = await db.collection("users").insertOne({
        _id: userId,
        ...data.data,
      });

      const userData = await db.collection("userdata").insertOne({
        userId: userId,
        tutorData: {},
        tuteeData: {},
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      });

      // Log the event or process user creation
      console.log("Received Clerk webhook:", { user, userDB, userData });

      // Respond with 200 OK
      return NextResponse.json({ success: true, data }, { status: 200 });
    }

    return NextResponse.json(
      { success: false, message: "Not a user.created event" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error handling Clerk webhook:", error);
    return NextResponse.json({ error }, { status: 400 });
  }
}
