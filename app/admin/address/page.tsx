import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { getRestaurants } from "@/lib/restaurants"

export default async function AddressList() {
  const restaurants = await getRestaurants()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Address List</h1>
      <Button asChild className="mb-4">
        <Link href="/admin/address/create">Add New Address</Link>
      </Button>
      <ul className="space-y-4">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{restaurant.name}</h2>
            <p>{restaurant.address}</p>
            <Button asChild variant="outline" className="mt-2">
              <Link href={`/admin/address/${restaurant.id}/edit`}>Edit</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

