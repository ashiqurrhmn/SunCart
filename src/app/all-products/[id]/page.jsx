import { Card } from "@heroui/react";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://sun-cart-six.vercel.app/data.json");
  const data = await res.json();
  const product = data.find((p) => p.id == id);

  return (
    <div className="min-h-screen mt-20">
      <div>
        <Card className="bg-gray-50 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 p-3 md:p-10">
            <div className="relative w-full aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">
                    <FaRegStar />
                  </span>
                  <span className="ml-1 text-gray-600 font-medium">
                    {product.rating}
                  </span>
                </div>
              </div>

              <p className="text-3xl font-bold text-orange-500 mb-4">
                ${product.price}
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex gap-4 mb-6">
                {product.category && (
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                )}
                {product.brand && (
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                    {product.brand}
                  </span>
                )}
              </div>

              <div className="mb-6">
                {product.stock > 0 ? (
                  <span className="text-green-600 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    In Stock ({product.stock} available)
                  </span>
                ) : (
                  <span className="text-red-600 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    Out of Stock
                  </span>
                )}
              </div>

              <div className="flex gap-4 mt-auto">
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 md:py-3 md:px-6 rounded-xl font-semibold">
                  Add to Cart
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-2 md:py-3 md:px-6 rounded-xl font-semibold">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetails;
