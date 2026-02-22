import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { password } = await request.json();
  const correct = process.env.CASE_STUDY_PASSWORD;

  if (!correct) {
    return NextResponse.json({ success: true });
  }

  if (password === correct) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false, message: "Incorrect password" });
}
