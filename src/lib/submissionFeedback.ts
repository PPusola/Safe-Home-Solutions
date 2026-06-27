interface SubmissionResponse {
  code?: string;
  error?: string;
  errors?: string[];
}

export async function getSubmissionError(response: Response, fallback: string) {
  try {
    const payload = (await response.json()) as SubmissionResponse;
    const code = payload.code || payload.error || "FORM_SUBMISSION_FAILED";
    const details = payload.errors?.length ? ` ${payload.errors.join(" ")}` : "";
    return `Error ${response.status}: ${code}.${details}`;
  } catch {
    return `Error ${response.status}: ${fallback}`;
  }
}
