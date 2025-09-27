import { NextResponse } from "next/server";

import { USERS_DATA } from "@/app/api/users/data";

export async function GET() {
  return NextResponse.json(USERS_DATA);
}
