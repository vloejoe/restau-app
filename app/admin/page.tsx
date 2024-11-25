"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirection si l'utilisateur n'est pas connecté
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Afficher un loader pendant que la session est vérifiée
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      {/* Contenu principal */}
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
        {/* Gestion des onglets */}
        <TabsList>
          <TabsTrigger value="addresses">Manage Addresses</TabsTrigger>
          <TabsTrigger value="ads">Manage Ads</TabsTrigger>
        </TabsList>
        <TabsContent value="addresses">{/* Contenu Addresses */}</TabsContent>
        <TabsContent value="ads">{/* Contenu Ads */}</TabsContent>
      </Tabs>
    </div>
  );
}
