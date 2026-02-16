import { useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white  top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl font-bold">
              Uber
              <br />
              <span className="text-sm font-normal">for Business</span>
            </a>

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

          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm flex items-center gap-1">
              <Globe className="w-4 h-4" /> EN
            </button>
            <a href="#" className="text-sm hover:text-gray-300">
              Help
            </a>
            <a href="#" className="text-sm hover:text-gray-300">
              Log in
            </a>
            <a
              href="#"
              className="text-sm px-6 py-2.5 bg-white text-black rounded-full font-medium hover:bg-gray-200"
            >
              Sign up
            </a>
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
