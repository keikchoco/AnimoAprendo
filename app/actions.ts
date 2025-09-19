"use server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export type onboardingData = {
  accountType: string;
  studentRole?: string;
  college?: string;
  department?: string;
  section?: number;
  yearLevel?: number;
};

export async function finishOnboarding({
  accountType = "student",
  studentRole,
  college,
  department,
  section,
  yearLevel,
}: onboardingData) {
  const { userId } = await auth();
  if (!userId) {
    return { success: false, error: "Unauthorized" };
  }

  if (accountType === "student") {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/onboarding`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        accountType,
        role: studentRole,
        college,
        department,
        yearLevel,
        section,
      }),
    });

    const data = await response.json();
    console.log(data)
    if (data.success) {
      return { success: true };
    } else {
      console.error("Error updating publicMetadata:", data.error);
      return { success: false, error: "Failed to update metadata" };
    }
  }
}
