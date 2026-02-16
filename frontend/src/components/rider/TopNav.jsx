import { useState } from "react";
import { Car, Wrench, UtensilsCrossed, User } from "lucide-react";

export default function TopNav() {
  const [activeTab, setActiveTab] = useState("trip");

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold">Uber</h1>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab("trip")}
              className={`flex items-center gap-2 pb-1 transition-all ${
                activeTab === "trip"
                  ? "border-b-2 border-black font-medium"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <Car className="w-5 h-5" />
              <span>Trip</span>
            </button>

            <button
              onClick={() => setActiveTab("rent")}
              className={`flex items-center gap-2 pb-1 transition-all ${
                activeTab === "rent"
                  ? "border-b-2 border-black font-medium"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <Wrench className="w-5 h-5" />
              <span>Rent</span>
            </button>

            <button
              onClick={() => setActiveTab("eat")}
              className={`flex items-center gap-2 pb-1 transition-all ${
                activeTab === "eat"
                  ? "border-b-2 border-black font-medium"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span>Eat</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 rounded-full transition-all">
            <User className="w-4 h-4" />
            <span>Log in</span>
          </button>
          <button className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-all">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
