/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./ProductCard.scss";

const SERVER_PUBLIC_FOLDER = import.meta.env.VITE_SERVER_PUBLIC_FOLDER;

function ProductCard({ productData }) {
  return (
    <div className="product-card">
      <div className="product-card__wrapper">
        <ul className="product-card__list">
          {productData.map((product, index) => (
            <li key={index} className="product-card__item">
              <Link
                className="product-card__link"
                to={`/product/${product.id}`}
                product={product}
              >
                <img
                  src={
                    product.image
                      ? SERVER_PUBLIC_FOLDER + `/products/${product.image}`
                      : SERVER_PUBLIC_FOLDER + "/products/image.jpg"
                  }
                  alt={product.product_name}
                  className="product-card__img"
                />
                <div className="product-card__text-container">
                  <p className="product-card__text">{product.product_name}</p>
                  <p className="product-card__text">{`$ ${product.price}`}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductCard;
