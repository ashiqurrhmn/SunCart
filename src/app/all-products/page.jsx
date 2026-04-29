import ProductCard from "../components/ProductCard";

const AllProducts = async () => {
  const res = await fetch("https://sun-cart-six.vercel.app/data.json");
  const data = await res.json();

  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold">Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
