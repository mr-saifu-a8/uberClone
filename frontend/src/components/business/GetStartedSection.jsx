export default function GetStartedSection() {
  const steps = [
    {
      image: "/src/assets/images/img5.jpg",
      title: "Customize your travel and meal programs",
      description:
        "Set your own policies, help ensure T&E compliance, and get full visibility into every ride and meal. You can easily integrate with the top expensing partners for seamless expensing without paying a service fee.",
    },
    {
      image: "/src/assets/images/img6.jpg",
      title: "Onboard people at your own pace",
      description:
        "Add individuals, specific teams, or your entire organization at once. After your employees are invited, they can add a business profile for work-related rides and meals to their existing Uber account that they know and trust for business rides and meals.",
    },
    {
      image: "/src/assets/images/img7.jpg",
      title: "Set up amenities for customers",
      description:
        "Send Uber credit in the form of gift cards and vouchers for rides, meals, and more in a snap. You can even request rides for others to make their travel experience practically effortless.",
    },
  ];

  return (
    <section className="pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-4xl font-bold mb-10">
          Get started with no upfront costs
        </h2>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-12 items-start">
              <div className="w-87">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-53"
                />
              </div>

              <div className="flex flex-col items-center relative">
                <div className="w-3 h-3 bg-black relative z-10"></div>
                {index < steps.length - 1 && (
                  <div className="w-[1px] h-69 bg-gray-800 absolute top-3"></div>
                )}
              </div>

              <div className="flex-1 pt-0">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
