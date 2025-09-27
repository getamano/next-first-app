// app/api/users/[id]/route.ts
import { NextResponse } from "next/server";

import { USERS_DATA } from "@/app/api/users/data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = USERS_DATA.find((u) => u.id === Number(params.id));

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}
