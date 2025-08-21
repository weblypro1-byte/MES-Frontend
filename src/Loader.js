import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
      <h2>Loading...</h2>
    </div>
  );
};

export default Loader;
