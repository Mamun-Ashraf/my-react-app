import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const categoriesData = await axios.get(
        "http://localhost:3000/categories"
      );
      if (categoriesData?.status === 200) {
        setCategories(categoriesData?.data);
      }

      const productData = await axios.get(
        `http://localhost:3000/products/${id}`
      );
      if (productData?.status === 200) {
        setProductDetails(productData?.data);
      }
    }

    load();
  }, [id]);

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const seller = form.seller.value;
    const productData = {
      id,
      title,
      price,
      category,
      seller,
    };

    await axios.patch(`http://localhost:3000/products/${id}`, productData);
  };
  return (
    <div className="w-2/3 mx-auto">
      <h1 className="text-2xl text-center text-secondary mb-4">
        Update Product
      </h1>
      <form onSubmit={handleCreateProduct} className="w-full">
        <div className="mb-4">
          <label className="font-medium" htmlFor="">
            Title{" "}
          </label>
          <input
            defaultValue={productDetails?.name}
            type="text"
            name="title"
            className="w-full py-3 px-5 border border-primary rounded"
          />
        </div>
        <div className="mb-4">
          <label className="font-medium" htmlFor="">
            Price{" "}
          </label>
          <input
            type="number"
            name="price"
            defaultValue={productDetails?.price}
            className="w-full py-3 px-5 border border-primary rounded"
          />
        </div>
        <div className="mb-4">
          <label className="font-medium" htmlFor="">
            Cateogry{" "}
          </label>
          <select
            name="category"
            id=""
            className="w-full py-3 px-5 border border-primary rounded"
          >
            {categories?.map((category) => (
              <option
                key={category?.title}
                selected={category?.title === productDetails?.category}
                value={category?.title}
              >
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="font-medium" htmlFor="">
            Seller{" "}
          </label>
          <input
            type="text"
            name="seller"
            defaultValue={productDetails?.seller}
            className="w-full py-3 px-5 border border-primary rounded"
          />
        </div>

        <div className="mb-4 flex justify-center">
          <input
            type="submit"
            value={"Update Product"}
            className="w-1/5 btn py-3 px-5 border border-primary rounded btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
