"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Utensils, Star, ChevronRight, Euro } from "lucide-react";
import { useParams } from "next/navigation";
import addresses from "@/data/address.data";

export default function AddressDetailPage() {
  {
    /* const router = useRouter();  */
  }
  const params = useParams();
  const id = params.id;
  const address = addresses.find((a) => a.id === parseInt(id as string));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="lg:flex lg:space-x-8">
        {/* Photo Part */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <Carousel>
              <CarouselContent>
                {address?.images.map((img, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={img}
                      alt={`${address?.name} - Image ${index + 1}`}
                      width={600}
                      height={400}
                      className="rounded-lg w-[600px] h-[400px] object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src={address?.images[0]}
                alt={`${address?.name} - Main Image`}
                width={600}
                height={400}
                className="rounded-lg w-[600px] h-[400px] object-cover"
              />
            </div>
            {address?.images
              .slice(1, 5)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${address?.name} - Image ${index + 2}`}
                  width={290}
                  height={190}
                  className="rounded-lg w-[290px] h-[190px] object-cover"
                />
              ))}
          </div>
        </div>

        {/* Info Part */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{address?.name}</h1>
          <div className="flex items-center space-x-2 mb-2">
            <span className="font-semibold">{address?.price}</span>
            <span className="text-gray-600">Prix Moyen</span>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="h-5 w-5 text-gray-500" />
            <span>{address?.location}</span>
          </div>
          <p className="text-gray-600 mb-4">{address?.locationTip}</p>
          <div className="flex items-center space-x-4 mb-4">
            <Badge variant="secondary">
              <Utensils className="h-4 w-4 mr-2" />
              {address?.type}
            </Badge>
            <Badge variant="secondary">
              <Star className="h-4 w-4 mr-2" />
              {address?.ranking}
            </Badge>
          </div>
          <Button className="mb-6">Y aller</Button>
          <Separator className="mb-6" />
          <blockquote className="text-xl italic text-gray-700 mb-6">
            &quot;{address?.quote}&quot;
          </blockquote>
          <Card className="mb-6">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src={address?.guide.avatar}
                    alt={address?.guide.name}
                  />
                  <AvatarFallback>
                    {address?.guide.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{address?.guide.name}</p>
                  <p className="text-sm text-gray-600">
                    {address?.guide.title}
                  </p>
                </div>
              </div>
              <ChevronRight className="h-6 w-6 text-gray-400" />
            </CardContent>
          </Card>
          <Separator className="mb-6" />
          <h2 className="text-2xl font-semibold mb-4">Les Avantages</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {address?.advantages.map((advantage, index) => (
              <Badge key={index} variant="outline">
                {advantage}
              </Badge>
            ))}
          </div>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-lg font-semibold">Budget pour 2</p>
                  <p className="text-3xl font-bold">80€ - 120€</p>
                </div>
                <Euro className="h-10 w-10 text-gray-400" />
              </div>
              <Button className="w-full">Voir le menu</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
