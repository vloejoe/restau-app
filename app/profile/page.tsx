import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { getUserReviews } from "@/lib/reviews"

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  const reviews = await getUserReviews(session.user.id)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
      <p>Email: {session.user.email}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Your Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="border p-4 rounded mb-4">
          <h3 className="text-xl font-semibold">{review.restaurant.name}</h3>
          <p>Rating: {review.rating}/5</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  )
}

