//import { redirect } from "next/navigation";
import { GET as authOptions } from "../api/auth/[...nextauth]/route";

//import { getUserReviews } from "@/lib/reviews";
import { getServerSession } from "next-auth/next";

export default async function ProfilePage() {
  const session = (await getServerSession(authOptions)) as { user?: User };

  interface User {
    name?: string;
    email?: string;
    image?: string;
    role: string;
  }

  // if (!session) {
  //   redirect("/login");
  // }
  // if (!session?.user || (session.user as User).role === "ADMIN") {
  //   redirect("/admin");
  // }

  // const reviews = await getUserReviews(session.user.id);

  console.log("session", session.user);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
      {session.user?.name && <p>Name: {session.user.name}</p>}
      <p>Role: {session.user?.role}</p>
      <pre>JSON : {JSON.stringify(session, null, 2)}</pre>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Your Reviews</h2>
      {/*  {reviews.map((review) => (
        <div key={review.id} className="border p-4 rounded mb-4">
          <h3 className="text-xl font-semibold">{review.restaurant.name}</h3>
          <p>Rating: {review.rating}/5</p>
          <p>{review.comment}</p>
        </div> 
      ))}*/}
    </div>
  );
}
