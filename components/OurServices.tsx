import Image from 'next/image';

const services = [
  {
    title: "KIT SUPPLY",
    desc: "We provide high-quality lift kits tailored to your building’s specifications. Our kits include all essential components for safe and efficient installation.",
    image: "/Images/Kit.jpg"
  },
  {
    title: "INSTALLATION",
    desc: "Our expert technicians handle complete lift installation with precision and care, ensuring every step meets industry standards.",
    image: "/Images/Installation.jpg"
  },
  {
    title: "MAINTENANCE",
    desc: "Regular maintenance is key to lift longevity. We offer scheduled inspections and part replacements to keep your system running smoothly.",
    image: "/Images/Maintenance.jpg"
  },
  {
    title: "AMC (Annual Maintenance Contract)",
    desc: "Our AMC packages offer peace of mind with year-round support, reduced downtime, and cost-effective upkeep.",
    image: "/Images/Amc.jpg"
  },
  {
    title: "MODIFICATION",
    desc: "Upgrade your existing lift system with our modification services—enhancing aesthetics, performance, and compliance.",
    image: "/Images/Modification.jpg"
  },
];

export default function Services() {
  return (
    <section id="our-services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold  mb-12 mt-2">
                    <span className="text-black">OUR</span>{' '}
              <span className="text-[#4169E1]">BEST SERVICES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-extrabold text-black mb-4">
                {service.title}
              </h3>
              <div className="relative overflow-hidden rounded-lg mb-4 transform transition duration-300 hover:scale-105">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="responsive"
                  width={600}
                  height={400}
                  objectFit="cover"
                />
              </div>
              <p className="text-gray-700 mb-4">
                {service.desc}
              </p>
              <button
                className="px-6 py-2 rounded-full text-white font-medium transition duration-300"
                style={{
                  background: 'linear-gradient(to right, rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.3))',
                }}
              >
                Get This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}