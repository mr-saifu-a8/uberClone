export default function HeroSection() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The best of Uber for your business
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With Uber for Business, admin can arrange rides and deliveries for
              their team, and individuals can take care of their business on the
              go. Whatever you need, the Uber platform can make it happen.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition-all">
                Read Uber Guide
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-all">
                Explore travel solutions
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/src/assets/images/img1.jpg"
              alt="Business person in yellow jacket"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
