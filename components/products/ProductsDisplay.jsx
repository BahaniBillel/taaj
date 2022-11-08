import React from "react";
import Product from "./Product";

function ProductsDisplay({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6  text-sx px-40 -mt-20">
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  );
}

export default ProductsDisplay;
