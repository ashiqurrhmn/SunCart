import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const TopBrands = () => {
  const brands = [
    {
      name: "CoolWear",
      desc: "Premium summer clothing",
      img: "/brand2.png",
    },
    {
      name: "FreshSip",
      desc: "Refreshing drinks & beverages",
      img: "/brand3.png",
    },
    {
      name: "SunCart",
      desc: "Stylish sunglasses & accessories",
      img: "/brand1.png",
    },
    {
      name: "UrbanFit",
      desc: "Comfortable summer wear",
      img: "/brand4.png",
    },
  ];
  return (
    <section className="mb-20">
        <h2 className="text-4xl font-bold mb-6">
          Top Brands
        </h2>
      <div className="px-4 sm:px-8">
        <div className="text-center mb-10">
          
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Trusted brands for your summer essentials
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="bg-gray-50 rounded-2xl p-3 md:p-5 lg:p-8 text-center shadow-lg"
            >
              <div className="relative w-full aspect-square mb-3">
                <Image
                  src={brand.img}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className=" object-cover rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{brand.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{brand.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
