import { Button, Card, Separator } from "@heroui/react";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <Card className="mt-6 p-8 shadow-lg bg-gray-50">
      <div className="flex items-center flex-col gap-3">
        <div className="relative w-full aspect-square ">
          <Image
            src={product.image}
            alt={product.name}
            fill
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <h3 className="text-sm lg:text-xl font-bold">{product.name}</h3>
          <Separator className="w-full my-3" />
          <div className="w-full flex items-center justify-between mt-2">
            <p className="text-gray-600 flex items-center gap-1 font-semibold">
              <span className="text-orange-500 font-semibold"><FaRegStar /></span> {product.rating}{" "}
            </p>
            <h4 className="text-lg font-semibold">
              ${product.price.toFixed(2)}
            </h4>
          </div>
            <Button variant="outline" className="w-full mt-4 border border-orange-500 text-orange-500 px-3 py-2 rounded-2xl">
              View Details
            </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
