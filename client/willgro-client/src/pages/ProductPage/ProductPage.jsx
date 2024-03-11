import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../../components/ProductCard/ProductCard.jsx";

import "./ProductPage.scss";

const { VITE_SERVER_URL } = import.meta.env;

function ProductPage() {
  const [productData, setProducts] = useState([]);

  // get all products
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER_URL}/product`);
      console.log(response.data);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <section className="product-page">
      <div className="product-page__top-container">
        <div className="home__heading-container">
          <h3 className="product-page__heading">Product List</h3>
        </div>
        <div className="product-page__search-container"></div>
      </div>
      <ProductCard productData={productData} />
    </section>
  );
}

export default ProductPage;
