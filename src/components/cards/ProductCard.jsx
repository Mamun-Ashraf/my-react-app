/* eslint-disable react/prop-types */

const ProductCard = ({ product }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={product?.img} alt="food" className="max-w-50" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.name}</h2>
        <h2>
          <span className="font-semibold">Price:</span> ${product?.price}
        </h2>
        <p>
          <span className="font-semibold">Manufacturer:</span> {product?.seller}
        </p>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
