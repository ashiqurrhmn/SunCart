import ProductCard from "./ProductCard";

const PopularProducts = async () => {
  const res = await fetch("https://sun-cart-six.vercel.app/data.json");
  const data = await res.json();

  const popularProducts = data.slice(0, 3);

  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold">Popular Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
