import { useState } from "react";
import { ChevronDown, Clock, Users } from "lucide-react";

export default function Sidebar() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  return (
    <div className="w-full h-full bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-6">Find a trip</h2>

      <div className="mb-4">
        <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all cursor-pointer">
          <div className="w-3 h-3 bg-black rounded-full flex-shrink-0"></div>
          <input
            type="text"
            placeholder="Pick-up location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="flex-1 bg-transparent outline-none text-base placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all cursor-pointer">
          <div className="w-3 h-3 bg-black rounded-sm flex-shrink-0"></div>
          <input
            type="text"
            placeholder="Drop-off location"
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
            className="flex-1 bg-transparent outline-none text-base placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="mb-4">
        <button className="w-full flex items-center gap-3 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
          <Clock className="w-5 h-5 flex-shrink-0" />
          <span className="flex-1 text-left">Pick up now</span>
          <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
        </button>
      </div>

      <div className="mb-6">
        <button className="w-full flex items-center gap-3 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
          <Users className="w-5 h-5 flex-shrink-0" />
          <span className="flex-1 text-left">For me</span>
          <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
        </button>
      </div>

      <button className="w-full bg-black text-white py-4 rounded-lg font-medium text-base hover:bg-gray-900 transition-all">
        Search
      </button>
    </div>
  );
}
