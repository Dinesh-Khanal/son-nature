import React, { useState } from "react";
import Photos from "./data";

export const galleryContext = React.createContext();

const GalleryProvider = (props) => {
  const [images, setImages] = useState(Photos);
  const [ind, setInd] = useState(0);
  const [cind, setCind] = useState([]);

  const handleIndex = (idx) => {
    setInd(idx);
  };

  const handleCartIndex = (cidx) => {
    const tempCind = [...cind, cidx];
    setCind(tempCind);
  };

  const changeButton = (ind) => {
    images[ind].addedToCart = "Go to Cart";

    images[ind].cartbutton = "btn btn-warning float-right rounded text-dark";
  };

  const handleBothFunctions = (ind) => {
    changeButton(ind);
    handleCartIndex(ind);
  };

  return (
    <galleryContext.Provider
      value={{
        images,
        ind,
        handleIndex,
        cind,
        setCind,
        handleCartIndex,
        setImages,
        handleBothFunctions,
      }}
    >
      {props.children}
    </galleryContext.Provider>
  );
};

export default GalleryProvider;
