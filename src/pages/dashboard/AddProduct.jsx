import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/categories");
      if (data?.status === 200) {
        setCategories(data?.data);
      }
    }

    load();
  }, []);

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    const form = e.target;

    const id = form.id.value;
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
      confirmButtonText: "Yes, Add it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.post("http://localhost:3000/products", productData);

          Swal.fire("Added!", "The product has been added.", "success");
        } catch (error) {
          Swal.fire(
            "Error!",
            "There was an issue adding the product.",
            "error"
          );
        }
      }
    });
  };
  return (
    <div className="w-2/3 mx-auto">
      <h1 className="text-2xl text-center text-secondary mb-4">Add Product</h1>
      <form onSubmit={handleCreateProduct} className="w-full">
        <div className="mb-4">
          <label className="font-medium" htmlFor="">
            Id{" "}
          </label>
          <input
            type="text"
            name="id"
            className="w-full py-3 px-5 border border-primary rounded"
          />
        </div>
        <div className="mb-4">
          <label className="font-medium" htmlFor="">
            Name{" "}
          </label>
          <input
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
            className="w-full py-3 px-5 border border-primary rounded"
          />
        </div>
        <div className="mb-4">
          <label className="font-medium" htmlFor="">
            Cateogory{" "}
          </label>
          <select
            name="category"
            id=""
            className="w-full py-3 px-5 border border-primary rounded"
          >
            {categories?.map((category) => (
              <option key={category?.id} value={category?.title}>
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
            className="w-full py-3 px-5 border border-primary rounded"
          />
        </div>

        <div className="mb-4 flex justify-center">
          <input
            type="submit"
            value={"Add Product"}
            className="w-1/5 btn py-3 px-5 border border-primary rounded btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
