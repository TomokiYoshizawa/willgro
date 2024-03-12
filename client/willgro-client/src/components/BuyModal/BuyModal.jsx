import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Button from "../Button/Button";

import "./BuyModal.scss";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;
const SERVER_PUBLIC_FOLDER = import.meta.env.VITE_SERVER_PUBLIC_FOLDER;

const BuyModal = () => {
  const [selectedProduct, setSelectedProduct] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSingleProduct = async () => {
      const response = await axios.get(`${VITE_SERVER_URL}/product/${id}`);

      setSelectedProduct(response.data);
    };

    if (id) {
      getSingleProduct();
    }
  }, [id]);

  const handleBuyNow = () => {
    navigate("/payment", { state: { selectedProduct: selectedProduct } });
  };

  return (
    <div className="buy-modal">
      <div className="buy-modal__wrapper">
        <div className="buy-modal__heading-container">
          <h3 className="buy-modal__title">{selectedProduct.product_name}</h3>
        </div>
        <div className="buy-modal__img-container">
          <img
            src={SERVER_PUBLIC_FOLDER + `/products/${selectedProduct.image}`}
            alt={selectedProduct.product}
            className="buy-modal__img"
          />
        </div>
        <div className="buy-modal__text-container">
          <p className="buy-modal__text">$ {selectedProduct.price}</p>
        </div>
      </div>
      <div className="buy-modal__button-container">
        <button
          className="buy-modal__btn buy-modal__btn--mobile"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
        <Link to="/product">
          <button className="buy-modal__btn">Back to Shopping</button>
        </Link>

        <button
          className="buy-modal__btn buy-modal__btn--tablet"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};
export default BuyModal;
