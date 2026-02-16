export default function GlobalPlatformSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl w-[55vw] lg:text-4xl font-bold mb-12">
          A global platform built on the world's largest mobility network
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-40">
            <div className="flex gap-4">
              <div>
                <img className="w-40" src="/src/assets/images/b3.svg" alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  A delivery to 75% more zip codes than anyone in the business
                </h3>
                <p className="text-gray-400">
                  Because of the breadth of Uber's marketplace—from eats to
                  groceries to packages—our couriers are everywhere. This means
                  no matter where you're located, we can deliver to you in the
                  nation's largest delivery zone. Now, that's the definition of
                  bulk.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <img className="w-40" src="/src/assets/images/b2.svg" alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Effortlessly scale with no minimum or surge
                </h3>
                <p className="text-gray-400">
                  Only Uber can provide ride capacity at a moment's
                  notice—including last-minute meetings and VIP visitors.
                  Traditional car services can take weeks to book, and many
                  don't even operate in your area. Not Uber. We dispatch
                  instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-50">
            <div className="flex gap-4">
              <div>
                <img className="w-30" src="/src/assets/images/b1.svg" alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  More cities at all price points with auto-select insights
                </h3>
                <p className="text-gray-400">
                  Whether travelling for business or leisure, Uber is built into
                  more than 10,000 cities. And with the ability to price each
                  trip differently, it delivers a cost-effective way to
                  traverse.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <img className="w-40" src="/src/assets/images/b3.svg" alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Expert safety features and security for your business
                </h3>
                <p className="text-gray-400">
                  We've built safety into each ride with industry-leading
                  features like RideCheck that uses GPS, accelerometer, and
                  other smartphone sensors to detect if your ride has been in a
                  crash. If you're in an area where 112 is available, the app
                  will offer to call 112 for help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
