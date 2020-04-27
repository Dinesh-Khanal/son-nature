import React from "react";

const Counter = ({ onIncrement, onDecrement, count }) => {
  return (
    <span>
      <button
        disabled={count === 1 ? true : false}
        style={{
          fontSize: 12,
          fontFamily: "cambria",
          padding: "5px 9px",
        }}
        className="btn btn-secondary btn-sm"
        onClick={onDecrement}
      >
        -
      </button>

      <span className="badge badge-primary p-2 m-2">{count}</span>

      <button
        className="btn btn-secondary btn-sm"
        style={{ fontSize: 12, fontFamily: "cambria" }}
        onClick={onIncrement}
      >
        +
      </button>
    </span>
  );
};

export default Counter;
