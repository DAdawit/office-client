import React from "react";
import { Link } from "react-router-dom";

const LinkComponent = ({ to, name, className }) => {
  return (
    <Link to={to} className={`hover:underline ${className}`}>
      {name}
    </Link>
  );
};

export default LinkComponent;
