const users = [
  { id: 1, username: "aj@next.com", password: "123", role: "ADMIN" },
  { id: 2, username: "admin2", password: "password2", role: "ADMIN" },
  { id: 3, username: "user3", password: "password3", role: "user" },
  { id: 4, username: "user4", password: "password3", role: "user" },
  { id: 5, username: "user5", password: "password3", role: "user" },
];

export default function UsersData() {
  return {
    users,
  };
}
