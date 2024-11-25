import AdSlider from "@/components/AdSlider";
import AddressCardGrid from "@/components/AddressCardGrid";

export default function DiscoverPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <AdSlider />
        <AddressCardGrid />
      </main>
    </div>
  );
}
