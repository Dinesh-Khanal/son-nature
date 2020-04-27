import React, { useContext } from "react";
import { galleryContext } from "../context";

const Counter = () => {
  const { images, ind, countit, setCountit } = useContext(galleryContext);

  const handleIncrement = (ind) => {
    console.log("increased");
    console.log("ind is:", ind);
    console.log("count is:", images[ind].count);
    let tempCount = countit;
    tempCount++;
    console.log("Increased count is: ", tempCount);
    setCountit(tempCount);
  };

  const handleDecrement = (ind) => {
    console.log("decreased");
    console.log("ind is:", ind);
    console.log("count is:", images[ind].count);
    let tempCount = countit;
    tempCount--;
    console.log("Decreased count is: ", tempCount);
    setCountit(tempCount);
  };

  //const [mylist, setMylist] = useState(["tag1", "tag2", "tag3"]);

  // const formatCount = () => {
  //   return images[ind].count;
  // };

  return (
    <span>
      <button
        disabled={countit === 1 ? true : false}
        style={{
          fontSize: 12,
          fontFamily: "cambria",
          padding: "5px 9px",
        }}
        className="btn btn-secondary btn-sm"
        onClick={() => handleDecrement(ind)}
      >
        -
      </button>

      <span className="badge badge-primary p-2 m-2">{countit}</span>

      <button
        className="btn btn-secondary btn-sm"
        style={{ fontSize: 12, fontFamily: "cambria" }}
        onClick={() => handleIncrement(ind)}
      >
        +
      </button>
    </span>
  );
};

export default Counter;
