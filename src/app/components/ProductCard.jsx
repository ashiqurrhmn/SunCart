import { Card } from "@heroui/react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <div className="border rounded-lg p-4 mt-6">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
        />
        <h3>{product.name}</h3>
      </div>
    </Card>
  );
};

export default ProductCard;
