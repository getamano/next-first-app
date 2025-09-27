import Link from "next/link";

async function fetchUsers() {
  const res = await fetch(`${process.env.NEXT_URL}/api/users`);
  const users = res.json();
  return users;
}

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function Users() {
  const users = await fetchUsers();
  return (
    <div>
      <span className="text-xl font-bold">Users</span>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>
                  <Link
                    href={`/users/${user.id}`}
                    className="link link-primary link-hover"
                  >
                    {user.name}
                  </Link>
                </td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
