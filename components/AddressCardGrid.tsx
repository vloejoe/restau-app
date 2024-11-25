import AddressCard from "./AddressCard";
import addresses from "../data/address.data";

export default function AddressCardGrid() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Popular Places</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {addresses.map((address, index) => (
          <AddressCard
            key={index}
            photo={address.images[0]}
            name={address.name}
            price={address.price}
            type={address.type}
            link={"/address/" + address.id}
          />
        ))}
      </div>
    </div>
  );
}
