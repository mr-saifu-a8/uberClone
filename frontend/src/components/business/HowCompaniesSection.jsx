export default function HowCompaniesSection() {
  const useCases = [
    { image: "/src/assets/images/b4.svg", title: "Business travel" },
    { image: "/src/assets/images/b5.svg", title: "Courtesy rides" },
    { image: "/src/assets/images/b6.svg", title: "Meal programs" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center">
          How companies leverage Uber for Business
        </h2>

        <div className="grid md:grid-cols-3 ">
          {useCases.map((useCase, index) => (
            <div key={index} className="text-center">
              <div className="w-90 h-90 mx-20 rounded-full overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full "
                />
              </div>
              <h3 className="font-bold text-2xl">{useCase.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
