export interface ProjectInquiryPayload {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  timeline?: string;
  details: string;
}

export interface ProjectInquiryResponse {
  success: boolean;
  message: string;
}

export async function sendProjectInquiry(
  payload: ProjectInquiryPayload,
): Promise<ProjectInquiryResponse> {
  const apiUrl = import.meta.env.VITE_API_URL;

  if (!apiUrl) {
    throw new Error("VITE_API_URL is not configured.");
  }

  const response = await fetch(`${apiUrl}/api/contact/project-inquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const contentType = response.headers.get("content-type");

  if (!contentType?.includes("application/json")) {
    throw new Error("Server returned an invalid response.");
  }

  const result = (await response.json()) as ProjectInquiryResponse;

  if (!response.ok) {
    throw new Error(result.message || "Unable to send inquiry.");
  }

  return result;
}
