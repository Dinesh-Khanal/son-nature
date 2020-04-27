import React, { useContext } from "react";
import { galleryContext } from "../context";
import Counter from "./counter";

const Cart = () => {
  const { images, setImages, cind, setCind } = useContext(galleryContext);

  // To get total price---------------------------------------------------------------
  const ttlPriceArray = cind.map(
    (val) => images[val].count * images[val].price
  );

  let totalprice = ttlPriceArray.reduce(getSum, 0);

  function getSum(total, num) {
    return total + num;
  }
  // Getting total price ends ---------------------------------------------------------

  const handleIncrement = (ind) => {
    let tempImage = [...images];
    tempImage[ind].count++;
    setImages(tempImage);
  };

  const handleDecrement = (ind) => {
    let tempImage = [...images];
    tempImage[ind].count--;
    setImages(tempImage);
  };

  const removeIt = (imgId) => {
    console.log(imgId);
    let tempCind = cind.filter((ind) => ind !== imgId);
    setCind(tempCind);
  };

  return (
    <>
      <ol style={{ paddingLeft: 0 }}>
        {cind.map((val, index) => (
          <>
            <li
              key={index}
              style={{
                marginLeft: "3px",
                fontFamily: "cambria",
                fontWeight: "bold",
              }}
            >
              <div className="row">
                <div className="col-sm-3 col-12">
                  <img
                    src={images[val].path}
                    alt=""
                    className="img-fluid mt-1"
                  />
                </div>
                <div className="col-sm-3 col-4" style={{ marginTop: "5%" }}>
                  <Counter
                    onIncrement={() => handleIncrement(val)}
                    onDecrement={() => handleDecrement(val)}
                    count={images[val].count}
                  />
                </div>
                <div
                  className="col-sm-3 col-4"
                  style={{ paddingTop: "auto", marginTop: "6%" }}
                >
                  <i
                    className="fas fa-trash fa-lg text-danger pt-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => removeIt(val)}
                  ></i>
                </div>
                <div
                  className="col-sm-3 col-4 h4"
                  style={{ paddingTop: "auto", marginTop: "6%" }}
                >
                  <span className="badge badge-light  border border-muted">
                    ${images[val].price * images[val].count}
                  </span>
                </div>
              </div>
            </li>
          </>
        ))}
        <div className="row">
          <div className="col-12">
            <span
              className="float-right border border-warning mt-2 p-2 rounded text-secondary"
              style={{ fontSize: "1rem", marginRight: "14%", width: "9rem" }}
            >
              Total price:
              <span
                className="badge badge-warning float-right text-dark"
                style={{ fontSize: "1rem" }}
              >
                $ {totalprice}
              </span>
            </span>
          </div>
        </div>
      </ol>
    </>
  );
};

export default Cart;
