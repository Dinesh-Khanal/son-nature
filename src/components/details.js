import React, { useContext } from "react";
import { galleryContext } from "../context";
import { useHistory } from "react-router-dom";

const Details = () => {
  //   const [images] = useState(Photos);
  //   const queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   const ind = urlParams.get("ind");
  //console.log(ind);

  const { ind, images, handleBothFunctions } = useContext(galleryContext);

  const history = useHistory();
  const gotocart = () => {
    history.push("/cart");
  };

  return (
    <div>
      {/* Image */}
      <img
        src={images[ind].path}
        alt=""
        style={{ maxWidth: "100%", height: "auto", marginTop: "15px" }}
        className="border border-success rounded"
      />
      {/* Title */}
      <div className="mt-4 border border-muted rounded pl-2 mb-3">
        <h3>{images[ind].title}</h3>
      </div>
      {/* Description */}
      <p>{images[ind].desc}</p>
      {/* Price */}

      {/* <Link to="/cart"> */}

      {/* <button
        className="btn float-right rounded border border-muted"
        onClick={
          images[ind].addedToCart === "Go to Cart"
            ? gotocart
            : () => handleBothFunctions(ind)
        }
      > */}

      <button
        className={images[ind].cartbutton}
        onClick={
          images[ind].addedToCart === "Go to Cart"
            ? gotocart
            : () => handleBothFunctions(ind, images[ind].cartbutton)
        }
      >
        <i
          className="fas fa-shopping-cart text-warning text-dark"
          style={{ fontSize: "18px" }}
        ></i>{" "}
        {images[ind].addedToCart}
      </button>
      {/* </Link> */}

      <div className="badge badge-info mr-3 mb-5 px-2 float-right">
        <h5>$ {images[ind].price}</h5>
      </div>
    </div>
  );
};

export default Details;
