import { NextResponse } from "next/server";
import { mailtoUrl, readEmail, readString } from "@/lib/form-utils";

export async function POST(request: Request) {
  try {
    const body = await request.formData();
    if (body.get("website")) {
      return NextResponse.json({ message: "Unable to process enquiry." }, { status: 400 });
    }

    const name = readString(body.get("name"), { min: 2, max: 100 });
    const company = readString(body.get("company"), { min: 2, max: 120 });
    const email = readEmail(body.get("email"));
    const phone = readString(body.get("phone"), { max: 40 });
    const service = readString(body.get("service"), { min: 2, max: 100 });
    const message = readString(body.get("message"), { min: 20, max: 3000 });

    if (!name || !company || !email || !service || !message) {
      return NextResponse.json(
        { message: "Please complete every required field with valid information." },
        { status: 400 },
      );
    }

    return NextResponse.json({
      message: "Your enquiry is ready. Your email app should open next.",
      mailto: mailtoUrl(`Project enquiry — ${company}`, [
        ["Name", name],
        ["Company", company],
        ["Email", email],
        ["Phone", phone],
        ["Capability", service],
        ["Project details", message],
      ]),
    });
  } catch {
    return NextResponse.json(
      { message: "The enquiry could not be prepared. Please try again." },
      { status: 400 },
    );
  }
}
