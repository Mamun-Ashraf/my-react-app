import axios from "axios";
import { useEffect, useState } from "react";
import ProductTable from "../../components/cards/ProductTable";

const ManageAllProducts = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/products");
      if (data?.status === 200) {
        setProducts(data?.data);
      }
    }
    load();
  }, []);
  return (
    <div className="overflow-x-auto w-full px-16 mt-10">
      <h1 className="text-3xl mb-4">Manage All Products</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <ProductTable key={product?.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllProducts;
