import Image from 'next/image';

const About = () => {
  return (
    <section id="about-us" className="py-20 bg-white dark:bg-gray-900">?  {/* Background white dark:bg */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 space-y-6 text-gray-700 dark:text-gray-300">
            {/* Updated Heading */}
            <h1 className="text-3xl md:text-4xl tracking-wider">
              <span className="text-black dark:text-white">WELCOME TO</span>{' '}
              <span className="text-blue-600 dark:text-blue-400">MS</span>{' '}
              <span className="text-orange-500 dark:text-orange-400">ELEVATORS</span>
            </h1>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Precision in Motion. Powering Your Progress.
            </h2>

            <p className="text-lg leading-relaxed">
              MS Elevators, based in Nepalgunj, Nepal, is a premier provider of elevator and escalator solutions, dedicated to delivering innovative and reliable vertical transportation systems across the region. As a trusted name in the industry, we specialize in the design, supply, installation, testing, commissioning, and maintenance of high-quality elevators tailored to meet the diverse needs of residential, commercial, hotel, office, educational, and healthcare facilities.
            </p>

            {/* Features Section */}
            <p className="text-xl md:text-2xl font-semibold leading-relaxed text-blue-900 dark:text-blue-300">
              Elegant Design <br />
              24/7 Support <br />
              Smart Technology <br />
              Smooth Travel
            </p>

            {/* Slogan */}
            <p className="text-xl md:text-2xl font-semibold leading-relaxed text-black dark:text-white">
              Choose MS Elevators for reliable, cutting-edge elevator solutions that move Nepal forward.
            </p>
          </div>

          {/* Right Side: Images with Background */}
          <div className="lg:w-1/2 relative bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-xl dark:from-gray-800 dark:to-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 md:mt-24">
              <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <Image
                  src="/images/Aboutone.jpg"
                  alt="About Us 1"
                  layout="responsive"
                  width={600}
                  height={400}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <Image
                  src="/images/About Two.jpg"
                  alt="About Us 2"
                  layout="responsive"
                  width={600}
                  height={400}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;