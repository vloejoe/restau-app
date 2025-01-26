import React from "react";
import AddressCardGrid from "@/components/AddressCardGrid";

export default function AddressPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <AddressCardGrid />
      </main>
    </div>
  );
}
