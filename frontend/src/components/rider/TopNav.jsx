import { useState } from "react";
import { Car, Wrench, UtensilsCrossed, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopNav() {
  const [activeTab, setActiveTab] = useState("trip");

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold">
            Uber
          </Link>

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
          <Link
            to="/auth/login"
            className="py-2 flex items-center gap-2   rounded-full px-3"
          >
            <User className="w-4 h-4" />
            Log in
          </Link>

          <Link
            to="/auth/signup"
            className="py-2 px-6 py-2.5 bg-black text-white font-[font3-medium] rounded-full px-3"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
