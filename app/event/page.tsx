import React from "react";
import Image from "next/image";
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

export default function EventPage() {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <Image
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="event image"
          width={800}
          height={300}
          className="w-full h-[300px] object-cover rounded-t-lg"
        />
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl mb-2">Event</CardTitle>
              <CardDescription>
                Nisi occaecat commodo excepteur pariatur ut velit.
              </CardDescription>
            </div>
            <Button>Register Now</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <span>2023-07-15</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-gray-500" />
              <span>12:00 PM - 8:00 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gray-500" />
              <span>Libreville, Louis</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary"></Badge>
          </div>
        </CardFooter>
      </Card>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Participating Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* This would typically be dynamically generated based on the event */}
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Restaurant {i}</CardTitle>
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
