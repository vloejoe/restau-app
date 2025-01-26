import Link from "next/link";
import navs from "@/data/navs.data";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 absolute b-0 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <p className="text-sm">
              Discover the best bars and restaurants in your area with
              RestauApp.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Menu</h3>
            <ul className="text-sm space-y-2">
              {navs.map((nav) => (
                <li key={nav.name}>
                  <Link href={nav.href} className="hover:underline">
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-900">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-900">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-900">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
          © 2024 RestauApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
