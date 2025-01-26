import React from "react";
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

export default function EventPage() {
  return (
    <>
      {events.map((event) => (
        <div
          className="container mx-auto max-w-lg py-8 flex flex-col gap-4"
          key={event.id}
        >
          <Card key={event.id}>
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
                <Button>Register Now</Button>
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
        </div>
      ))}
    </>
  );
}
