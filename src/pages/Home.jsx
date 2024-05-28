import { useEffect, useState } from "react";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import ProductCard from "../components/cards/ProductCard";
import CategoryCard from "../components/cards/CategoryCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);

  useEffect(() => {
    async function load() {
      //get products
      const productRes = await fetch("http://localhost:3000/products");
      const productData = await productRes.json();
      setProducts(productData);
      console.log(products);
      //get categories

      const categoryRes = await fetch("http://localhost:3000/categories");
      const categoryData = await categoryRes.json();

      setProductCategories(categoryData);
    }
    load();
  }, []);
  return (
    <div>
      <Banner />
      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center text-secondary">
          Our Product Categories{" "}
        </h1>
        <div className="grid grid-cols-4 gap-6">
          {productCategories?.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
        </div>
      </div>
      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center text-secondary">
          Our Newest Products{" "}
        </h1>
        <div className="grid grid-cols-4 gap-6">
          {[...products]
            ?.reverse()
            ?.slice(0, 4)
            ?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
        </div>
      </div>
      <Accordian />
    </div>
  );
};

export default Home;
