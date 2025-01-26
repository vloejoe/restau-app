"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";
import events from "@/data/events.data";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function EventPage() {
  {
    /* const router = useRouter(); */
  }
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id as string));

  if (!event) {
    return <div>Event not found. Please check the URL.</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <img
          src={event.image}
          alt={event.title}
          width={800}
          height={300}
          className="w-full h-[300px] object-cover rounded-t-lg"
        />
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl mb-2">{event.title}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </div>
            <Button variant="default">
              <Link href={`/event/${event.id}`}>view event</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-gray-500" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gray-500" />
              <span>{event.location}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Participating Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((restaurantId) => (
            <Card key={restaurantId}>
              <CardHeader>
                <CardTitle>Restaurant {restaurantId}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Featured dish description goes here.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
