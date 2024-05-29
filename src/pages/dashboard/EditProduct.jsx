import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

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

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const price = form.price.value;
    const category = form.category.value;
    const seller = form.seller.value;
    const productData = {
      id,
      name,
      price,
      category,
      seller,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.patch(
            `http://localhost:3000/products/${id}`,
            productData
          );

          Swal.fire("Updated!", "The product has been updated.", "success");
        } catch (error) {
          Swal.fire(
            "Error!",
            "There was an issue updating the product.",
            "error"
          );
        }
      }
    });
  };
  return (
    <div className="w-2/3 mx-auto">
      <h1 className="text-2xl text-center text-secondary mb-4">
        Update Product
      </h1>
      <form onSubmit={handleUpdateProduct} className="w-full">
        <div className="mb-4">
          <label className="font-medium" htmlFor="">
            Name{" "}
          </label>
          <input
            defaultValue={productDetails?.name}
            type="text"
            name="name"
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
