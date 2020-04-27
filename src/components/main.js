import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { galleryContext } from "../context";
import { Link, useHistory } from "react-router-dom";

const Main = () => {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState("");
  const handleClose = () => setShow(false);

  const { ind, images, handleIndex, handleBothFunctions } = useContext(
    galleryContext
  );

  const history = useHistory();

  //const { hey } = useContext(galleryContext);
  const showModal = (index) => {
    const selectedImage = images[index];
    setImg(selectedImage.path);
    handleIndex(index);
    setShow(true);
  };

  const gotocart = () => {
    history.push("/cart");
  };

  return (
    <div className="px-2">
      <div className="row">
        {images.map((val, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <img
              src={val.path}
              alt=""
              className="img-thumbnail"
              onClick={() => showModal(index)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img} className="img-thumbnail" alt="" />
        </Modal.Body>
        <Modal.Footer>
          <div className="badge badge-light float-right border border-muted text-secondary">
            <h5>${images[ind].price}</h5>
          </div>
          <Link to="/details" className="btn btn-primary ml-4">
            Details
          </Link>

          <Button variant="secondary">
            <a
              href={img}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              Check Full resolution
            </a>
          </Button>

          <button
            // onClick={() => handleCartIndex(ind)}
            onClick={
              images[ind].addedToCart === "Go to Cart"
                ? gotocart
                : () => handleBothFunctions(ind)
            }
            className={images[ind].cartbutton}
          >
            <i
              className="fas fa-shopping-cart"
              style={{ fontSize: "18px" }}
            ></i>{" "}
            {images[ind].addedToCart}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Main;
