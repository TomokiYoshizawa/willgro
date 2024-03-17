/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useSelector as UseSelector } from "react-redux";

import OrderDetail from "../../components/OrderDetail/ClientInfo.jsx";

import "./OrderPage.scss";
function OrderPage() {
  useAuth();
  // eslint-disable-next-line no-unused-vars
  const user = UseSelector((state) => state.user.value);
  //   console.log(user);
  const location = useLocation();
  const { selectedProduct } = location.state;
  //   console.log(selectedProduct);

  const SERVER_PUBLIC_FOLDER = import.meta.env.VITE_SERVER_PUBLIC_FOLDER;

  return (
    <div className="order">
      <div className="order__wrapper">
        <div className="order__container--left">
          <div className="order__img-box">
            {selectedProduct && selectedProduct.image && (
              <img
                src={
                  SERVER_PUBLIC_FOLDER + `/products/${selectedProduct.image}`
                }
                alt={selectedProduct.product_name}
                className="order__product-img"
              />
            )}
          </div>
          <p className="order__name">
            {selectedProduct && selectedProduct.product_name}
          </p>
          <p className="order__price">
            {selectedProduct && `$ ${selectedProduct.price}`}
          </p>
        </div>
        <div className="order__container--right">
          <OrderDetail selectedProduct={selectedProduct} />
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
