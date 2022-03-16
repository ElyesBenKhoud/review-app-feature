import React from "react";
import propTypes from "prop-types";

const Card = ({ children, reverse }) => {
  //condional styling
  //   return <div className={`card ${reverse && "reverse"}`}>{children} </div>;

  return (
    <div
      className="card"
      //condional styling
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "black",
      }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  childre: propTypes.node.isRequired,
  reverse: propTypes.bool,
};
export default Card;
