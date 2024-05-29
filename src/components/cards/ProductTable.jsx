import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const ProductTable = ({ product }) => {
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/products/${product?.id}`);

          Swal.fire("Deleted!", "The product has been deleted.", "success");
        } catch (error) {
          Swal.fire(
            "Error!",
            "There was an issue deleting the product.",
            "error"
          );
        }
      }
    });
  };

  return (
    <tr>
      <td>{product?.name}</td>
      <td>{product?.price}</td>
      <td>{product?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/editProduct/${product?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-xs btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductTable;
