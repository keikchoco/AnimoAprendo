"use server";

export async function uploadBannerServer(file: Blob) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    console.error("Upload failed with status:", response.status);
    return { success: false, error: "Failed to upload banner" };
  }

  const data = await response.json();
  return { success: true, data: data.data };
}

export async function getOffers(userId: string | undefined) {
  if (!userId) {
    return { success: false, error: "Unauthorized" };
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSubjects?userId=${userId}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();

  if (data.success) {
    return { success: true, data: data.data };
  } else {
    console.error("Error get offers:", data.error);
    return { success: false, error: "Failed to get offers" };
  }
}

export async function getOffer(
  userId: string | undefined,
  subjectId: string | undefined
) {
  if (!userId || !subjectId) {
    return { success: false, error: "Unauthorized" };
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSubject?userId=${userId}&subjectId=${subjectId}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();

  if (data.success) {
    return { success: true, data: data.data };
  } else {
    console.error("Error getting offer:", data.error);
    return { success: false, error: "Failed to get offer" };
  }
}

export async function saveSubjectDraft({
  userId,
  sendData,
  documentId,
}: {
  userId: string | undefined;
  documentId: string | undefined;
  sendData: {};
}) {
  if (!userId) {
    return { success: false, error: "Unauthorized" };
  }

  var data;
  if (documentId) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/saveSubject`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          documentId,
          userId,
          ...sendData,
          status: "draft",
        }),
      }
    );
    data = await response.json();
  } else {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/saveSubject`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, ...sendData, status: "draft" }),
      }
    );
    data = await response.json();
  }

  if (data.success) {
    return { success: true, data: data.data };
  } else {
    console.error("Error save draft:", data.error);
    return { success: false, error: "Failed to save draft" };
  }
}

export async function submitSubject({
  userId,
  sendData,
  documentId,
}: {
  userId: string | undefined;
  documentId: string | undefined;
  sendData: {};
}) {
  if (!userId) {
    return { success: false, error: "Unauthorized" };
  }

  var data;
  if (documentId) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/saveSubject`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          documentId,
          userId,
          ...sendData,
          status: "pending",
        }),
      }
    );
    data = await response.json();
  } else {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/saveSubject`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, ...sendData, status: "pending" }),
      }
    );
    data = await response.json();
  }

  if (data.success) {
    return { success: true, data: data.data };
  } else {
    console.error("Error submitting:", data.error);
    return { success: false, error: "Failed to submit" };
  }
}

export async function resumeSubject({
  userId,
  documentId,
}: {
  userId: string | undefined;
  documentId: string;
}) {
  if (!userId) {
    return { success: false, error: "Unauthorized" };
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/saveSubject`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        documentId,
        userId,
        status: "approved"
      }),
    }
  );
  const data = await response.json();

  if (data.success) {
    return { success: true };
  } else {
    console.error("Error deleting:", data.error);
    return { success: false, error: "Failed to delete" };
  }
}

export async function pauseSubject({
  userId,
  documentId,
}: {
  userId: string | undefined;
  documentId: string;
}) {
  if (!userId) {
    return { success: false, error: "Unauthorized" };
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/saveSubject`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        documentId,
        userId,
        status: "paused"
      }),
    }
  );
  const data = await response.json();

  if (data.success) {
    return { success: true };
  } else {
    console.error("Error deleting:", data.error);
    return { success: false, error: "Failed to delete" };
  }
}

export async function deleteSubject({
  userId,
  documentId,
}: {
  userId: string | undefined;
  documentId: string;
}) {
  if (!userId) {
    return { success: false, error: "Unauthorized" };
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/saveSubject`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        documentId,
        userId,
      }),
    }
  );
  const data = await response.json();

  if (data.success) {
    return { success: true };
  } else {
    console.error("Error deleting:", data.error);
    return { success: false, error: "Failed to delete" };
  }
}
