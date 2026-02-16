export default function LearningMoreSection() {
  const cards = [
    {
      image: "/src/assets/images/img8.jpg",
      title: "How to reduce the carbon footprint of a business travel",
      link: "Get help",
    },
    {
      image: "/src/assets/images/img9.jpg",
      title: "The perks and benefits your employees want most",
      link: "Get ideas",
    },
    {
      image:
        "/src/assets/images/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy81NmZhNjBkOS01MjFkLTRhOGUtODRiMS04ODk1ODdiNGQ4Y2EucG5n.jpg",
      title:
        "The route to profitability starts where the traffic isn't stuck on one",
      link: "Keep reading",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">
          Interested in learning more?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="h-95 overflow-hidden mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold mb-2">{card.title}</h3>
              <a href="#" className="text-sm underline">
                {card.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
