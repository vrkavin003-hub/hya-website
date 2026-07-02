import { NextResponse } from "next/server";
import { mailtoUrl, readEmail, readString } from "@/lib/form-utils";

export async function POST(request: Request) {
  try {
    const body = await request.formData();
    if (body.get("website")) {
      return NextResponse.json({ message: "Unable to process application." }, { status: 400 });
    }

    const name = readString(body.get("name"), { min: 2, max: 100 });
    const email = readEmail(body.get("email"));
    const role = readString(body.get("role"), { min: 2, max: 100 });
    const message = readString(body.get("message"), { min: 20, max: 2500 });
    const resume = body.get("resume");

    const allowedResumeTypes = new Set([
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]);
    const allowedResumeExtensions = new Set(["pdf", "doc", "docx"]);
    const resumeExtension =
      resume instanceof File ? resume.name.split(".").pop()?.toLowerCase() : null;
    const validResume =
      resume instanceof File &&
      resume.size > 0 &&
      resume.size <= 5 * 1024 * 1024 &&
      allowedResumeTypes.has(resume.type) &&
      Boolean(resumeExtension && allowedResumeExtensions.has(resumeExtension));

    if (!name || !email || !role || !message || !validResume) {
      return NextResponse.json(
        { message: "Please complete every field and upload a PDF, DOC, or DOCX résumé smaller than 5 MB." },
        { status: 400 },
      );
    }

    return NextResponse.json({
      message: "Your application and résumé are validated. Attach the same résumé when your email app opens.",
      mailto: mailtoUrl(`Career application — ${role}`, [
        ["Name", name],
        ["Email", email],
        ["Position", role],
        ["Introduction", message],
        ["Résumé selected", resume instanceof File ? resume.name : null],
        ["Reminder", "Please attach the selected résumé before sending"],
      ]),
    });
  } catch {
    return NextResponse.json(
      { message: "The application could not be prepared. Please try again." },
      { status: 400 },
    );
  }
}
