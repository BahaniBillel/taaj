import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import ProductsDisplay from "../components/products/ProductsDisplay";
import Gallery from "../components/grids/Gallery";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addData, selectDB } from "../redux/slices/dbSlice";
import EightGrids from "../components/grids/EightGrids";
import TenGrids from "../components/grids/TenGrids";
import FourGridsCard from "../components/grids/FourGridsCard";

export default function Home() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productsDB = useSelector(selectDB);

  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      // dispatching data from firebase to redux store

      if (querySnapshot) {
        return querySnapshot.docs.map((doc) =>
          dispatch(addData({ ...doc.data() }))
        );
      }
    };
    getProducts();
  }, []);

  console.log(productsDB);
  return (
    <div className="">
      <Head>
        <title>Taaj</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Hero />
        <ProductsDisplay products={productsDB} />
        <EightGrids />
        <TenGrids />
        <FourGridsCard />
      </main>
    </div>
  );
}

// importing data from the server

// export async function getServerSideProps(context) {
//   const products = await fetch("https://fakestoreapi.com/products").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       products,
//     },
//   };
// }
