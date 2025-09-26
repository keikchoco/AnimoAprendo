"use server";
import { auth } from "@clerk/nextjs/server";

export type onboardingData = {
  accountType: string;
  studentRole?: string;
  college?: string;
  department?: string;
  section?: number;
  yearLevel?: number;
};

export type Collections = "users" | "colleges" | "userData" | "faq" | "subjects" | "offerings" | "reviews" | "appointments";

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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/onboarding`,
      {
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
      }
    );

    const data = await response.json();
    if (data.success) {
      return { success: true };
    } else {
      console.error("Error updating publicMetadata:", data.error);
      return { success: false, error: "Failed to update metadata" };
    }
  }
}

export async function updateMetadata({
  userId,
  role,
}: {
  userId: string | undefined;
  role: string;
}) {
  if (!userId) {
    return { success: false, error: "Unauthorized" };
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/updateMetadata`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, role }),
    }
  );

  const data = await response.json();
  if (data.success) {
    return { success: true };
  } else {
    console.error("Error updating publicMetadata:", data.error);
    return { success: false, error: "Failed to update metadata" };
  }
}

export async function getCollectionData(collection: Collections) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getData?collection=${collection}`,
    { method: "GET" }
  );

  const data = await response.json();
  if (data.success) {
    return data
  }
}