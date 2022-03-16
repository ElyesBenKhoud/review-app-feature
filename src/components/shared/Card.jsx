import React from "react";

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

export default Card;
