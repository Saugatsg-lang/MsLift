"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  { id: "passenger-lift", title: "Passenger Lift", image: "/images/PassengerL.jpg" },
  { id: "hospital-lift", title: "Hospital Lift", image: "/images/HospitalL.jpg" },
  { id: "capsule-lift", title: "Capsule Lift", image: "/images/CapsuleL.jpg" },
  { id: "home-lift", title: "Home Lift", image: "/images/HomeL.jpg" },
  { id: "hydraulic-lift", title: "Hydraulic Lift", image: "/images/HydraulicL.jpg" },
  { id: "car-lift", title: "Car Lift", image: "/images/CarL.jpg" },
];

const OurProducts = () => {
  return (
    <section id="our-products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-black">BROWSE</span>{' '}
          <span className="text-[#4169E1]">OUR PRODUCTS</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Experience the difference with our world-class lift products. Elevate
          your operations with reliability, efficiency, and unmatched
          performance.
        </p>

        {/* 🔹 Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden group">
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 transform group-hover:scale-110"
                  />
                </div>

                {/* Title Section */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black transition duration-300 group-hover:text-[#4169E1]">
                    {product.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurProducts;