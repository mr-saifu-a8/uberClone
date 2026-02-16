import { useState } from "react";
import {
  MapPin,
  Search,
  Clock,
  User,
  Calendar,
  Home,
  Briefcase,
  ChevronRight,
  Star,
  Navigation,
  Menu,
  X,
} from "lucide-react";

// =============================================================================
// TOP HEADER COMPONENT
// =============================================================================
function TopHeader({ onMenuClick }) {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-full transition-all"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">Uber</h1>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
          <User className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

// =============================================================================
// LOCATION SEARCH COMPONENT
// =============================================================================
function LocationSearch({ onFocus }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mx-4 -mt-6 relative z-10">
      {/* Pickup Location */}
      <div
        onClick={onFocus}
        className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg mb-3 cursor-pointer hover:bg-gray-200 transition-all"
      >
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">Pickup location</p>
          <p className="font-medium">Current location</p>
        </div>
        <Navigation className="w-5 h-5 text-gray-600" />
      </div>

      {/* Vertical Line */}
      <div className="w-0.5 h-4 bg-gray-300 ml-5 mb-3"></div>

      {/* Dropoff Location */}
      <div
        onClick={onFocus}
        className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-all"
      >
        <div className="w-2 h-2 bg-black rounded-sm"></div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">Where to?</p>
        </div>
        <Search className="w-5 h-5 text-gray-600" />
      </div>
    </div>
  );
}

// =============================================================================
// SAVED PLACES COMPONENT
// =============================================================================
function SavedPlaces() {
  const places = [
    {
      icon: <Home className="w-5 h-5" />,
      label: "Home",
      address: "Add home",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      label: "Work",
      address: "Add work",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Star className="w-5 h-5" />,
      label: "Starred",
      address: "3 places",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-lg font-bold mb-4">Saved places</h2>
      <div className="space-y-3">
        {places.map((place, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-all"
          >
            <div className={`p-3 rounded-full ${place.color}`}>
              {place.icon}
            </div>
            <div className="flex-1">
              <p className="font-medium">{place.label}</p>
              <p className="text-sm text-gray-500">{place.address}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// SUGGESTIONS COMPONENT
// =============================================================================
function Suggestions() {
  const suggestions = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Schedule a ride",
      subtitle: "Reserve a ride for later",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Reserve",
      subtitle: "Book ahead for peace of mind",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-lg font-bold mb-4">Suggestions</h2>
      <div className="space-y-3">
        {suggestions.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md cursor-pointer transition-all"
          >
            <div className={`p-3 rounded-full ${item.color}`}>{item.icon}</div>
            <div className="flex-1">
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-500">{item.subtitle}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// WAYS TO PLAN WITH UBER
// =============================================================================
function WaysToPlan() {
  const options = [
    {
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop",
      title: "Ride",
      description: "Go anywhere",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      title: "Food",
      description: "Order delivery",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop",
      title: "Package",
      description: "Send things",
    },
  ];

  return (
    <div className="px-4 py-6 bg-gray-50">
      <h2 className="text-lg font-bold mb-4">Ways to plan with Uber</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{option.title}</h3>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// PROMO BANNER
// =============================================================================
function PromoBanner() {
  return (
    <div className="px-4 py-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-2">Save on your first ride</h3>
        <p className="text-sm mb-4 opacity-90">
          Get up to ₹100 off when you sign up
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-all">
          Learn more
        </button>
      </div>
    </div>
  );
}

// =============================================================================
// BOTTOM NAVIGATION
// =============================================================================
function BottomNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "home", icon: <Home className="w-6 h-6" />, label: "Home" },
    { id: "services", icon: <Search className="w-6 h-6" />, label: "Services" },
    { id: "activity", icon: <Clock className="w-6 h-6" />, label: "Activity" },
    { id: "account", icon: <User className="w-6 h-6" />, label: "Account" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-md mx-auto flex justify-around">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex flex-col items-center gap-1 py-3 transition-all ${
              activeTab === tab.id
                ? "text-black"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.icon}
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// SIDE MENU DRAWER
// =============================================================================
function SideMenu({ isOpen, onClose }) {
  const menuItems = [
    { icon: <User className="w-5 h-5" />, label: "Profile", badge: null },
    { icon: <Clock className="w-5 h-5" />, label: "Your trips", badge: null },
    { icon: <Star className="w-5 h-5" />, label: "Help", badge: null },
    {
      icon: <Briefcase className="w-5 h-5" />,
      label: "Business",
      badge: "New",
    },
    { icon: <MapPin className="w-5 h-5" />, label: "Settings", badge: null },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Menu */}
      <div className="fixed top-0 left-0 bottom-0 w-80 bg-white z-50 shadow-xl overflow-y-auto">
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>

          {/* User Info */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-gray-300 rounded-full mb-3 flex items-center justify-center">
              <User className="w-8 h-8 text-gray-600" />
            </div>
            <h2 className="text-2xl font-bold">Rohit Kumar</h2>
            <p className="text-gray-600">4.9 ★</p>
          </div>

          {/* Menu Items */}
          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg transition-all"
              >
                {item.icon}
                <span className="flex-1 text-left font-medium">
                  {item.label}
                </span>
                {item.badge && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button className="text-sm text-gray-600 hover:text-black">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// =============================================================================
// MAIN APP COMPONENT
// =============================================================================
export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Mobile Container */}
      <div className="max-w-md mx-auto bg-white shadow-xl min-h-screen relative">
        {/* Top Header */}
        <TopHeader onMenuClick={() => setIsMenuOpen(true)} />

        {/* Map Background (Placeholder) */}
        <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            <MapPin className="w-12 h-12" />
          </div>
        </div>

        {/* Main Content */}
        <div className="pb-24">
          <LocationSearch onFocus={() => console.log("Search focused")} />
          <SavedPlaces />
          <Suggestions />
          <WaysToPlan />
          <PromoBanner />
        </div>

        {/* Bottom Navigation */}
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Side Menu */}
        <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </div>
  );
}
