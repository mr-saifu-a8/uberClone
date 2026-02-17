import { useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white  top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-2xl  flex flex-col font-[font3-medium]"
            >
              Uber
              <span className="text-sm">for Business</span>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              <button className="text-sm hover:text-gray-300 flex items-center gap-1">
                Overview <ChevronDown className="w-4 h-4" />
              </button>
              <button className="text-sm hover:text-gray-300 flex items-center gap-1">
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <a href="#" className="text-sm hover:text-gray-300">
                Pricing
              </a>
              <button className="text-sm hover:text-gray-300 flex items-center gap-1">
                Customer support <ChevronDown className="w-4 h-4" />
              </button>
              <button className="text-sm hover:text-gray-300 flex items-center gap-1">
                Resources <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <Link
              to="/en"
              className="flex py-2 hover:bg-zinc-900 rounded-full px-3 items-center gap-1"
            >
              <TbWorld size={18} /> EN
            </Link>

            <Link
              to="/help"
              className="py-2 hover:bg-zinc-900 rounded-full px-3"
            >
              Help
            </Link>

            <Link
              to="/auth/login"
              className="py-2 hover:bg-zinc-900 rounded-full px-3"
            >
              Log in
            </Link>

            <Link
              to="/auth/signup"
              className="py-2 bg-white text-black font-[font3-medium] rounded-full px-3"
            >
              Sign up
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
