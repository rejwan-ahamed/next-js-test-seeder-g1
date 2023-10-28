// for client side rendering
"use client";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      await setProduct(data.products);
    };
    fetchData();
  }, []);

  return (
    <>
      <h4>This is a product list page</h4>
      {product.map((items) => (
        <h3>{items.title}</h3>
      ))}
    </>
  );
};

export default ProductList;
