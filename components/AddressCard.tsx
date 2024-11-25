import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function AddressCard({
  photo,
  name,
  price,
  type,
  link,
}: {
  photo: string;
  name: string;
  price: string;
  type: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <Card className="overflow-hidden">
        <img src={photo} alt={name} className="w-full h-48 object-cover" />
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">{price}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <Badge variant="secondary">{type}</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
