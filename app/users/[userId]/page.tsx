import Link from "next/link";

import User from "@/app/users/user.model";
import { notFound } from "next/navigation";

async function fetchUser(userId: string) {
  const res = await fetch(`${process.env.NEXT_URL}/api/users/${userId}`);
  const user = res.json();
  return user;
}

export default async function Users({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const user: User = await fetchUser(userId);

  if (!user.id) {
    notFound();
  }

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">User: {user.id}</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <div className="card-actions justify-end">
            <Link href={`/users`} className="btn">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
