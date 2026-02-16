export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Uber for Business</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-sm text-gray-400 mb-2">VISIT HELP CENTRE</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4">About us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Uber for Everyday
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Uber for Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Uber eats
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Travel</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Airports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cities
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <a className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800">
            f
          </a>
          <a className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800">
            tw
          </a>
          <a className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800">
            yt
          </a>
          <a className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800">
            in
          </a>
        </div>

        <div className="flex gap-4 mb-8">
          <img
            src="https://via.placeholder.com/120x40?text=App+Store"
            alt="App Store"
            className="h-10"
          />
          <img
            src="https://via.placeholder.com/120x40?text=Google+Play"
            alt="Google Play"
            className="h-10"
          />
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-wrap justify-between items-center gap-4 text-xs text-gray-400">
          <div className="flex gap-4">
            <span>© 2026 Uber Technologies Inc.</span>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Accessibility
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded hover:bg-gray-800">
              🌐 English
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded hover:bg-gray-800">
              📍 India
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
