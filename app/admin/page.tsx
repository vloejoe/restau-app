"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import addresses from "@/data/address.data";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Addresses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{/* Total addresses */}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Ads</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{/* Active Ads */}</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="addresses">
        {/* Tab navigation */}
        <TabsList>
          <TabsTrigger value="addresses">Manage Addresses</TabsTrigger>
          <TabsTrigger value="ads">Manage Ads</TabsTrigger>
        </TabsList>
        <TabsContent value="addresses">
          <ul className="list-disc pl-5">
            <Table>
              <TableCaption>Liste des Adresses</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Edit</TableHead>
                  <TableHead className="">Nom</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>type</TableHead>
                  <TableHead className="text-right">Host</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {addresses.map((address) => (
                  <TableRow key={address.id}>
                    <TableCell>
                      <Link href={`/admin/address/${address.id}`}>Edit</Link>
                    </TableCell>
                    <TableCell>{address.name}</TableCell>
                    <TableCell>{address.location}</TableCell>
                    <TableCell>{address.type}</TableCell>
                    <TableCell className="text-right">
                      {address.guide.name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ul>
        </TabsContent>
        <TabsContent value="ads">Ads content</TabsContent>
      </Tabs>
    </div>
  );
}
