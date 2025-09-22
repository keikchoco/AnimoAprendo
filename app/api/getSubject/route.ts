import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("main");
    const url = new URL(req.url);
    const collection = url.searchParams.get("collection");
    if (collection) {
      const data = await db.collection(collection).find({}).toArray();
      return NextResponse.json({ success: true, data }, {status: 200});
    } else {
      return NextResponse.json({
        success: false,
        error: "No search parameter given.",
      }, {status: 201});
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { success: false, error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
