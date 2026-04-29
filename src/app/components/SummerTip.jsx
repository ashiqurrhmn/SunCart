import React from "react";

const SummerTip = () => {
  return (
    <div>
      <section className="my-20">
        <h2 className="text-4xl font-bold mb-6">
          Summer Care Tips
        </h2>
        <div className="bg-orange-50 rounded-2xl py-12 px-4 sm:px-8">
          <div className="text-center mb-10">
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Stay cool, fresh, and healthy during hot days
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">💧 Stay Hydrated</h3>
              <p className="text-sm text-gray-600">
                Drink plenty of water and fresh juices to keep your body cool
                and energized.
              </p>
            </div>

           
            <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">🧴 Use Sunscreen</h3>
              <p className="text-sm text-gray-600">
                Apply sunscreen before going outside to protect your skin from
                harmful UV rays.
              </p>
            </div>

         
            <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">
                👕 Wear Light Clothes
              </h3>
              <p className="text-sm text-gray-600">
                Choose breathable fabrics like cotton to stay comfortable in the
                heat.
              </p>
            </div>

            
            <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">
                🧢 Protect from Sun
              </h3>
              <p className="text-sm text-gray-600">
                Use caps, sunglasses, or umbrellas to avoid direct sunlight.
              </p>
            </div>

            
            <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">
                🍉 Eat Fresh Fruits
              </h3>
              <p className="text-sm text-gray-600">
                Water-rich fruits like watermelon help keep you hydrated and
                fresh.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">🚿 Cool Showers</h3>
              <p className="text-sm text-gray-600">
                Take cool showers to refresh your body and reduce heat stress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SummerTip;
