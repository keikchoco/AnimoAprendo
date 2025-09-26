import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("Saving subject...");
  const sendData = await req.json();
  try {
    const client = await clientPromise;
    const db = client.db("main");
    const data = await db.collection("subjects").insertOne(sendData);

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error updating publicMetadata:", error);
    return NextResponse.json(
      { error: "Failed to update metadata" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  console.log("Updating subject...");
  const sendData = await req.json();
  try {
    const client = await clientPromise;
    const db = client.db("main");
    const { documentId, ...rest } = sendData;
    const data = await db
      .collection("subjects")
      .updateOne(
        { _id: ObjectId.createFromHexString(documentId) },
        { $set: rest }
      );

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error updating publicMetadata:", error);
    return NextResponse.json(
      { error: "Failed to update metadata" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const sendData = await req.json();

  try {
    const client = await clientPromise;
    const db = client.db("main");
    const { documentId, userId } = sendData;

    const data = await db
      .collection("subjects")
      .deleteOne(
        { _id: ObjectId.createFromHexString(documentId), userId: userId },
      );

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error deleting subject:", error);
    return NextResponse.json(
      { error: "Failed to delete subject" },
      { status: 500 }
    );
  }
}
