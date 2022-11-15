import React, { useState } from "react";
import { useRouter } from "next/router";

function ProductDetail({ products }) {
  const router = useRouter();
  const { id } = router.query;
  const [click, setClick] = useState(false);

  const page = products.find((x) => x.id == id);

  const filterArray = () => {
    setClick(!click);
  };

  return (
    <div>
      <button
        type="submit"
        onClick={filterArray}
        className="px-8 py-2 bg-greenSecondary rounded-sm"
      >
        Filter
      </button>
      {click ? (
        products
          .filter((product) => product.id == id)
          .map((product) => (
            <div className="grid grid-flow-dense-9 " key={product.id}>
              <di className="col-span-1 row-span-1">{product.price}</di>
            </div>
          ))
      ) : (
        <div className="animate-pulse text-2xl text-greenPrimary">
          Ain &#39 t no page here
        </div>
      )}
    </div>
  );
}

export default ProductDetail;

// data from the server

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
