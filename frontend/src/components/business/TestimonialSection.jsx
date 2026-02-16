export default function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl leading-relaxed font-semibold mb-6">
              "My staff loves using this as it's so straightforward. It's made
              the process very easy, the set up was effortless and the invoicing
              just happens seamlessly in the background. Whether we're planning
              a company event, or using it for our day-to-day business trips,
              everything about this makes our lives easier, and I would happily
              recommend it to anyone else in a similar position."
            </p>
            <p className="font-bold">Paul Davies</p>
            <p className="text-gray-600">The DM Lab</p>
          </div>

          <div>
            <div className="bg-black overflow-hidden">
              <img
                src="/src/assets/images/model13.jpg"
                alt="Testimonial"
                className="w-full h-84 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
