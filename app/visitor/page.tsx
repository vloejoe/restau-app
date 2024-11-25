import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Calendar, Users } from 'lucide-react'

export default function VisitorPage() {
  const visits = [
    { id: 1, name: "Le Petit Bistro", date: "2023-06-15", companions: 3 },
    { id: 2, name: "Neon Nights", date: "2023-07-22", companions: 2 },
    { id: 3, name: "Sushi Sensation", date: "2023-08-05", companions: 4 },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Your Visits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visits.map((visit) => (
          <Card key={visit.id}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={visit.name} />
                  <AvatarFallback>{visit.name[0]}</AvatarFallback>
                </Avatar>
                <span>{visit.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4" />
                <span>{visit.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                <Users className="h-4 w-4" />
                <span>{visit.companions} companions</span>
              </div>
              <Button className="w-full">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button>Plan a New Visit</Button>
      </div>
    </div>
  )
}

