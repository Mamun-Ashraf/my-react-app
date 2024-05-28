/* eslint-disable react/prop-types */
const CategoryCard = ({ category }) => {
  return (
    <div className="border px-5 py-3 rounded bg-primary text-white">
      <h1 className="text-center">{category?.title}</h1>
    </div>
  );
};

export default CategoryCard;
