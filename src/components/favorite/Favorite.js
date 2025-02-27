import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import "./favorite.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromToFavorite } from "../../rit/slices/Favorite-slice";

function Favorite() {
  let favorite = useSelector((state) => state.favorite.item);
  // let prodcut = useSelector((state) => state.prodcut);
  let dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  let showFavorite = favorite.map((favorite) => {
    return (
      <tr key={favorite.id}>
        <td>
          <img
            src={`http://localhost:1337${favorite.attributes.img.data.attributes.url}`}
            alt="..."
          />
        </td>
        <td>{favorite.attributes.title}</td>
        <td>{favorite.attributes.price}</td>
        <td>
          <button
            onClick={() => {
              dispatch(deleteFromToFavorite(favorite));
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="favorite">
      <div className="container">
        <h2>Favorites</h2>
        {favorite.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Img</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{showFavorite}</tbody>
          </table>
        ) : (
          <div className="noPro">
            <div className="icon">
              <FontAwesomeIcon icon={faHeart} className="i" />
            </div>
            <p>
              There Are No Prodcuts In <br /> Your Favorites
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorite;
