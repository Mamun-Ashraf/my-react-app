import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductTable = ({ product }) => {
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
        <button className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default ProductTable;
