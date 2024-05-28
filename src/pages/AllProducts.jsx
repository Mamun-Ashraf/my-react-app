import { useEffect, useState } from "react";
import ProductCard from "../components/cards/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      //get products
      const productRes = await fetch("http://localhost:3000/products");
      const productData = await productRes.json();
      setProducts(productData);
    }
    load();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
