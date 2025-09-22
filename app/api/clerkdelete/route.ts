import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

// This handler listens for POST requests from Clerk webhooks
export async function POST(req: NextRequest) {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("main");

    // Parse the incoming JSON payload
    const data = await req.json();

    if (data.type === "user.deleted") {
      // Remove "user_" prefix from the id using regex if present
      const userId = data.data.id.replace(/^user_/, "");

      // Delete the user data in the "users" collection
      const user = await db.collection("users").deleteOne({ _id: userId });
      const userData = await db.collection("userdata").deleteOne({ userId: userId });

      // Log the event or process user creation
      console.log("Received Clerk webhook:", userData);

      // Respond with 200 OK
      return NextResponse.json(
        { success: true, userData, data },
        { status: 200 }
      );
    }

    return NextResponse.json({ success: false, message: "Not a user.deleted event" }, { status: 201 });
  } catch (error) {
    console.error("Error handling Clerk webhook:", error);
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
