import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="w-full">

      <div className="px-4 sm:px-8 py-8 sm:py-12 md:py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">

        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-medium mb-2 text-gray-800">
            Summer Style
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight text-gray-900">
            Cool Deals!
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-600">
            Grab your favorite T-shirts at 50% OFF. Stay cool this summer.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 transition px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-white">
            Shop Now
          </button>
        </div>

        <Image
          src="/bannerImg.png"
          alt="Summer Sale Banner"
          loading="eager"
          width={500}
          height={300}
          className="object-cover h-auto w-auto rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Banner;
