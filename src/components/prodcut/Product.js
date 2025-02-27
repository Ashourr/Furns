import React, { useEffect } from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rit/slices/Prodcut-slice";
// import { addToCart } from "../../rit/slices/Cart-slice";
import {
  addToFavorite,
  deleteFromToFavorite,
} from "../../rit/slices/Favorite-slice";
import { addToCart } from "../../rit/slices/Cart-slice";
function Product() {
  let Prodcuts = useSelector((state) => state.prodcut);
  let favorite = useSelector((state) => state.favorite.item);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  let toggleFavorite = (pro) => {
    if (favorite.some((fav) => fav.id === pro.id)) {
      dispatch(deleteFromToFavorite(pro));
    } else {
      dispatch(addToFavorite(pro));
    }
  };
  let showProcut = Prodcuts.map((pro) => {
    let isFavorite = favorite.some((fav) => fav.id === pro.id);
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 prodcut" key={pro.id}>
        <div className="prodcut-itme">
          <div className="img">
            <img
              src={`http://localhost:1337${pro.attributes.img.data.attributes.url}`}
              alt={pro.attributes.title}
            />
          </div>
          <h6>{pro.attributes.title}</h6>
          <p>{pro.attributes.price} $</p>
          <div className="icons">
            <div onClick={() => toggleFavorite(pro)}>
              <FontAwesomeIcon
                icon={faHeart}
                className={`icon1 ${isFavorite ? "active" : ""}`}
              />
            </div>
            <div onClick={() => dispatch(addToCart(pro))}>
              <FontAwesomeIcon icon={faShoppingCart} className="icon2" />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="prodcuts">
      <div className="title">
        <h2>
          <span>Our</span> Products
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore
        </p>
      </div>
      <div className="container">
        <div className="row">{showProcut}</div>
      </div>
    </div>
  );
}

export default Product;
